import type {NextPage} from 'next'
import Head from "next/head";
import BookCover from "../../components/books/BookCover";

const BooksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Книги &laquo;Лисьей йоги&raquo;</title>
      </Head>

      <article className="books">
        <BookCover/>
      </article>
    </>
  )
}

export default BooksPage
