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
        INSERT users(name, email, password, role) VALUES($1, $2, $3, COALESCE($4, 'user') ) RETURNING *`, [name, email, hashpassword,role ]);

        delete result.rows[0].password;
        return result;

};
// create all
const getAllUsersFromDb = async() =>{
    const result = await pool.query(`SELECT * FROM users`);
    return result;
};
// get a specific user
const getSpecificUserFromDb = async(id: string)=>{
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return result;
};