import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../utils/api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id);
      setPost(data);
    };

    fetchPost();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {post ? (
        <>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
