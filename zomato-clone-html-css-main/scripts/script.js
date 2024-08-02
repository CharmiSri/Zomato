document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/restaurants')
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data.content)) {
                console.log(data);
                const restaurantList = document.getElementById('restaurant-list');
                restaurantList.innerHTML = '';

                data.content.forEach(item => {
                    if (item && Array.isArray(item.restaurants)) {
                        item.restaurants.forEach(restaurant => {
                            console.log(restaurant);
                            const restaurantCard = document.createElement('div');
                            restaurantCard.className = 'card restaurant-card';
                            restaurantCard.innerHTML = `
                                <img src="${restaurant.restaurant.featured_image}" class="card-img-top" alt="${restaurant.restaurant.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${restaurant.restaurant.name}</h5>
                                    <p class="card-text">4.8</p>
                                    <p class="card-text">${restaurant.restaurant.cuisines}</p>
                                    <p class="card-text">${restaurant.restaurant.location.address}</p>
                                    <p class="card-text">Average cost for two: ₹${restaurant.restaurant.average_cost_for_two}</p>
                                    <a href="${restaurant.restaurant.url}" class="btn btn-dark" target="_blank">More Info</a>
                                </div>
                            `;
                            restaurantList.appendChild(restaurantCard);
                        });
                    } else {
                        console.error('Invalid item format:', item);
                    }
                });
            } else {
                console.error('Invalid data format:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching restaurants:', error);
        });
});
