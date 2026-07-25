import React, { useState } from 'react';

function BookDetails() {
  const [showBestsellersOnly, setShowBestsellersOnly] = useState(false);

  const books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', price: 35, isBestseller: true, inStock: true },
    { id: 2, title: 'Design Patterns', author: 'Erich Gamma', price: 45, isBestseller: true, inStock: false },
    { id: 3, title: 'React Explained', author: 'Zac Gordon', price: 25, isBestseller: false, inStock: true },
    { id: 4, title: 'Spring Boot in Action', author: 'Craig Walls', price: 30, isBestseller: false, inStock: true }
  ];

  const filteredBooks = showBestsellersOnly ? books.filter(b => b.isBestseller) : books;

  if (books.length === 0) {
    return <div className="card"><p>No books available.</p></div>;
  }

  return (
    <div className="card">
      <h2>Book Details</h2>
      <button 
        className="btn btn-outline" 
        onClick={() => setShowBestsellersOnly(!showBestsellersOnly)}
      >
        {showBestsellersOnly ? 'Show All Books' : 'Show Bestsellers Only'}
      </button>

      <ul className="book-list">
        {filteredBooks.map(book => (
          <li key={book.id} className="book-item">
            <div className="book-info">
              <strong>{book.title}</strong> by {book.author} - ${book.price}
            </div>
            <div className="book-badges">
              {book.isBestseller ? <span className="badge badge-star">Bestseller</span> : null}
              {book.inStock ? (
                <span className="badge badge-success">In Stock</span>
              ) : (
                <span className="badge badge-danger">Out of Stock</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
