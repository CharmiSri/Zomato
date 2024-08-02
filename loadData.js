// const fs = require('fs');
// const path = require('path');
// const mongoose = require('mongoose');
// const Restaurant = require('./models/Restaurant.js'); 

// const jsonDirectory = path.join(__dirname, '..', 'jsonFiles');

// const files = [
//     'file1.json',
//     'file2.json',
//     'file3.json',
//     'file4.json',
//     'file5.json'
// ];

// mongoose.connect('mongodb://localhost:27017/')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//         process.exit(1);
//     });

// const validateRestaurant = (restaurant) => {
    
//     const requiredFields = ['name', 'url'];
//     for (const field of requiredFields) {
//         if (!restaurant[field]) {
//             console.error(`Missing field '${field}' in document:`, restaurant);

//             return false;
//         }
//     }
//     return true;
// };

// const loadFiles = async (files, index = 0) => {
//     if (index >= files.length) {
//         console.log('All data loaded successfully!');
//         mongoose.connection.close();

//         return;
//     }

//     const filePath = path.join(jsonDirectory, files[index]);
//     try {
//         const data = fs.readFileSync(filePath, 'utf8');
//         const restaurants = JSON.parse(data);

//         // Filter out invalid documents
//         const validRestaurants = restaurants.filter(validateRestaurant);

//         if (validRestaurants.length !== restaurants.length) {
//             console.warn(`Some documents in ${files[index]} are missing required fields and have been excluded.`);
//         }

//         await Restaurant.insertMany(validRestaurants); // Use await instead of callback
//         console.log(`Data from ${files[index]} loaded successfully!`);
//         loadFiles(files, index + 1);
//     } catch (err) {
//         console.error(`Error loading data from ${files[index]}:`, err);
//         process.exit(1);
//     }
// };

// loadFiles(files);
