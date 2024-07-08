import { useState } from "react";
import BookEdit from './BookEdit';

export default function BookShow({book, onDelete, changeTitle}) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const onTitleChange = (data) => {
        changeTitle({newTitle: data, bookID: book.id })
        setShowEdit(!showEdit)
    }

    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            { 
            showEdit ? 
                <BookEdit title={book.title} getNewTitle={onTitleChange}/>
            : 
                <h3>{book.title}</h3>
            }
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}