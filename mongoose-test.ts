import * as mongoose from 'mongoose';

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/test');

  const articleSchema = await new mongoose.Schema({
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: String,
    thumbnail: String,
  });

  const BlogArticle = mongoose.model('BlogArticle', articleSchema);

  const article = await BlogArticle.create({
    title: 'Title Test',
    slug: 'slug-test',
  });

  console.log('Value: ' + article.title);
  console.log('Type: ' + typeof article.title);
  console.log(article.title.replace(/\s/g, '+'));

  process.exit(0);
}

bootstrap();
