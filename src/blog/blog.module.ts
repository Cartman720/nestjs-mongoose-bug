import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './app.service';
import { BlogArticle, BlogArticleSchema } from './article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BlogArticle.name,
        schema: BlogArticleSchema,
      },
    ]),
  ],
  providers: [BlogService],
})
export class BlogModule {}
