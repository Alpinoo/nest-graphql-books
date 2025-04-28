import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksModule } from './books/books.module';
import { AuthorsService } from './authors/authors.service';
import { AuthorsResolver } from './authors/authors.resolver';
import { BooksService } from './books/books.service';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesService } from './categories/categories.service';
import { PublishersModule } from './publishers/publishers.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BooksModule,
    CategoriesModule,
    PublishersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthorsService,
    AuthorsResolver,
    BooksService,
    CategoriesService,
  ],
})
export class AppModule {}
