import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import AdjacentFragments from "../../../../components/books/AdjacentFragments";
import BookFragment from "../../../../components/books/BookFragment";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookTitle from "../../../../components/books/BookTitle";
import {
  Book,
  BookFragmentContext, BookPartFragment,
  BookPartInList
} from "../../../../lib/types";
import {
  getBook,
  getBooks,
  getFragment,
  getPart
} from "../../../../lib/book-handler";

const BookFragmentPage: NextPage<{ book: Book, part: BookPartInList, fragment: BookPartFragment }> = (props) => {
  const { book, part, fragment } = props

  return (
    <>
      <Head>
        <title>{book.title}: {part.name}, фрагмент {fragment.slug}</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={true}/>
        <AdjacentParts book={book} part={part}/>

        <section className="part">
          <h1><Link href={`/books/${book.slug}/${part.slug}`}>{part.name}</Link></h1>

          <AdjacentFragments book={book}/>
          <BookFragment fragment={fragment}/>
          <AdjacentFragments book={book}/>
        </section>
      </article>
    </>
  )
}

export function getStaticProps(context: BookFragmentContext) {
  const {slug, part, fragment} = context.params
  const book = getBook(slug)

  return {
    props: {
      book,
      part: getPart(book, part),
      fragment: getFragment(slug, part, fragment)
    }
  }
}

export function getStaticPaths() {
  const books = getBooks()
  const paths: BookFragmentContext[] = []

  books.forEach(book => {
    book.parts.forEach(part => {
      for (let f = part.fragments[0]; f <= part.fragments[1]; f++) {
        paths.push({
          params: {
            slug: book.slug,
            part: part.slug,
            fragment: f.toString()
          }
        })
      }
    })
  })

  return {
    paths: paths,
    fallback: false
  }
}

export default BookFragmentPage
