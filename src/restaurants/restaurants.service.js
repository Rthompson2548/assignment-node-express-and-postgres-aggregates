const knex = require("../db/connection");


function averageRating() {
  // your solution here
  return knex("restaurants").avg("rating as average_rating").first();
}


// count
function count() {
  return knex("restaurants")
  .count("*")
}

function create(newRestaurant) {
  return knex("restaurants")
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex("restaurants").where({ restaurant_id }).del();
}

function list() {
  return knex("restaurants").select("*");
}

function read(restaurant_id) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}


// readHighestRated
function readHighestRated() {
  return knex("restaurants").max("rating").select("*").groupBy("rating", "restaurant_id").orderBy("rating", "desc").first()
}


function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  read,
  readHighestRated,
  update,
};
