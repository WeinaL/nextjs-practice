'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css"; // Adjust the path as necessary

export default function NavLink({ href, children}) {
    const path = usePathname(); // Get the current path using Next.js router
  return (
    
        <Link href={href} className={path === href ? `${classes.link}  ${classes.active}`: classes.link}>{children}</Link>
   
    
  )
}