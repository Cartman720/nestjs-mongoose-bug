import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BlogService } from './blog/app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const service = app.get(BlogService);

  const article = await service.create({
    title: 'Title Test',
    slug: 'slug-test',
  });

  console.log(article.title, typeof article.title);
  console.log(article.slug, typeof article.slug);

  console.log('---------------');

  console.log('Value: ' + article.slug);
  console.log('Type: ' + typeof article.slug);

  console.log(article.title.replace(/\s/g, '+'));

  await app.listen(3000);
}

bootstrap();
