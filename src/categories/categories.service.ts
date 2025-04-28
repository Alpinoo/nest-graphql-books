import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories = [
    { id: 101, name: 'Fantasy' },
    { id: 102, name: 'Science Fiction' },
    { id: 103, name: 'Mystery' },
    { id: 104, name: 'Romance' },
    { id: 105, name: 'Non-Fiction' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
