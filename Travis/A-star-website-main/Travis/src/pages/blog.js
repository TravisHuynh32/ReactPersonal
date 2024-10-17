import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const blogTitle = {
  textAlign: 'left',
  fontSize: "16px",
  whiteSpace: 'pre-wrap', 
  overflowWrap: 'break-word', 
  wordBreak: 'break-word',
  padding: "50px"
};

function Blog() {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/comment');
        setComment(response.data.comment); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comment:', error); 
        setLoading(false);
      }
    };
    fetchComment(); 
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Current Tech Terms</h1>
      <h1><pre style={blogTitle}>{comment}</pre></h1>
    </div>
  );
}

export default Blog;
