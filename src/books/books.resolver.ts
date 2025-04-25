import { Resolver, Query, Args } from '@nestjs/graphql';
import { Book } from './entitites/book.entity';
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
}
