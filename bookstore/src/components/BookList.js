import BookShow from "./BookShow";

export default function BookList({ books, onDelete }) {


    const renderBookList = books.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} />  
    })

    return(
        <div className="book-list">
            {renderBookList}
        </div>
    )
}