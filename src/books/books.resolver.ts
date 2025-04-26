import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { Book } from './entitites/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { BooksService } from './books.service';
@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book])
  getBooks(): Book[] {
    return this.booksService.getBooks();
  }

  @Query(() => [Book])
  getBooksByAuthor(@Args('author') author: string): Book[] {
    return this.booksService.getBooksByAuthor(author);
  }

  @Query(() => Book)
  getBookById(@Args('id') id: number): Book {
    return this.booksService.getBookById(id);
  }

  @Query(() => Int)
  countBooks(): number {
    return this.booksService.countBooks();
  }

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput): Book {
    return this.booksService.createBook(createBookInput);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput): Book {
    return this.booksService.updateBook(updateBookInput);
  }

  @Mutation(() => Boolean)
  deleteBook(@Args('id') id: number): boolean {
    return this.booksService.deleteBook(id);
  }
}
