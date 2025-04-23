
import Link from "next/link";
import logoImage from "@/assets/logo.png"; // Adjust the path as necessary
import classes from "./main-header.module.css"; // Adjust the path as necessary
import Image from "next/image";
import MainHeaderBackGround from "./main-header-background"; // Adjust the path as necessary
import NavLink from "./nav-link"; // Adjust the path as necessary


export default function MainHeader() {

    return (
        <>
            <MainHeaderBackGround />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImage} alt="A plate with food on it" priority></Image>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>

                    </ul>
                </nav>
            </header>
        </>

    )
}