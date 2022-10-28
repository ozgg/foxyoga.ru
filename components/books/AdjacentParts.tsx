import Link from "next/link";
import { Book, BookPartInList } from "../../lib/types";

const AdjacentParts = (props: { book: Book, part: BookPartInList }) => {
  const { book, part } = props
  let previousPart: BookPartInList | null = null
  let nextPart: BookPartInList | null = null

  for (let i = 0; i < book.parts.length; i++) {
    if (book.parts[i].slug !== part.slug) {
      continue
    }

    if (book.parts[i - 1]) {
      previousPart = book.parts[i - 1]
    }
    if (book.parts[i + 1]) {
      nextPart = book.parts[i + 1]
    }
  }

  return (
    <nav className="adjacent-parts">
      <ul>
        {previousPart && <li className="previous"><Link href={`/books/${book.slug}/${previousPart.slug}`}>{previousPart.name}</Link></li>}
        {nextPart && <li className="next"><Link href={`/books/${book.slug}/${nextPart.slug}`}>{nextPart.name}</Link></li>}
      </ul>
    </nav>
  )
}

export default AdjacentParts
