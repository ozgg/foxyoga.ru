import Link from "next/link";
import { Book } from "../../lib/types";

const AdjacentFragments = (props: { book: Book }) => {
  const { book } = props

  return (
    <nav className="adjacent-fragments">
      <ul>
        <li className="previous">
          <Link href={`/books/${book.slug}/part/fragment`}>
            link to previous fragment
          </Link>
        </li>
        <li className="next">
          <Link href={`/books/${book.slug}/part/fragment`}>
            link to next fragment
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdjacentFragments
