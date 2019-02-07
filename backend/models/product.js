import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Product = new Schema({
    pName : {
        type:string
    },
    description : {
        type:string
    },
    price :{
        type:number
    },
    image :{
        type:string
    }
});

export default mongoose.model('Product', Product);
