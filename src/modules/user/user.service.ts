import bcrypt from "bcryptjs";
import type { IUser } from "./user.interface";

//   create user
const createUserIntoDb = async(payLoad: IUser)=>{
    const {name, email, password, role} = payLoad;
    const hashpassword = await bcrypt
};