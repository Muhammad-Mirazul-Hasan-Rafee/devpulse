import bcrypt from "bcryptjs";
import type { IUser } from "./user.interface";
import { pool } from "../../DB";

//   create user
const createUserIntoDb = async(payLoad: IUser)=>{
    const {name, email, password, role} = payLoad;
    const hashpassword = await bcrypt.hash(password,10);

    // if(role){

    // }

    const result = await pool.query(`
        
    `);

};