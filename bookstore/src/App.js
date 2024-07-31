import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import './css/index.css'
import { useEffect } from "react";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const { initialFetch } = useBooksContext();
  
  useEffect(() =>  {
    initialFetch();    
  }, [])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <CreateBook />
      <BookList />
    </div>
  );
}

export default App;
