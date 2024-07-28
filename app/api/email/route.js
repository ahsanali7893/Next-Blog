import { connectDB } from "@/lib/config/db";
import EmailModal from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`
  };
  await EmailModal.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}
