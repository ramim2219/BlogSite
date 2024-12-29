export const getPosts = async () => {
    // Fetch the posts data from an API or local JSON
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  
  export const getPost = async (id) => {
    // Fetch a single post by ID
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  };
  