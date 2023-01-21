import db from '../db/connection.js';
import mongoose from 'mongoose';
import data from './Items.json' assert {type: 'json'}







const insertData = async () => {
    await db.dropDatabase();

    await Recipe.create(recipeData)

    await db.close();
}

insertData();
