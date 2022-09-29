import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');
import { sendmail } from '../Middleware/sendmail';
import { Log } from '../model/Login';


export const LogPost = async (req, res) => {

    const Signup = new Log({

        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        timeStamp: {
            createAt: new Date(),
            updateAt: new Date()
        }
    });


    const Result = await Signup.save();
    // await sendmail('sanjaysharma28111997@gmail.com', req.body.email, 'welcome', 'hii ')
    return res.send({
        status: true,
        message: "signup successfully",
        result: Result

    })
}



// -----------------------login part------------------------------------------------

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Log.findOne({ email });
    if (!user) {
        res.send({
            status: 200,
            message: "email not valid"
        })
    }

    const isValid = bcrypt.compareSync(password, user.password);
    let payload = {};
    payload._id = user._id;



    if (isValid) {



        jwt.sign(payload, "sanjay", { "expiresIn": "24h" }, (err, token) => {
            res.send({
                status: 200,
                message: "login succesful ",
                Token:token,
                result: user
            })
        })

    } else {
        res.send({
            status: 404,
            message: "password incorrect"
        })
    }
}



