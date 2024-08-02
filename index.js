const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Photo, Event, Location, UserRating, Restaurant, TopLevel }  = require('./models/Restaurant.js'); // Make sure this path is correct

const app = express();
const port = 8081;

//Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../zomato-clone-html-css-main')));

// Connect to MongoDB mongodb://localhost:27017/restaurantDB
mongoose.connect('mongodb://localhost:27017/zomatoDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Root route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../zomato-clone-html-css-main', 'index.html'));
// });
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../zomato-clone-html-css-main', 'index.html');
  console.log('Serving file from:', filePath);
  res.sendFile(filePath);
});


// // Get restaurant by ID
// app.get('/api/restaurants/:id', async (req, res) => {
//   try {
//     const restaurant = await Restaurant.findById(req.params.id).exec();
//     if (restaurant) {
//       res.json(restaurant);
//     } else {
//       res.status(404).send('Restaurant not found');
//     }
//   } catch (err) {
//     res.status(500).send('Error fetching restaurant');
//   }
// });

// // Get list of restaurants
app.get('/api/restaurants', async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const size = parseInt(req.query.size) || 10;

  try {
    const restaurants = await Restaurant.find()
      .skip(page * size)
      .limit(size)
      .exec();
    res.json({ content: restaurants });
  } catch (err) {
    res.status(500).send('Error fetching restaurants');
  }
});

// app.get('/api/restaurants', async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;
//   const skip = (page - 1) * limit;

//   try {
//       // Fetch paginated data
//       const restaurants = await Restaurant.find()
//           .skip(skip)
//           .limit(limit);

//       // Get total number of documents
//       const count = await Restaurant.countDocuments();

//       res.json({
//           data: restaurants,
//           totalItems: count,
//           totalPages: Math.ceil(count / limit),
//           currentPage: page,
//           itemsPerPage: limit
//       });
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// });


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
