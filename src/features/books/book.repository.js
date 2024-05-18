// -------------pre-written code starts---------------
import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

export default class BookRepository {

    //book creation
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    // filtering of book by id
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    // ------------prewritten code ends----------------


    // Complete the following functions:

    //filtering the books based on genre
    async listBooksByGenre(genre) { }

    //increasing the count of available books
    async updateBookAvailability(bookId, quantity) { 
        try{
            console.log(quantity)
        const doc = await Character.findOneAndUpdate({_id:new mongoose.Types.ObjectId(bookId)}, {availableCopies:quantity}, {
            new: true
          });
          console.log(doc);
        }catch(err){
            console.log(err);
            console.log("Error updating")
        }
    }

    //deletion of book
    async deleteBookById(bookId) { }
}