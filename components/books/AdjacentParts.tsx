import Link from "next/link";

const AdjacentParts = () => {
  return (
    <nav className="adjacent-parts">
      <ul>
        <li className="previous">
          <Link href={`books/yoga/part`}>
            link to previous part
          </Link>
        </li>
        <li className="next">
          <Link href={`books/yoga/part`}>
            link to previous part
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdjacentParts
