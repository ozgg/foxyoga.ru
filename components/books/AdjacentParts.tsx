import Link from "next/link";
import { Book } from "../../lib/types";

const AdjacentParts = (props: { book: Book }) => {
  const {book} = props

  return (
    <nav className="adjacent-parts">
      <ul>
        <li className="previous">
          <Link href={`/books/${book.slug}/part`}>
            link to previous part
          </Link>
        </li>
        <li className="next">
          <Link href={`/books/${book.slug}/part`}>
            link to previous part
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdjacentParts
