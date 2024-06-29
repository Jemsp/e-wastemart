import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
   });

const paymentHandler = async (req) => {
    const body = await req.json();

      
       var options = {
        amount: body.amount,
        currency: body.currency,
        receipt: 'rcp1',
       };
       const order = await razorpay.orders.create(options);
       console.log(order);
       return NextResponse.json({ orderId: order.id }, { status: 200 });


}

export { paymentHandler as POST }