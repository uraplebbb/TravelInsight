const keywordMapping = {
   // Popular Destinations mapped to /General/destination.html
'paris': '/General/destination.html',
'london': '/General/destination.html',
'new york': '/General/destination.html',
'tokyo': '/General/destination.html',
'sydney': '/General/destination.html',
'rome': '/General/destination.html',
'dubai': '/General/destination.html',
'singapore': '/General/destination.html',
'hong kong': '/General/destination.html',
'barcelona': '/General/destination.html',
'amsterdam': '/General/destination.html',
'bangkok': '/General/destination.html',
'istanbul': '/General/destination.html',
'san francisco': '/General/destination.html',
'los angeles': '/General/destination.html',
'rio de janeiro': '/General/destination.html',
'cape town': '/General/destination.html',
'berlin': '/General/destination.html',
'madrid': '/General/destination.html',
'vienna': '/General/destination.html',
'prague': '/General/destination.html',
'venice': '/General/destination.html',
'athens': '/General/destination.html',
'budapest': '/General/destination.html',
'lisbon': '/General/destination.html',
'moscow': '/General/destination.html',
'cairo': '/General/destination.html',
'dublin': '/General/destination.html',
'bali': '/General/destination.html',
'miami': '/General/destination.html',
'las vegas': '/General/destination.html',
'boston': '/General/destination.html',
'orlando': '/General/destination.html',
'seattle': '/General/destination.html',
'chicago': '/General/USA.html',
'toronto': '/General/destination.html',
'vancouver': '/General/destination.html',
'mexico city': '/General/destination.html',
'buenos aires': '/General/destination.html',
'saint petersburg': '/General/destination.html',
'dubrovnik': '/General/destination.html',
'auckland': '/General/destination.html',
'jakarta': '/General/destination.html',
'delhi': '/General/India.html',
'mumbai': '/General/India.html',
'seoul': '/General/destination.html',
'beijing': '/General/destination.html',
'shanghai': '/General/destination.html',
'kuala lumpur': '/General/destination.html',
'ho chi minh city': '/General/destination.html',
'phuket': '/General/destination.html',
'siem reap': '/General/destination.html',
'nairobi': '/General/destination.html',
'marrakech': '/General/destination.html',
'zurich': '/General/destination.html',
'geneva': '/General/destination.html',
'stockholm': '/General/destination.html',
'oslo': '/General/destination.html',
'helsinki': '/General/destination.html',
'copenhagen': '/General/destination.html',
'reykjavik': '/General/destination.html',
'edinburgh': '/General/Uk.html',
'glasgow': '/General/Uk.html',
'manchester': '/General/Uk.html',
'brussels': '/General/destination.html',
'munich': '/General/destination.html',
'florence': '/General/destination.html',
'milan': '/General/destination.html',
'naples': '/General/destination.html',
'santorini': '/General/destination.html',
'crete': '/General/destination.html',
'porto': '/General/destination.html',
'granada': '/General/destination.html',
'malaga': '/General/destination.html',
'seville': '/General/destination.html',
'valencia': '/General/destination.html',
'mallorca': '/General/destination.html',
'ibiza': '/General/destination.html',
'tenerife': '/General/destination.html',
'palma': '/General/destination.html',
'canary islands': '/General/destination.html',
'cape town': '/General/destination.html',
'johannesburg': '/General/destination.html',
'casablanca': '/General/destination.html',
'alexandria': '/General/destination.html',
'luxor': '/General/destination.html',
'giza': '/General/destination.html',
'addis ababa': '/General/destination.html',
'accra': '/General/destination.html',
'lagos': '/General/destination.html',
'abuja': '/General/destination.html',
'canberra': '/General/destination.html',
'brisbane': '/General/destination.html',
'perth': '/General/destination.html',
'adelaide': '/General/destination.html',
'darwin': '/General/destination.html',
'indian': '/General/destination.html',
'johannesburg': '/General/destination.html',
'india': '/General/destination.html',
'Brazil': '/General/Brazil.html',
'Nigeria': '/General/destination.html',
'Uk': '/General/Uk.html',
'Haiti': '/General/Haiti.html',
'home': 'Index.html',
// Common Blog Sections
'about me': '/General/About.html',
'contact me': '/General/contact.html',
'contact': '/General/contact.html',
'about': '/General/About.html',
'blog': '/General/index.html',
'gallery': '/Galery.html',
'services': '/General/Tips.html',
'packages': '/General/Tips.html',
'package guide': '/General/Tips.html',
'tours': '/General/destination.html',
'privacy policy': '/General/index.html',
'terms of service': '/General/index.html',
'terms and conditions': '/General/terms-and-conditions.html',
'faq': '/General/faq.html',
'testimonials': '/General/testimonials.html',
'destinations': '/General/destination.html',
'travel tips': '/General/Tips.html',
'adventures': '/General/destination.html',
'reviews': '/General/reviews.html',
'travel guide': '/General/Tips.html',
'tips': '/General/Tips.html',
'events': '/General/events.html',
'news': '/General/news.html',
'partners': '/General/partners.html',
'login': '/General/login.html',
'register': '/General/register.html',
'sign up': '/General/register.html',
'sign in': '/General/login.html',
'dashboard': '/General/dashboard.html',
'profile': '/General/profile.html',


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