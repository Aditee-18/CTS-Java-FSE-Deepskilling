import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$10.99" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: "$12.50" },
    { id: 3, title: "1984", author: "George Orwell", price: "$9.99" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: "$8.75" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", price: "$11.25" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Details</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#e8f5e9" }}>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Title</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Author</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{book.title}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{book.author}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookDetails;
