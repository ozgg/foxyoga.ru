import Link from "next/link";

const BookCover = () => {
  return (
    <section className="book-cover">
      <h1><Link href={`books/slug`}>Book Title</Link></h1>
      <h2>Book Subtitle</h2>
    </section>
  )
}

export default BookCover
