"use client";
import React from 'react'
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Logo from '../../../assets/images/Logo.jpg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'bg-secondary rounded-[var(--radius)] shadow-lg shadow-black/25' : 'hover:text-destructive duration-300';
    };
    return (
        <div className='z-10 flex flex-col justify-center items-center fixed top-0 w-full py-2'>
            <div className="mt-2 hidden w-max flex-wrap justify-center items-center space-x-1 rounded-[var(--radius)] shadow-lg shadow-black/30 border border-muted bg-slate-800/70 p-2 backdrop-blur md:flex">
                <Link href='/' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/')}`}>
                        Home
                    </div>
                </Link>

                <Link href='/projects' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/projects')}`}>
                        Projects
                    </div>
                </Link>

                <Link href='/blogs' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/blogs')}`}>
                        Blogs
                    </div>
                </Link>

                <Link href='/experience' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/experience')}`}>
                        Experience
                    </div>
                </Link>

                <Link href='/contact' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/contact')}`}>
                        Contact Me
                    </div>
                </Link>
            </div>
            {/* <div className='flex justify-center items-center my-5 bg-gradient text-secondary-foreground backdrop-blur rounded-[var(--radius)] px-4 py-2 sm:text-3xl cursor-pointer select-none'>Website in devlopment phase</div> */}
        </div>
    )
}

export default Header



// < div className = 'flex lg:hidden' >
//     <Sheet>
//         <SheetTrigger asChild>
//             <Button variant="ghost" size='icon'><HamburgerMenuIcon /></Button>
//         </SheetTrigger>
//         <SheetContent>
//             <SheetHeader>
//                 <SheetClose asChild>
//                     <Link href='/' className="flex justify-center items-center overflow-hidden">
//                         <Image src={Logo} alt='' className='size-32 object-contain' />
//                     </Link>
//                 </SheetClose>
//                 <SheetTitle>
//                     <SheetClose asChild>
//                         <Link href='/' className='text-2xl font-semibold tracking-tight'>{name}</Link>
//                     </SheetClose>
//                 </SheetTitle>
//                 <SheetDescription>
//                     Celebrating 100 years of Ceramic Engineering IIT BHU
//                 </SheetDescription>
//             </SheetHeader>
//             <div className="flex flex-col gap-3 mt-5">
//                 <SheetClose asChild>
//                     <Link href='/' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Home</Link>
//                 </SheetClose>
//             </div>
//         </SheetContent>
//     </Sheet>
//             </div >