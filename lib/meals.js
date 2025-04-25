import sql from "better-sqlite3";

import path from "path";

const dbPath = path.resolve(process.cwd(), "meals.db");
const db = sql(dbPath, { verbose: console.log });

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    return db.prepare("SELECT * FROM meals").all();
}

export async function getMealBySlug(slug) {
    return await db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);  
}