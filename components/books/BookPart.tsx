import Link from "next/link";
import { Book, BookPartInList } from "../../lib/types";
import Dedication from "./Dedication";

const BookPart = (props: { book: Book, part: BookPartInList }) => {
  const { book, part } = props

  const fragments = []
  for (let f = part.fragments[0]; f <= part.fragments[1]; f++) {
    const href = `/books/${book.slug}/${part.slug}/${f}`
    fragments.push(<li key={`f-${f}`}><Link href={href}>{f}</Link></li>)
  }

  return (
    <section className="part">
      <h1>{part.name}</h1>

      <ul>{fragments}</ul>
    </section>
  )
}

export default BookPart
