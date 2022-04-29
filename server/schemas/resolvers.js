const { Book, User } = require("./models");

// Define our resolvers
const resolvers = {
  Query: {
    books: () => Book.find(),
    users: () => User.find(),
  },
  Mutation: {
    addBook: async (root, args) => {
      const book = await Book.create(args);
      return book;
    },
    addUser: async (root, args) => {
      const user = await User.create(args);
      return user;
    },
    addSavedBook: async (root, args) => {
      const user = await User.findByIdAndUpdate(args.userId, {
        $push: {
          savedBooks: args.bookId,
        },
      });
      return user;
    },
    removeSavedBook: async (root, args) => {
      const user = await User.findByIdAndUpdate(args.userId, {
        $pull: {
          savedBooks: args.bookId,
        },
      });
      return user;
    },
  },
};

module.exports = resolvers;
