import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Book } from './entitites/book.entity';
import { CreateBookInput } from './dto/create-book.input';
@Resolver(() => Book)
export class BooksResolver {
  private books: Book[] = [
    { id: 1, title: 'Hello There', author: 'Obi Wan Kenobi' },
    { id: 2, title: 'Somebody To Love', author: 'Freddie' },
  ];

  @Query(() => [Book])
  getBooks(): Book[] {
    return this.books;
  }

  @Query(() => [Book])
  getBooksByAuthor(@Args('author') author: string): Book[] {
    return this.getBooks().filter((b) => b.author === author);
  }

  @Query(() => Book)
  getBookById(@Args('id') id: number): Book {
    const book = this.getBooks().find((book) => book.id === id);

    if (!book) {
      throw new Error('No book with given id');
    }

    return book;
  }

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput): Book {
    const { title, author } = createBookInput;
    const lastId =
      this.books.length > 0 ? this.books[this.books.length - 1].id : 0;

    const book: Book = {
      title,
      author,
      id: lastId,
    };

    this.books.push(book);

    return book;
  }
}
