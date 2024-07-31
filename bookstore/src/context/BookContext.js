import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const initialFetch = async () => {
      const response = await axios.get('http://localhost:3001/books')
      setBooks(response.data)
    }

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
            return {...book, ...response.data} // ...book nimmt alle key - value pairs im Object und packt sie ins neue Object bis auf title. Der wird zu data.newTitle
          }
          return book
        })
        setBooks(updatedBooks)
      }

      const createBook = async (value) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: value
        });
                    
        const updatedList = [
            ...books,
            response.data
        ];
        setBooks(updatedList);
    }

    const valueToShare = {
        books,
        deleteBookById,
        changeBookById,
        createBook,
        initialFetch,      
    }

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    )
}

export { Provider}
export default BookContext;