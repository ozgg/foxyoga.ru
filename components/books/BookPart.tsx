import Link from "next/link";

const BookPart = () => {
  return (
    <section className="part">
      <h1>part.name</h1>
      % unless part.dedication.blank? %
      <div className="dedication">
        raw part.dedication.gsub(\n, br/)
      </div>

      % part.fragments.order(id asc).each do |fragment|
      <ul>
        <li><Link href={`/books/slug/part/fragment`}>fragment</Link></li>
      </ul>
    </section>
  )
}

export default BookPart
