import axios from "axios";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import './css/index.css'

import { useContext, useEffect, useState } from "react";
import BookContext from "./context/BookContext";

function App() {


  const test = useContext(BookContext.count)

console.log(test)

  const [books, setBooks] = useState([]);

  const initialFetch = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(() =>  {
    initialFetch();    
  }, [])

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
      const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }

  const changeBookById = async (data) => {
    const response = await axios.put(`http://localhost:3001/books/${data.bookID}`, {
      title: data.newTitle
    })
    
    const updatedBooks = books.map((book) => {
      if(book.id === data.bookID) {
        //book.title = data.newTitle
        return {...book, ...response.data} // ...book nimmt alle key - value pairs im Object und behält packt sie ins neue Object bis auf title. Der wird zu data.newTitle
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
      <div>{test}</div>
    </div>
  );
}

export default App;
