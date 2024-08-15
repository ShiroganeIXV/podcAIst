import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>

        <nav className='flex flex-col gap-6'>
            <Link href="/">
                <Image src="/icons/podcAIst-Logo.svg" alt= "logo" width={50} height={50} />
            </Link>
        </nav>

    </section>
    
  )
}

export default LeftSidebar