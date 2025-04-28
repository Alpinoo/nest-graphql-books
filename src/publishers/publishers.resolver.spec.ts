import { Test, TestingModule } from '@nestjs/testing';
import { PublishersResolver } from './publishers.resolver';

describe('PublishersResolver', () => {
  let resolver: PublishersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublishersResolver],
    }).compile();

    resolver = module.get<PublishersResolver>(PublishersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
