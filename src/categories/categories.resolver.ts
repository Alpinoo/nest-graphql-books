import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Category } from './entities/category.entity';
import { CategoriesService } from './categories.service';
import { Book } from 'src/books/entitites/book.entity';
import { BooksService } from 'src/books/books.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly booksService: BooksService,
  ) {}
  @Query(() => [Category])
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @ResolveField(() => [Book])
  books(@Parent() category: Category) {
    return this.booksService.findBooksByCategory(category.id);
  }
}
