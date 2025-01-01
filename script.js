// Unplash API
const count = 10;
const apiKey = '';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos for unsplash api.
async function  getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log('data', data);
    } catch (error) {
        
    }
    
}

// On page load
getPhotos()