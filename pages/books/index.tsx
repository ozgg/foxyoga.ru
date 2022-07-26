import type { NextPage } from 'next'
import Head from "next/head";
import BookCover from "../../components/books/BookCover";
import { getBooks } from "../../lib/book-handler";
import { Book } from "../../lib/types";

const BooksPage: NextPage<{ books: Book[] }> = (props) => {
  const { books } = props

  return (
    <>
      <Head>
        <title>Книги &laquo;Лисьей йоги&raquo;</title>
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

export default BooksPage
