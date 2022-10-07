import Link from "next/link";
import { Book } from "../../lib/types";

const BookCover = (props: { book: Book }) => {
  const { book } = props

  return (
    <section className="book-cover">
      <h1><Link href={`books/${book.slug}`}>{book.title}</Link></h1>
      <h2>{book.subtitle}</h2>
    </section>
  )
}

export default BookCover
