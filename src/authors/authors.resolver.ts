import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
import { Book } from 'src/books/entitites/book.entity';
import { BooksService } from 'src/books/books.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly booksService: BooksService,
  ) {}

  @Query(() => [Author])
  getAuthors(): Author[] {
    return this.authorsService.getAuthors();
  }

  @ResolveField(() => [Book])
  books(@Parent() author: Author) {
    return this.booksService.findBooksByAuthorId(author.id);
  }
}
