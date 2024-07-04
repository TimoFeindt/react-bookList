import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import './css/index.css'

import { useState } from "react";

function App() {

  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
      const updatedBooks = books.filter((book) => {
        return book.id !== id
      })

      setBooks(updatedBooks)
  }

  return (
    <div className="app">
        <h1>Main Area</h1>
        <CreateBook addBooks={setBooks} books={books} />
        <BookList books={books} onDelete={deleteBookById} />
    </div>
  );
}

export default App;
