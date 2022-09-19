import Link from "next/link";

const BookTitle = () => {
  return (
    <>
      <h1><Link href={`/books/slug`}>Book Title</Link></h1>
      <h2>Book subtitle</h2>
    </>
  )
}

export default BookTitle
