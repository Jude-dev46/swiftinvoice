import { NextResponse } from "next/server";

const Client = require("../../models/client");
const User = require("../../models/user");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const InitiatetMongoServer = require("../../config/db");

InitiatetMongoServer();
export async function GET(req, context) {
  const { client } = context.params;

  try {
    const foundClients = await Client.find({});
    const foundClient = foundClients.filter((cli) => cli.clientId === client);

    if (!foundClient.clientId) {
      return NextResponse.json({
        status: false,
        message: "This client does not exists!",
      });
    }
    const customer = await stripe.customers.retrieve(foundClient.clientId);
    console.log(customer);

    return NextResponse.json({
      status: true,
      message: "Successfully retrieved clients!",
      data: foundClient,
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}
