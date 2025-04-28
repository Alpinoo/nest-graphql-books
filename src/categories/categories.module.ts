import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { BooksService } from 'src/books/books.service';

@Module({
  providers: [CategoriesService, CategoriesResolver, BooksService],
})
export class CategoriesModule {}
