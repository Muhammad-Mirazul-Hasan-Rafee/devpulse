import dotenv from "dotenv"
import path from "path";
dotenv.config({
    path: path.join(process.cwd(), '.env'),
});

const config = {
    CONNECTIVITYSTR: process.env.CONNECTIVITY as string,
};
export default config;

