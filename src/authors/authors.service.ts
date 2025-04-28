import { Injectable } from '@nestjs/common';
import { Author } from './entities/author.entity';
@Injectable()
export class AuthorsService {
  private authors = [
    { id: 11, name: 'J.R.R. Tolkien' },
    { id: 22, name: 'George R.R. Martin' },
    { id: 33, name: 'J.K. Rowling' },
  ];

  findAuthorById(id: number): Author {
    const author = this.authors.find((a) => a.id === id);

    if (!author) {
      throw new Error('No authors found');
    }

    return author;
  }

  getAuthors(): Author[] {
    return this.authors;
  }
}
