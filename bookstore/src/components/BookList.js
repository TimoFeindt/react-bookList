import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

export default function BookList() {
    const { books } = useBooksContext();

    const renderBookList = books.map((book) => {
        return <BookShow book={book} key={book.id} />  
    })

    return(
        <div className="book-list">
            {renderBookList}
        </div>
    )
}