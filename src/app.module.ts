import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    BlogModule,
  ],
  providers: [],
})
export class AppModule {}
