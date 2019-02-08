var bodyparser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');



mongoose.connect('mongodb://admin:krish123@ds157901.mlab.com:57901/closet', {useNewUrlParser:true}, (err) =>{

    if(err) 
        throw err;
    else
        console.log('Base connected');
});



var userSchema = new mongoose.Schema({
    username:String,
    email:String,
    phone:String,
    password: String
})

var productSchema = new mongoose.Schema( {mensproducts : [{
    pname: String,
    description: String,
    image: String,
    price: Number,
    quantity: Number,
}],
womenproduct : [{
    pname: String,
    description: String,
    image: String,
    price: Number,
    quantity: Number,
}]});
    

var cartSchema = new mongoose.Schema({
    prdid:String,
    quantity:String,
})

var userData = mongoose.model('user', userSchema);
var productsInfo = mongoose.model('products', productSchema);
var cartInfo = mongoose.model('cart', cartSchema );

module.exports = function(app) {

    var jsonparser = bodyparser.json();

    // productsInfo.find({}, (err, data) => {
    //     console.log(data[2].womenproduct[0]);
    // })

    // fs.readFile('F:/PROGRAMMING/ShoppingCart/backend/files/products.json', (err, data) => {  
    //     if (err) throw err;
    //     let products = JSON.parse(data);
    //     productsInfo(products).save((err => {
    //         if(err)
    //             throw err;
    //         else
    //             console.log("json stored");
    //     }))
    //     console.log(products);
    // });


    app.post('/SignUp', jsonparser, (req, res)=> {
        // console.log("inside");
        console.log(req.body);
        userData(req.body).save((err) => {
            if(err)
                throw err;
            else
                console.log("Voila! data saved");
        })
        // console.log("posting signup")
    });
    
    app.post('/catalog', jsonparser, (req, res) => {
        console.log(req.body);
        cartProd.find({}, (err, data) =>{
            if(err)
                throw err;
            else {
                // console.log(data);
                // console.log("catalog");
                // console.log(req.body);
                for(var i = 0; i < data.length; i++) {
                    if(req.body.prdid === data[i].prdid) {

                        cartProd.findByIdAndRemove({_id: data[i]._id}, (err, data) => {
                            if(err)
                                res.json(err);
                            else   
                                console.log("Removed Sacksaspully");
                        })
                        // console.log(data[i].prdid)
                    }
                }
                cartProd(req.body).save((err) => {
                    if(err)
                        throw err;
                    else
                        console.log("Voila! cart Updated");
                })

            }
        })
    })
    app.get('/cart', jsonparser, (req, res) => {
        // console.log("inside cart");
        cartInfo.find({}, (err, data)=> {
            console.log(data);
            if(err)
                throw err;
            else {
                res.send(data);
            }
        })
    })
    app.get('/catalog', jsonparser, (req, res) => {
        // console.log("in catalog");
        productsInfo.find({}, (err, data) => {
            if(err)
                throw err;
            else {
                res.send(data);
            }
        // console.log(data[0].mensproduct[1].pname);
        })
    })


    app.post('/login', jsonparser, (req, res) => {
        console.log(req.body);
        // alert("hdfhfhjdfjhdfkhdfkhdfkh");
        // console.log("agghahahshshh");
        userData.find({}, (err, data)=> {
            // alert("asdfghjkdfgbhnm");
            if(err)
                throw err;
            else {
                var check = false;
                for(var i = 0; i <data.length; i++) {
                    // alert("hiiiiiiiii")
                    // console.log(i);
                    if(data[i].username === req.body.username && data[i].password === req.body.password) {
                        check = true;
                        break;
                        // console.log("true");
                        // return;
                    } else {
                        check = false;
                    }
                    // } else {
                    //     res.send(false);
                    // }
                }
                res.send(check);
            }
        })
    }
    )
}

