const keywordMapping = {
    // Popular Destinations mapped to destination.html
    'paris': 'destination.html',
    'london': 'destination.html',
    'new york': 'destination.html',
    'tokyo': 'destination.html',
    'sydney': 'destination.html',
    'rome': 'destination.html',
    'dubai': 'destination.html',
    'singapore': 'destination.html',
    'hong kong': 'destination.html',
    'barcelona': 'destination.html',
    'amsterdam': 'destination.html',
    'bangkok': 'destination.html',
    'istanbul': 'destination.html',
    'san francisco': 'destination.html',
    'los angeles': 'destination.html',
    'rio de janeiro': 'destination.html',
    'cape town': 'destination.html',
    'berlin': 'destination.html',
    'madrid': 'destination.html',
    'vienna': 'destination.html',
    'prague': 'destination.html',
    'venice': 'destination.html',
    'athens': 'destination.html',
    'budapest': 'destination.html',
    'lisbon': 'destination.html',
    'moscow': 'destination.html',
    'cairo': 'destination.html',
    'dublin': 'destination.html',
    'bali': 'destination.html',
    'miami': 'destination.html',
    'las vegas': 'destination.html',
    'boston': 'destination.html',
    'orlando': 'destination.html',
    'seattle': 'destination.html',
    'chicago': 'destination.html',
    'toronto': 'destination.html',
    'vancouver': 'destination.html',
    'mexico city': 'destination.html',
    'buenos aires': 'destination.html',
    'saint petersburg': 'destination.html',
    'dubrovnik': 'destination.html',
    'auckland': 'destination.html',
    'jakarta': 'destination.html',
    'delhi': 'destination.html',
    'mumbai': 'destination.html',
    'seoul': 'destination.html',
    'beijing': 'destination.html',
    'shanghai': 'destination.html',
    'kuala lumpur': 'destination.html',
    'ho chi minh city': 'destination.html',
    'phuket': 'destination.html',
    'siem reap': 'destination.html',
    'nairobi': 'destination.html',
    'marrakech': 'destination.html',
    'zurich': 'destination.html',
    'geneva': 'destination.html',
    'stockholm': 'destination.html',
    'oslo': 'destination.html',
    'helsinki': 'destination.html',
    'copenhagen': 'destination.html',
    'reykjavik': 'destination.html',
    'edinburgh': 'destination.html',
    'glasgow': 'destination.html',
    'manchester': 'destination.html',
    'brussels': 'destination.html',
    'munich': 'destination.html',
    'florence': 'destination.html',
    'milan': 'destination.html',
    'naples': 'destination.html',
    'santorini': 'destination.html',
    'crete': 'destination.html',
    'porto': 'destination.html',
    'granada': 'destination.html',
    'malaga': 'destination.html',
    'seville': 'destination.html',
    'valencia': 'destination.html',
    'mallorca': 'destination.html',
    'ibiza': 'destination.html',
    'tenerife': 'destination.html',
    'palma': 'destination.html',
    'canary islands': 'destination.html',
    'cape town': 'destination.html',
    'johannesburg': 'destination.html',
    'casablanca': 'destination.html',
    'alexandria': 'destination.html',
    'luxor': 'destination.html',
    'giza': 'destination.html',
    'addis ababa': 'destination.html',
    'accra': 'destination.html',
    'lagos': 'destination.html',
    'abuja': 'destination.html',
    'canberra': 'destination.html',
    'brisbane': 'destination.html',
    'perth': 'destination.html',
    'adelaide': 'destination.html',
    'darwin': 'destination.html',
    'indian': 'destination.html',
    'johannesburg': 'destination.html',
    'india': 'destination.html',    

    // Common Blog Sections
    'about me': 'About.html',
    'contact me': 'contact.html',
    'contact': 'contact.html',
    'about': 'About.html',
    'blog': 'index.html',
    'gallery': 'destination.html',
    'services': 'Tips.html',
    'packages': 'Tips.html',
    'package guide': 'Tips.html',
    'tours': 'destination.html',
    'privacy policy': 'index.html',
    'terms of service': 'index.html',
    'terms and conditions': 'terms-and-conditions.html',
    'faq': 'faq.html',
    'testimonials': 'testimonials.html',
    'destinations': 'destination.html',
    'travel tips': 'Tips.html',
    'adventures': 'destination.html',
    'reviews': 'reviews.html',
    'travel guide': 'Tips.html',
    'tips': 'Tips.html',
    'events': 'events.html',
    'news': 'news.html',
    'partners': 'partners.html',
    'login': 'login.html',
    'register': 'register.html',
    'sign up': 'register.html',
    'sign in': 'login.html',
    'dashboard': 'dashboard.html',
    'profile': 'profile.html',

    // Miscellaneous Searches
    'weather': 'weather.html',
    'maps': 'maps.html',
    'currency': 'currency.html',
    'language': 'language.html',
    'visa requirements': 'visa-requirements.html',
    'passport': 'passport.html',
    'insurance': 'insurance.html',
    'health and safety': 'health-and-safety.html',
    'budget travel': 'budget-travel.html',
    'luxury travel': 'luxury-travel.html',
    'backpacking': 'backpacking.html',
    'road trips': 'road-trips.html',
    'train travel': 'train-travel.html',
    'flights': 'flights.html',
    'accommodation': 'accommodation.html',
    'hotels': 'hotels.html',
    'hostels': 'hostels.html',
    'resorts': 'resorts.html',
    'travel deals': 'travel-deals.html',
    'discounts': 'discounts.html',
    'coupons': 'coupons.html',
    'itinerary': 'itinerary.html',
    'travel gear': 'travel-gear.html',
    'packing list': 'packing-list.html',
    'booking': 'booking.html',
    'cancellations': 'cancellations.html',
    'local cuisine': 'local-cuisine.html',
    'nightlife': 'nightlife.html',
    'culture': 'culture.html',
    'history': 'history.html',
    'art': 'art.html',
    'photography': 'photography.html',
    'video': 'video.html',
    'festivals': 'festivals.html',
    'music': 'music.html',
    'shopping': 'shopping.html',
    'souvenirs': 'souvenirs.html'
};

const inputElement = document.getElementById('searchInput');
const errorMessage = document.getElementById('errorMessage');

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = inputElement.value.toLowerCase().trim();
        if (keywordMapping.hasOwnProperty(input)) {
            window.location.href = keywordMapping[input];
        } else {
            errorMessage.style.display = 'block';
        }
    }
});

// Hide error message on input change
inputElement.addEventListener('input', function() {
    errorMessage.style.display = 'none';
});

const inputElements = document.getElementById('searchInputs');
const errorMessages = document.getElementById('errorMessages');

inputElements.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = inputElements.value.toLowerCase().trim();
        if (keywordMapping.hasOwnProperty(input)) {
            window.location.href = keywordMapping[input];
        } else {
            errorMessages.style.display = 'block';
        }
    }
});

// Hide error message on input change
inputElements.addEventListener('input', function() {
    errorMessages.style.display = 'none';
});