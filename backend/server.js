import express from 'express';
import cors from 'cors';
import {getJoinData, getSummary} from "./student/studentController.js";
import {addPayment,getAllPayments,removePayment} from "./student/paymentController.js";
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/summary", getSummary);
app.get("/join/:type", getJoinData)
app.get("/payments", getAllPayments);
app.post("/payment/add", addPayment);
app.delete("/payment/:id", removePayment);




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})