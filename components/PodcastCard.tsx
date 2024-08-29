import Image from 'next/image'
import React from 'react'

const PodcastCard = ({
    imgURL, title, description, podcastID
}:{
    imgURL: string,
    title: string,
    description: string,
    podcastID: number
}) => {
  return (
    // PodcastCard
    <div className='cursor-pointer '>
        <figure className="flex flex-col gap-2">
            <Image className='aspect-square h-fit w-full rounded-xl: size-[200px]'
            src={imgURL}
            width={174}
            height={174}
            alt={title}/>
        </figure>
        <div className='flex flex-col'>
            <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
            <h2 className='text-12 truncate text-white-4'>{description}</h2>
        </div>
        
    </div>
  )
}

export default PodcastCard