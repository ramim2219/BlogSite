import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Header from '../components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  // Simulating fetching blog posts data
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Simulating sample posts
    setPosts([
      { id: 1, title: 'How to Start a Blog', content: 'Learn how to start your own blog from scratch.' },
      { id: 2, title: '10 Tips for Web Development', content: 'These tips will help you become a better web developer.' },
      { 
        id: 3, 
        title: 'Complete Competitive Programming Guideline', 
        content: 'Competitive Programming (CP) is a fascinating field that helps you develop strong problem-solving and algorithmic skills. Whether you are just starting out or looking to improve your skills, this comprehensive guide will help you understand the key aspects of CP and how to approach it effectively.\n\n1. **Start with the Basics**: Before diving into complex algorithms, make sure you have a good grasp of basic data structures like arrays, stacks, queues, and linked lists. Understanding these fundamentals will serve as the foundation for tackling more advanced problems.\n\n2. **Master Algorithms**: Once you are comfortable with basic data structures, start learning algorithms like sorting, searching, dynamic programming, greedy algorithms, and graph algorithms. Focus on understanding the underlying principles and how to apply them to different problems.\n\n3. **Practice Regularly**: CP is all about practice. Join platforms like Codeforces, LeetCode, HackerRank, and AtCoder to solve problems regularly. Set a goal to solve problems each day, starting from easy and progressing to more difficult problems.\n\n4. **Learn Time and Space Complexity**: Understanding the time and space complexity of algorithms is crucial in CP. This will help you decide which algorithm is optimal for a given problem, ensuring your solution runs within time limits.\n\n5. **Participate in Contests**: Competitive programming contests are a great way to test your skills and improve under time pressure. Platforms like Codeforces, TopCoder, and CodeChef regularly host contests. Participate in them to gain experience and improve your speed and efficiency.\n\n6. **Analyze and Learn from Mistakes**: After each contest or problem-solving session, spend time analyzing your mistakes. This helps you identify areas where you need improvement and avoid repeating the same errors.\n\n7. **Work on Real-World Problems**: In addition to solving algorithmic problems, try applying your CP skills to real-world challenges. This will help you develop a deeper understanding of how algorithms can solve practical problems.\n\n8. **Stay Consistent**: Consistency is key in CP. Set a schedule for practicing regularly and aim for gradual improvement rather than trying to rush through topics.\n\nBy following this guide, you’ll not only improve your competitive programming skills but also become a better problem solver, which will help in interviews and other tech-related tasks.'
      }
      ,
    ]);
  }, []);

  return (
    <div className="bg-gray-50">
      
      {/* Hero Section with Animation */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
        <p className="text-xl mb-8">Sharing my knowledge and experiences on web development, programming, and more!</p>
        <a href="#featured" className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition duration-300" data-aos="zoom-in">Explore Posts</a>
      </section>
      
      {/* Featured Posts Section */}
      <section id="featured" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Home;
