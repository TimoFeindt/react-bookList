import { useState } from "react"

export default function BookEdit({title, getNewTitle}) {

    const [newTitle, setNewtitle ] = useState(title)

    const handleValueChange = (e) => {
        const value = e.target.value.trim();
        if(value !== '') {
            setNewtitle(value)
        }
    }

    const handleSaveClick = () =>{
        getNewTitle(newTitle)
    }

    return(
        <div className="book-edit">
            <label htmlFor="editBookTitle">Title</label>
            <input className="input" type="text" name="editBookTitle" defaultValue={newTitle} onChange={handleValueChange}/>
            <button className="button is-primary" onClick={handleSaveClick}>Save</button>
        </div>
    )
}