import { useContext } from "react"
import BookContext from "../context/BookContext"

export default function useBooksContext() {
    return useContext(BookContext)
}