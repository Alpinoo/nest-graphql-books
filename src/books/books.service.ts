import { Injectable } from '@nestjs/common';
import { Book } from './entitites/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { Args, Int, Mutation, Query } from '@nestjs/graphql';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', authorId: 11 },
    {
      id: 2,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      authorId: 11,
    },
    {
      id: 3,
      title: 'A Game of Thrones',
      author: 'George R.R. Martin',
      authorId: 22,
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      authorId: 33,
    },
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

  @Query(() => Int)
  countBooks(): number {
    return this.books.length;
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
      authorId: lastId + lastId,
    };

    this.books.push(book);

    return book;
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput): Book {
    const { id, title, author } = updateBookInput;

    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }

    if (title) {
      book.title = title;
    } else if (author) {
      book.author = author;
    }

    return book;
  }

  @Mutation(() => Boolean)
  deleteBook(@Args('id') id: number): boolean {
    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      throw new Error(`Book with id ${id} not found`);
    }

    this.books.splice(bookIndex, 1);

    return true;
  }

  findBooksByAuthorId(authorId: number): Book[] {
    return this.books.filter((book) => book.authorId === authorId);
  }
}
