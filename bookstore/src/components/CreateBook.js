import { useState } from "react"
import axios from "axios"

export default function CreateBook({addBooks, books}) {

    const [inputValue, setInputValue] = useState('');

    const updateInputValue = (e) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }

    const addToList = async () => {
        if(inputValue === '') {
            return
        } else {

            const response = await axios.post('http://localhost:3001/books', {
                title: inputValue
            });
                        
            const updatedList = [
                ...books,
                response.data
            ];
            addBooks(updatedList);
        }
    }

    return(
        <div>
            <div className="book-create">
                <label htmlFor="createBookName"></label>
                <input name="createBookName" type="text" onChange={updateInputValue}/>
                <button onClick={addToList}>Add to List</button>
            </div>
        </div>
    )
}