"use server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { LoginSchema , RegistrationSchema } from "@/lib/validations/auth";
import { z } from "zod";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function login(data: z.infer<typeof LoginSchema>) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return { error: "Invalid Email" };
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch){
      return { error: "Invalid credentials" };
    }

    // Set session cookie
    const sessionToken = crypto.randomUUID();


    await prisma.session.create({
      data: {
        sessionToken,
        userId: user.id,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    });

    // Use cookies().set properly
    const responseCookies = await cookies(); // This gives a `ResponseCookies` object in a server action


    responseCookies.set("session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong" };
  }
}


export async function register(data: z.infer<typeof RegistrationSchema>) {

try {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use" };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
    },
  });

  const sessionToken = crypto.randomUUID();

  await prisma.session.create({
    data: {
      sessionToken,
      userId: newUser.id,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    },
  });

  const responseCookies = await cookies();

  responseCookies.set("session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  return { success: true };
} catch (error) {
  console.error("Registration error:", error);
  return { error: "Something went wrong" };
}

}