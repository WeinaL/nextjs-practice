import classes from './page.module.css';
import Image from 'next/image';
import { getMealBySlug } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function MealDetailsPage({params}) {
    const meal = await getMealBySlug(params.mealSlug);

    console.log("meal", meal.slug);

    if (meal) {
        meal.instructions = meal.instructions.replace(/\n/g, '<br />');
    } else {
        notFound();
    }

    return (
        <>
            <header className= {classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill></Image>
                </div>
                <div className={classes.headerText}>
                    <h1>
                        {meal.title}
                    </h1>
                    <p className={classes.creator}>
                    by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
            </main>

        </>
    )
};