import sql from "better-sqlite3";

const db = sql("meals.db", { verbose: console.log });

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

     //throw new Error("Error fetching meals from the database.");
    return  db.prepare("SELECT * FROM meals").all();

}

export async function getMealBySlug(slug) {
    const meal =  await db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
    return meal;
}