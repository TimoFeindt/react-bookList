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

  const changeBookById = (data) => {
    const updatedBooks = books.map((book) => {
      if(book.id === data.bookID) {
        //book.title = data.newTitle
        return {...book, title: data.newTitle} // ...book nimmt alle key - value pairs im Object und behält packt sie ins neue Object bis auf title. Der wird zu data.newTitle
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <CreateBook addBooks={setBooks} books={books} />
      <BookList books={books} onDelete={deleteBookById} changeTitle={changeBookById} />
    </div>
  );
}

export default App;
