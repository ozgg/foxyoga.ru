import type { NextPage, NextPageContext } from 'next'
import Head from "next/head";
import BookTitle from "../../../components/books/BookTitle";
import BookPart from "../../../components/books/BookPart";
import { getBooks, getBook } from "../../../lib/book-hanlder";
import { Book, BookContext } from "../../../lib/types";

const BookPage: NextPage<{ book: Book }> = (props) => {
  const { book } = props

  return (
    <>
      <Head>
        <title>{book.title}</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={false}/>

        <div className="dedication">
          book.dedication.gsub(\n, br/
        </div>

        book.parts.order(priority asc).all:
        <BookPart book={book}/>
      </article>
    </>
  )
}

export function getStaticProps(context: BookContext) {
  const slug = context.params.slug

  return {
    props: {
      book: getBook(slug)
    }
  }
}

export function getStaticPaths() {
  const books = getBooks()

  return {
    paths: books.map(book => ({ params: { slug: book.slug } })),
    fallback: false
  }
}

export default BookPage
