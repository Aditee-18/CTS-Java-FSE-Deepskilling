import React, { useState } from 'react';

function BlogDetails() {
  const [showComments, setShowComments] = useState(true);
  const [unreadCount] = useState(3);

  const blog = {
    title: 'Mastering Conditional Rendering in React',
    author: 'John Doe',
    isVerifiedAuthor: true,
    content: 'Conditional rendering in React works the same way conditions work in JavaScript...',
    comments: [
      { id: 1, text: 'Great article!', user: 'Alice' },
      { id: 2, text: 'Very clear explanation.', user: 'Bob' }
    ]
  };

  return (
    <div className="card">
      <h2>Blog Details</h2>
      <h3>
        {blog.title} 
        {blog.isVerifiedAuthor && <span className="verified-badge"> ✔ Verified Author</span>}
      </h3>
      <p className="author">By {blog.author}</p>
      <p className="content">{blog.content}</p>

      {unreadCount > 0 && (
        <div className="notification">
          You have {unreadCount} unread blog notifications!
        </div>
      )}

      <button className="btn btn-outline" onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && (
        <div className="comments-section">
          <h4>Comments ({blog.comments.length}):</h4>
          {blog.comments.length > 0 && (
            <ul>
              {blog.comments.map(c => (
                <li key={c.id}>
                  <strong>{c.user}:</strong> {c.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
