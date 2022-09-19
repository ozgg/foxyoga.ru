import type {NextPage} from 'next'
import Head from "next/head";
import BookTitle from "../../../components/books/BookTitle";
import BookPart from "../../../components/books/BookPart";

const BookPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book title</title>
      </Head>

      <article className="book">
        <BookTitle/>

        <div className="dedication">
          book.dedication.gsub(\n, br/
        </div>

        book.parts.order(priority asc).all:
        <BookPart/>
      </article>
    </>
  )
}

export default BookPage
