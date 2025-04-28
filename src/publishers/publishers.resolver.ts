import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Publisher } from './entities/publisher.entity';
import { PublishersService } from './publishers.service';
import { Book } from 'src/books/entitites/book.entity';
import { BooksService } from 'src/books/books.service';

@Resolver(() => Publisher)
export class PublishersResolver {
    constructor(private readonly publisherService: PublishersService, private readonly booksService: BooksService){}

    @Query(() => [Publisher])
    getPublishers(): Publisher[]{
        return this.publisherService.getPublishers();
    }

    @ResolveField(() => [Book])
    books(@Parent() publisher: Publisher){
        return this.booksService.findBooksByPublishers(publisher.id);
    }
}
