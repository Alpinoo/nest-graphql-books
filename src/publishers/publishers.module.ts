import { Module } from '@nestjs/common';
import { PublishersResolver } from './publishers.resolver';
import { PublishersService } from './publishers.service';
import { BooksService } from 'src/books/books.service';

@Module({
  providers: [PublishersResolver, PublishersService,BooksService]
})
export class PublishersModule {}
