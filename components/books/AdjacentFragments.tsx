import Link from "next/link";

const AdjacentFragments = () => {
  return (
    <nav className="adjacent-fragments">
      <ul>
        <li className="previous"><Link href={`/books/slug/part/fragment`}>link to previous fragment</Link></li>
        <li className="next"><Link href={`/books/slug/part/fragment`}>link to next fragment</Link></li>
      </ul>
    </nav>
  )
}

export default AdjacentFragments
