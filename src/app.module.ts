import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksModule } from './books/books.module';
import { AuthorsService } from './authors/authors.service';
import { AuthorsResolver } from './authors/authors.resolver';
import { BooksService } from './books/books.service';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthorsService, AuthorsResolver, BooksService],
})
export class AppModule {}
