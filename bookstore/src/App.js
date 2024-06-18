import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <div className="App">
        <h1>Main Area</h1>

        <CreateBook />
        <BookList />   
    </div>
  );
}

export default App;
