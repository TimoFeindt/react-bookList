import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import './css/main.css'

import { useState } from "react";

function App() {

  const [bookList, setBookList] = useState([]);

  return (
    <div className="App">
        <h1>Main Area</h1>
        <CreateBook addBooks={setBookList} list={bookList} />
        <BookList bookList={bookList} />
    </div>
  );
}

export default App;
