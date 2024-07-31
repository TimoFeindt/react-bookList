import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({book, getNewTitle}) {
    const { changeBookById } = useBooksContext()

    const [newTitle, setNewtitle ] = useState(book.title)

    const handleValueChange = (e) => {
        const value = e.target.value.trim();
        if(value !== '') {
            setNewtitle(value)
        }
    }

    const handleSaveClick = () =>{
        const bookData = { bookID: book.id, newTitle }
        changeBookById(bookData)
        getNewTitle(true)
    }

    return(
        <div className="book-edit">
            <label htmlFor="editBookTitle">Title</label>
            <input className="input" type="text" name="editBookTitle" defaultValue={newTitle} onChange={handleValueChange}/>
            <button className="button is-primary" onClick={handleSaveClick}>Save</button>
        </div>
    )
}