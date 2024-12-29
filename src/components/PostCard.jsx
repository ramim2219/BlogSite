import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, excerpt, id }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{excerpt}</p>
      <Link to={`/post/${id}`} className="text-blue-600 hover:underline">Read more</Link>
    </div>
  );
};

export default PostCard;
