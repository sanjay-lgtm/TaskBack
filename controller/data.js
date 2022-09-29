import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { data } from '../model/data';

const stripe = require('stripe')('sk_test_51LmG7kBU08xNEusFc3LsyAnnZSgyhZQKNlVYdHB7v4yQRfG2shz0WzmE1NTMawwUjK4bZp5zpxnw02cIUnRinz3V00ioGFd1D1')
const paginate = require("express-paginate");


export const datasend = async (req, res) => {
    try {
        console.log(req.body.name,req.body.image)
        const addData = new data({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            price:req.body.price,
            image:req.file.filename,
        });
        const allData = await addData.save();
        if (allData) {
            return res.send({ status: true, message: "Data Add Successfully", code: 200, result: allData })
        }



    } catch (error) {
        throw error;
    }
}


// -------------------------pagination------------------------------------
export const dataList = async (req, res) => {
    try {
        const { page, limit } = req.body;
        const Data = await data.paginate({},
            {
                page,
                limit
            })

        for (let key in Data.docs) {

            Data.docs[key].image = `http://localhost:7624/upload/${Data.docs[key].image}`

        }
        res.send({
            status: 200,
            message: "list geting successfully",
            result: Data
        })

    }
    catch (e) {
        throw e

    }
}

// -----------------------getDatabyId---------------------------------------------------
export const getDataById = async (req, res) => {

    try {
        var _id = req.body._id
        console.log(_id)
        const id = await data.findById(_id);
        console.log(id)
        res.send({
            status: true,
            message: "Data details get by id successfully",
            result: id
        })
    }
    catch (e) {
        return res.send({
            status: false,
            message: "error",
            result: e
        })
    }

}







// -------------------------Searching-------------------------------

export const DataSearch = async (req, res) => {
    const result = await data.find({
        $or: [
            { name: { $regex: req.params.Key } },

            { email: { $regex: req.params.Key } },

        ],
    });

    for (let key in result) {

        result[key].image = `http://localhost:7624/upload/${result[key].image}`

    }

    res.send({
        status: 200,

        message: " Result found ",

        result: result,
    });
};

// // ---------------------vedioUpload-----------------------------------------

// export const videoUpload = async (req, res) => {

//     const listDetail = new data({

//         name: req.body.name,
//         title: req.body.title,
//         video: req.file.filename,



//     })
//     const detail = await listDetail.save();
//     res.send(
//         {
//             status: true,
//             message: "upload successfully",
//             result: detail
//         }
//     )

// }


// -----------------payment----------------------------------------------

export const payment = async (req, res) => {

const {name,price}= req.body;

    // console.log("req.body",req.body)

    const session = await stripe.checkout.sessions.create({

        line_items: [

            {

                price_data: {

                    currency: 'usd',

                    product_data: {

                        name: name,

                    },

                    unit_amount: price,

                },

                quantity: 1,

            },

        ],

        mode: 'payment',

        success_url: 'https://example.com/success',

        cancel_url: 'https://example.com/cancel',

    });

    console.log("session", session)

    // res.send({url: session.url});

    res.send({ status: 200, message: "SUCCESS", result: session })

}








