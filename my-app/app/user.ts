import {db} from "../db";
import {users} from "../db/schema";

export async function insertOneUser() {
    await db.insert(users).values({name:"isaac", isDrugDealer:true})
}