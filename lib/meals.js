import sql from "better-sqlite3";

const db = sql("meals.db", { verbose: console.log });

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

    // throw new Error("Error fetching meals from the database.");
    return  db.prepare("SELECT * FROM meals").all();

}

export function getMealBySlug(slug) {
    new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

    const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
    if (!meal) {
        throw new Error("Meal not found.");
    }
    return meal;
}