import { useState } from "react"
import useBooksContext from "../hooks/use-books-context";

export default function CreateBook() {

    const { createBook } = useBooksContext();

    const [inputValue, setInputValue] = useState('');

    const updateInputValue = (e) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }

    const handleClick = () => {
        if(inputValue === '') {
            return
        } else {
            createBook(inputValue)
        }
        setInputValue('')
    }

    return(
        <div>
            <div className="book-create">
                <label htmlFor="createBookName"></label>
                <input name="createBookName" type="text" onChange={updateInputValue}/>
                <button onClick={handleClick}>Add to List</button>
            </div>
        </div>
    )
}