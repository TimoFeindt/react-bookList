import { useState } from "react"

export default function CreateBook({addBooks, books}) {

    const [inputValue, setInputValue] = useState('');
    const [id, setId] = useState(0)

    const updateInputValue = (e) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }

    const addToList = () => {
        if(inputValue === '') {
            return
        } else {
            const newBook = {title: inputValue, id: id}
            const updatedList = [
                ...books,
                newBook
            ];
            addBooks(updatedList);
            setId(id + 1);
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