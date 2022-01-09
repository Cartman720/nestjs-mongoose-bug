# nestjs-mongoose-bug

### Problem:

When we wrap `mongoose` Schema (both ES6 class definition and mongoose.Schema) with `SchemaFactory` of `@nestjs/mongoose`, it gives us wrong documents.

Specifically, if we warp property with `@Prop()` and add mongoose prop options e.g. `@Prop({ type: String, unique: true })` in result we can't directly access our field as string.
Instead we get `Document` and have to get property value via `Document.get` method in order to access value.

For example

Our `article.schema.ts` contains schema of blog article with 2 `string` fields `slug` and `title`.

`title` should have options, `{ trim: true, require: true }`
`slug` doesn't have any options, hence we just pass `String` to `@Prop` decorator

```
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
```

However when we try to access `title` on document object we can't directly access it as string e.g. `title.replace()` (*__throws TypeError: article.title.replace is not a function__*), thus we need to replace direct access as `doc.title` prop to `doc.get('title')` in order to make it work. Which isn't viable for most of the cases in large apps.

If we look carefully, `title` property contains `object` instead of desired `string`.

As opposed to this, `slug` property works fine if we pass `@Prop(String)`. 

**It is notable, that if we leave `@Prop` Decorator without `String` for `slug` we will have same erronouse behavior.**

Here the recording of the bug

https://jumpshare.com/v/NnaURK76LN0vJBf5x7nt

**Expected behavior:**

Get `string` or whatever value we set in schema for `title` without explicitly converting it to lean value. 

Here the recording desired behavior

https://jumpshare.com/v/cHmKhZD5NELgmPPXt1nz


Commands for reproduction

**Run `npm start` to see behavior of `@nestjs/mongoose`.**

**Run `npm run mongoose` to see behavior of expected behavior (plain `mongoose`).**


