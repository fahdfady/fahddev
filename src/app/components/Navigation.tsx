"use client"

import Link from "next/link";

type NavItemProps = { name: string, href: string };

const NavItems: NavItemProps[] = [
    {
        name: "Fahd",
        href: "/",
    },
    {
        name: "Blog",
        href: "/blog",
    }
]

export function Navigation() {
    return (
        <header className="border-b-2 w-full">
            <nav>
                <ul className="gap-2 justify-start items-end gap-x-7 flex pt-2 pb-px">
                    {NavItems.map((item, index) => (
                        <li key={index}>
                            <NavLink item={item} className="text-xl"/>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

function NavLink({ item, className }: { item: NavItemProps, className?: string }) {
    return (
        <Link href={item.href} className={` decoration-transparent  hover:bg-transparent ${className}`}>{item.name}</Link>
    )
}