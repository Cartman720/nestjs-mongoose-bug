import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type BlogArticleDocument = BlogArticle & mongoose.Document;

@Schema({
  timestamps: true,
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
})
export class BlogArticle {
  @Prop({
    type: String,
    require: true,
    trim: true,
  })
  title: string;


  @Prop(String)
  slug: string;
}

export const BlogArticleSchema = SchemaFactory.createForClass(BlogArticle);

BlogArticleSchema.loadClass(BlogArticle);
