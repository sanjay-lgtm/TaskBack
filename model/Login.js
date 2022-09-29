import mongoose from "mongoose";
const LogSchema = new mongoose.Schema({

    email: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: false
    },
    timeStamp: {
        createAt: {
            type: Date
        },
        updateAt: {
            type: Date
        }
    }
})

export const Log = mongoose.model("Log", LogSchema);