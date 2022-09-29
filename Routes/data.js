import express from 'express';
import { upload } from '../Middleware/FileUpload';
import { dataList, datasend, getDataById ,DataSearch,videoUpload,payment} from '../controller/data';
export const dataRouter = express.Router();





// dataRouter.post("/data",upload.fields([{
//     name: 'image', maxCount: 10
//   }, {
//     name: 'image1', maxCount: 10
//   }]),datasend);


dataRouter.post("/data",upload.single('image'),datasend)

dataRouter.get("/DataSearch/:Key",DataSearch);

dataRouter.post("/dataget",dataList);

dataRouter.get("/datagetbyid",getDataById);

dataRouter.route("/payments").post(payment);