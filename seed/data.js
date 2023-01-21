import db from '../db/connection.js';
import mongoose from 'mongoose';
import data from './Items.json' assert {type: 'json'}
import StoreItems from '../models/StoreItems.js';







const insertData = async () => {
    await db.dropDatabase();

    await StoreItems.create(data)

    await db.close();
}

insertData();
