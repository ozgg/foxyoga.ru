import Link from "next/link";
import { Book, BookFragments, BookPartInList } from "../../lib/types";

const AdjacentFragments = (props: { book: Book, part: BookPartInList, fragments: BookFragments }) => {
  const { book, part, fragments } = props

  return (
    <nav className="adjacent-fragments">
      <ul>
        {fragments.previous && <li className="previous"><Link href={`/books/${book.slug}/${part.slug}/${fragments.previous.slug}`}>{fragments.previous.slug}</Link></li>}
        {fragments.next && <li className="next"><Link href={`/books/${book.slug}/${part.slug}/${fragments.next.slug}`}>{fragments.next.slug}</Link></li>}
      </ul>
    </nav>
  )
}

export default AdjacentFragments
