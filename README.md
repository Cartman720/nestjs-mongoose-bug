# nestjs-mongoose-bug

### Problem:

When we wrap `mongoose` Schema (both ES6 class definition and mongoose.Schema) with `SchemaFactory` of `@nestjs/mongoose`, it gives us wrong documents.

Specifically, if we warp property with `@Prop()` and add mongoose prop options e.g. `@Prop({ type: String, unique: true })` in result we can't directly access our field as string.
Instead we get `Document` and have to get property value via `Document.get` method in order to access value.

Here the recording with the bug

https://jumpshare.com/v/SQHyMmEVkwjvRSGcu5gP

Expected behavior you can see in below recording

https://jumpshare.com/v/Bmy24c1uAEiiKx8UWcDQ

#### Run `npm start` to see behavior of `@nestjs/mongoose`.

#### Run `npm run mongoose` to see behavior of plain `mongoose`.


