import { Injectable } from '@nestjs/common';
import { Publisher } from './entities/publisher.entity';

@Injectable()
export class PublishersService {

    private publishers = [
        { id: 201, name: 'Penguin Random House' },
        { id: 202, name: 'HarperCollins' },
        { id: 203, name: 'Simon & Schuster' }
      ]

      
    getPublishers(): Publisher[] {
        return this.publishers;
    }
}
