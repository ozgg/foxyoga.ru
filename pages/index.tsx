import type { NextPage } from 'next'
import Head from 'next/head'
import { getBooks } from "../lib/book-handler";
import BookCover from "../components/books/BookCover";
import { Book } from "../lib/types";

const Home: NextPage<{ books: Book[] }> = (props) => {
  const { books } = props

  return (
    <>
      <Head>
        <title>Книги «Лисей йоги»</title>
      </Head>

      <article className="books">
        {books.map((book) => <BookCover key={book.slug} book={book}/>)}
      </article>
    </>
  )
}

export function getStaticProps() {
  const books = getBooks();

  return {
    props: {
      books: books
    }
  }
}

export default Home
