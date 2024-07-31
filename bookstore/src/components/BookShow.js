import { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/use-books-context";

export default function BookShow({ book }) {
    const { deleteBookById } = useBooksContext();

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const onTitleChange = () => {
        setShowEdit(!showEdit)
    }

    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            { 
            showEdit ? 
                <BookEdit book={book} getNewTitle={onTitleChange}/>
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