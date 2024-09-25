import mongoose from 'mongoose';

const connectDB = async()=>{
    const state = mongoose.connection.readyState;
    if(state === 1){
        console.log('connected');
    }
    if(state=== 2){
        console.log('connecting...');   
    }
    if (state === 0) {
        console.log('disconnected');
    }
    try {
        const conn = await mongoose.connect(String(process.env.DB_URI),{
            dbName:'Car-Doctors',
            bufferCommands:true
        })
        return conn;
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB;