import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = "mongodb+srv://garvit:garvit@cluster0.olyryvr.mongodb.net/todo?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;