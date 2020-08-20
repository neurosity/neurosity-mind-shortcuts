import dotenv from "dotenv";
import yargs from "yargs";

dotenv.config();

export const email =
  "email" in yargs.argv
    ? yargs.argv.email
    : process.env.NEUROSITY_EMAIL;

export const password =
  "password" in yargs.argv
    ? yargs.argv.password
    : process.env.NEUROSITY_PASSWORD;
