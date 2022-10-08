import Link from "next/link";
import { Book } from "../../lib/types";

const BookTitle = (props: { book: Book, link: boolean }) => {
  const { book, link } = props
  let heading

  if (link) {
    heading = <Link href={`/books/${book.slug}`}>{book.title}</Link>
  } else {
    heading = book.title
  }

  return (
    <>
      <h1>{heading}</h1>
      <h2>{book.subtitle}</h2>
    </>
  )
}

export default BookTitle
