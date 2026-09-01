async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'TypeError') {
            console.log('Network error or CORS issue');
        } else {
            console.log('Other error:', error.message);
        }
        throw error;  // Re-throw to handle it in the calling function
    }
}

// Using our error handling function
async function getDataSafely() {
    try {
        const data = await fetchWithErrorHandling('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data:', data);
    } catch (error) {
        console.error('Failed to get data:', error);
    }
}