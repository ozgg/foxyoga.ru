import { BookPartFragment } from "../../lib/types";

const BookFragment = (props: { fragment: BookPartFragment }) => {
  const { fragment } = props
  let content
  if (fragment.raw) {
    content = <div dangerouslySetInnerHTML={{__html: fragment.body}}/>
  } else {
    content = (
      <div>{fragment.body.split(/\n/g).map((s, i) => (
        <p key={`p-${i}`}  dangerouslySetInnerHTML={{__html: s}}/>
      ))}</div>
    )
  }

  return (
    <section className="fragment">
      <h1>Фрагмент {fragment.slug}</h1>
      fragment.dedication.split(|).each do |dedication|
      <div className="dedication">
        {fragment.dedication ?? ''}
        raw dedication.gsub(\n, br)
      </div>
      {content}
    </section>
  )
}

export default BookFragment
