import BookShow from "./BookShow";

export default function BookList({ books, onDelete, changeTitle }) {

    const handleChangeTitle = (data) => {
        changeTitle(data)
    }

    const renderBookList = books.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} changeTitle={handleChangeTitle}/>  
    })

    return(
        <div className="book-list">
            {renderBookList}
        </div>
    )
}