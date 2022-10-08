import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import AdjacentFragments from "../../../../components/books/AdjacentFragments";
import BookFragment from "../../../../components/books/BookFragment";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookTitle from "../../../../components/books/BookTitle";
import { Book, BookContext } from "../../../../lib/types";
import { getBook, getBooks } from "../../../../lib/book-hanlder";

const BookFragmentPage: NextPage<{ book: Book }> = (props) => {
  const { book } = props
  return (
    <>
      <Head>
        <title>part.long_title, фрагмент fragment.slug</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={true}/>
        <AdjacentParts book={book}/>

        <section className="part">
          <h1><Link href={`/books/${book.slug}/part`}>part.name</Link></h1>

          <AdjacentFragments book={book}/>
          <BookFragment/>
          <AdjacentFragments book={book}/>
        </section>
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

  const paths = books.map(book => ({
    params: {
      slug: book.slug,
      part: 'part',
      fragment: 'fragment'
    }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export default BookFragmentPage
