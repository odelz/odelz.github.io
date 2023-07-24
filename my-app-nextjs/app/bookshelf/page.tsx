'use client'
import { ref, set, push, onValue } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

interface Book {
  id: string;
  title: string;
  author: string;
  review: number;
}

const MyBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);


  const reference = ref(db, "books/");

  const fetchBooks = async () => {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      if (Array.isArray(data)) {
        const books = data.filter((book: Book) => typeof book === 'object' && book !== null && 'title' in book && 'review' in book);
        setBooks(books);
      } else {
        setBooks([]);
      }
    }
    );
  }

  useEffect(() => {
    // Fetch books and reviews from the database
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>My Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title}
            <br />
            <strong>Author:</strong> {book.author}
            <br />
            <strong>Review:</strong> {book.review ? book.review : 'No review yet'}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBooksPage;
