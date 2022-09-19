import type { NextPage } from 'next'
import Head from 'next/head'
import BookTitle from "../../../../components/books/BookTitle";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookPart from "../../../../components/books/BookPart";

const BookPartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>part.long_title</title>
      </Head>

      <article className="book">
        <BookTitle />
        <AdjacentParts/>
        <BookPart/>
      </article>
    </>
  )
}

export default BookPartPage
