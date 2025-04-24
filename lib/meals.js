import sql from "better-sqlite3";

const db = sql("meals.db", { verbose: console.log });

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

    //throw new Error("Error fetching meals from the database.");
    return db.prepare("SELECT * FROM meals").all();

}

export async function getMealBySlug(slug) {

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    try {
        return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
    } catch (error) {
        console.log("what is the error?")
        console.log(error)
    }    
}