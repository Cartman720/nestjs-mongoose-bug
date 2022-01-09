import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogArticle, BlogArticleDocument } from './article.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(BlogArticle.name)
    private articleModel: Model<BlogArticleDocument>,
  ) {}

  findOne(...args) {
    return this.articleModel.findOne(...args);
  }

  create(fields) {
    return this.articleModel.create(fields);
  }
}
