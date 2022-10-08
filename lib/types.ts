export type Book = {
  slug: string,
  title: string,
  subtitle?: string,
  dedication?: string,
  partCount: number
}

export type BookContext = {
  params: {
    slug: string
  }
}
