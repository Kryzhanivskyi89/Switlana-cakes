// Function to fetch data for a specific category

async function fetchGalleryData(category) {
    try {
        const response = await fetch(`https://cakes-backend.onrender.com/gallery/${category}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
        return [];
    }
}

export default fetchGalleryData