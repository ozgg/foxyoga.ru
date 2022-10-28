import { BookPartFragment } from "../../lib/types";
import Dedication from "./Dedication";

const BookFragment = (props: { fragment: BookPartFragment }) => {
  const { fragment } = props
  let dedication: JSX.Element[] = []
  let content

  if (fragment.dedication) {
    fragment.dedication.split('|').forEach((chunk, i) => {
      dedication.push(<Dedication key={`dedication-${i}`} text={chunk}/> )
    })
  }

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
      {dedication.length > 0 && dedication}
      {content}
    </section>
  )
}

export default BookFragment
