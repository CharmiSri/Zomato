const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors')

const PhotoSchema = new mongoose.Schema({
  photo_id: Number,
  order: Number,
  type: String,
  url: String,
  md5sum: String,
  uuid: Number,
  thumb_url: String
});

const EventSchema = new mongoose.Schema({
  display_date: String,
  end_time: String,
  date_added: String,
  start_date: String,
  photos: [PhotoSchema],
  share_url: String,
  description: String,
  title: String,
  display_time: String,
  book_link: String,
  restaurants: [String], // Assuming it's an array of restaurant IDs
  disclaimer: String,
  friendly_start_date: String,
  is_end_time_set: Number,
  event_id: Number,
  end_date: String,
  event_category: Number,
  friendly_end_date: String,
  is_active: Number,
  start_time: String,
  is_valid: Number,
  event_category_name: String
});

const LocationSchema = new mongoose.Schema({
  latitude: String,
  address: String,
  city: String,
  country_id: Number,
  locality_verbose: String,
  city_id: Number,
  zipcode: String,
  longitude: String,
  locality: String
});

const UserRatingSchema = new mongoose.Schema({
  rating_text: String,
  rating_color: String,
  votes: String,
  aggregate_rating: String
});

const RestaurantSchema = new mongoose.Schema({
  id: { type: String, required: true }, // Required field
  has_online_delivery: Number,
  photos_url: String,
  url: String,
  price_range: Number,
  apikey: String,
  user_rating: UserRatingSchema,
  R: {
    res_id: Number
  },
  name: String,
  cuisines: String,
  is_delivering_now: Number,
  deeplink: String,
  menu_url: String,
  average_cost_for_two: Number,
  book_url: String,
  switch_to_order_menu: Number,
  offers: [String],
  has_table_booking: Number,
  location: LocationSchema,
  featured_image: String,
  zomato_events: [EventSchema],
  currency: String,
  thumb: String,
  establishment_types: [String],
  events_url: String
});

const TopLevelSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  results_found: Number,
  restaurants: [RestaurantSchema]
});

const Photo = mongoose.model('Photo', PhotoSchema);
const Event = mongoose.model('Event', EventSchema);
const Location = mongoose.model('Location', LocationSchema);
const UserRating = mongoose.model('UserRating', UserRatingSchema);
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const TopLevel = mongoose.model('TopLevel', TopLevelSchema);

module.exports = { Photo, Event, Location, UserRating, Restaurant, TopLevel };
