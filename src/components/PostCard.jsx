import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for React Router instead of <a> for better navigation handling

const PostCard = ({ id, title, excerpt }) => {
  // Conditionally set the link based on the id
  const linkTo = id === 3 ? "/competitive-programming" : `/posts/${id}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{excerpt}</p>
      <Link to={linkTo} className="text-indigo-600 mt-4 inline-block">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
