import Link from "next/link";
import { Book } from "../../lib/types";

const BookPart = (props: { book: Book }) => {
  const { book } = props

  return (
    <section className="part">
      <h1>part.name</h1>
      % unless part.dedication.blank? %
      <div className="dedication">
        raw part.dedication.gsub(\n, br/)
      </div>

      % part.fragments.order(id asc).each do |fragment|
      <ul>
        <li><Link href={`/books/${book.slug}/part/fragment`}>fragment</Link></li>
      </ul>
    </section>
  )
}

export default BookPart
