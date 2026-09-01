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



async function getPostsWithParams() {
    // Creating URL with parameters
    const baseUrl = '<https://jsonplaceholder.typicode.com/posts>';
    const params = new URLSearchParams({
        userId: 1,
        _limit: 5
    });

    try {
        const response = await fetch(`${baseUrl}?${params}`);
        const data = await response.json();
        console.log('Posts:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}



async function getPostAndComments(postId) {
    try {
        // Get post and its comments in parallel
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ]);

        // Parse both responses
        const post = await postResponse.json();
        const comments = await commentsResponse.json();

        return {
            post,
            comments
        };
    } catch (error) {
        console.error('Error fetching post and comments:', error);
        throw error;
    }
}

// Using the function
getPostAndComments(1)
    .then(data => {
        console.log('Post:', data.post);
        console.log('Comments:', data.comments);
    })
    .catch(error => console.error('Error:', error));