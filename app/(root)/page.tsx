"use client";
import { podcastData } from '@/components/constants'
import PodcastCard from '@/components/PodcastCard'
import { Button } from '@/components/ui/button'
import React from 'react'

// convex
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
//


const Home = () => {
  const tasks = useQuery(api.task.get); // convex hook
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className="flex flex-col gap5">
        <h1 className="text-20 font-bold text-white-1 pb-4">Trending Podcasts</h1>
        
        {/* //? convex Sample tasks */}
        {/* <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div> */}


        <div className="podcast_grid">
          {podcastData.map((podcast) => (
            <PodcastCard 
            key={podcast.id}
            imgURL={podcast.imgURL}
            title={podcast.title}
            description = {podcast.description}
            podcastID = {podcast.id}/>)
          )}
        </div>
        
        {/* <Button className='text-white-1 bg-orange-1'>Button</Button> */}
        {/* Get data and render to main section */}
        
        
      </section>
    </div>
    
  )
}

export default Home