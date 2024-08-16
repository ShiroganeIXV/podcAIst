"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from './constants'
import { usePathname, useRouter } from 'next/navigation'
import path from 'path';
import { cn } from '@/lib/utils';

const LeftSidebar = () => {
    // use next navigation to find out which route is active
    const pathname = usePathname(); // A Client Component hook that lets you read the current URL's pathname.
    const router = useRouter(); // This hook allows you to programmatically change routes inside Client Component.


  return (
    <section className='left_sidebar'>

        <nav className='flex flex-col gap-6'>
            <Link href="/" className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                <Image src="/icons/podcAIst-Logo.svg" alt= "logo" width={50} height={50} />
                <h1 className="text-24 font-extrabold text-white max-lg:hidden pl-2">PostcAIst</h1>
            </Link>
            {/* map over all link in the array. //? Best practice: data keep in one place (separate file)
    {
        route: '/profile',
        label: 'Profile',
        imgURL: '/icons/microphone.svg'
    }
            */}
            

            {sidebarLinks.map(({route,label, imgURL})=>{
            // Identify which route is active and apply active class to it
            const isActive = pathname === route || pathname.startsWith(`${route}/`); // if the current path is the same as the route or starts with the route then it is active
            
            // cn provides a way to conditionally apply classes to an element (provide by tailwindcss). Apply class ... if isActive is true
            return <Link href={route} key={label} className={cn('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',{'bg-nav-focus border-r-4 border-orange-1':isActive})}> 
                        <Image src={imgURL} alt={label} width={24} height={24}/>
                        <p>{label}</p>
                    </Link>
            

        })
        }
        </nav>



    </section>
    
  )
}

export default LeftSidebar