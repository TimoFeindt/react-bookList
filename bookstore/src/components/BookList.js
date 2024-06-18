import BookShow from "./BookShow";

export default function BookList({bookList}) {


    const renderBookList = bookList.map((book) => {
        return <BookShow title={book.title} key={book.id}/>  
    })

    return(
        <div className="list">
            Ich bin die BookList
            {renderBookList}
        </div>
    )
}