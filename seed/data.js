import db from '../db/connection.js';
import data from './Items.json' assert {type: 'json'}
import StoreItems from '../models/StoreItems.js';
import User from    "../models/users.js";
import bcrypt from "bcrypt"

const insertData = async () => {
    await db.dropDatabase();
    const user1 = new User({
        username: 'justin',
        email: 'someone@gmail.com',
        password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
      })
    await user1.save()
    
    await StoreItems.create(data)
    console.log('Created users & products!');
    await db.close();
}

insertData();
