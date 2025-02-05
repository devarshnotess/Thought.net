// Assuming you have an API endpoint that returns a list of blog posts
// Replace 'API_URL' with your actual backend API URL to fetch blog posts

const API_URL = 'https://your-backend-api.com/posts';  // Replace with your actual API endpoint

// Function to fetch and display posts dynamically
async function fetchBlogPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();

        const postsContainer = document.getElementById('blog-posts');
        postsContainer.innerHTML = '';  // Clear any existing content

        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('post-card');

            postCard.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="/post/${post.id}" class="read-more">Read more</a>
            `;

            postsContainer.appendChild(postCard);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the fetchBlogPosts function when the page loads
document.addEventListener('DOMContentLoaded', fetchBlogPosts);
