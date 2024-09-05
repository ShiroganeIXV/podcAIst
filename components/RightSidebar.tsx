import { UserButton } from '@clerk/nextjs'
import React from 'react'

const RightSidebar = () => {
  return (
    <section className="right_sidebar text text-white-1">
      RightSidebar
      <UserButton /> 
    </section>

  )
}

export default RightSidebar