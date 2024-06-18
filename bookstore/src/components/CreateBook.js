import { useState } from "react"

export default function CreateBook({addBooks, list}) {

    const [inputValue, setInputValue] = useState('');
    const [id, setId] = useState(0)

    const updateInputValue = (e) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }

    const addToList = () => {
            if(inputValue === '') {

            } else {
                const newBook = {title: inputValue, id: id}
                const updatedList = [
                    ...list,
                    newBook
                ];
                addBooks(updatedList);
                setId(id + 1);
            }
    } 

    return(
        <div>
            Ich in Create Book
            <div>
                <label htmlFor="createBookName"></label>
                <input name="createBookName" type="text" onChange={updateInputValue}/>
                <button onClick={addToList}>Add to List</button>
            </div>
        </div>
    )
}