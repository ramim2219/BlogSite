import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getPost } from '../utils/api';  // Import getPost from api.js

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Fetching blog posts data from API
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    const fetchPosts = async () => {
      // Fetch posts data
      const postsData = await Promise.all([getPost(1), getPost(2), getPost(3)]);

      // Log posts data to check if it's fetched correctly
      console.log('Posts Data:', postsData);

      // Filter out undefined posts
      setPosts(postsData.filter(post => post !== undefined));
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Animation */}
      <section
        className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-24 text-center overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 text-white">
            Welcome to My Blog
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white">
            Sharing my knowledge and experiences on Competitive programming, CSE Core Topics, and more!
          </p>
          <a
            href="#featured"
            className="bg-yellow-400 text-gray-800 py-3 px-8 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
            data-aos="zoom-in"
          >
            Explore Posts
          </a>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured" className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800" data-aos="fade-up">
          Featured Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {posts.map((post, index) => (
            <PostCard
              key={post.id || index}  // Using post.id as key or index as fallback
              id={post.id}
              title={post.title}
              excerpt={post.content ? post.content.substring(0, 150) + '...' : 'No content available'}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
