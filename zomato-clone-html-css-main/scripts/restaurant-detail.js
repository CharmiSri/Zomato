// Fetch and display details of a specific restaurant
async function fetchRestaurantDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
        try {
            console.log('Fetching restaurant details...');
            const response = await fetch(`http://localhost:8081/api/restaurants/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched data:', data);
            displayRestaurantDetails(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
}

// Display details of a single restaurant
function displayRestaurantDetails(restaurant) {
    const detailContainer = document.getElementById('restaurant-detail');
    detailContainer.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p><strong>Location:</strong> ${restaurant.location.address}</p>
        <p><strong>Locality:</strong> ${restaurant.location.locality}</p>
        <p><strong>City:</strong> ${restaurant.location.city}</p>
        <p><strong>Cuisine:</strong> ${restaurant.cuisines}</p>
        <p><strong>Rating:</strong> ${restaurant.user_rating.aggregate_rating}</p>
        <p><strong>Average Cost for Two:</strong> ${restaurant.average_cost_for_two} ${restaurant.currency}</p>
        <p><strong>Menu URL:</strong> <a href="${restaurant.menu_url}" target="_blank">View Menu</a></p>
        <p><strong>Photos URL:</strong> <a href="${restaurant.photos_url}" target="_blank">View Photos</a></p>
    `;
}

// Execute fetchRestaurantDetails when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchRestaurantDetails();
});
