'use client'
import { ref, set, push, onValue } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Image from "next/image";

interface Book {
  id: string;
  title: string;
  author: string;
  review: number;
  imageUrl: string;
}

const MyBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: '1',
      title: 'Middlegame',
      author: 'Seanan McGuire',
      review: 4,
      imageUrl: '/images/books/middlegame.jpg',
    },
    {
      id: '2',
      title: 'Every Heart a Doorway',
      author: 'Seanan McGuire',
      review: 5,
      imageUrl: '/images/books/everyheart.jpg',
    },
    // Add more books here as needed
  ]);


  const reference = ref(db, "books/");

  

  useEffect(() => {
    const fetchBooks = async () => {
      onValue(reference, (snapshot: { val: () => any; }) => {
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
            <br />
            <Image src={book.imageUrl} alt={book.title} width={200} height={300} />
            {/* Set the appropriate width and height values based on your image dimensions */}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBooksPage;
