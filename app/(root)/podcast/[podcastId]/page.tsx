import React from 'react'

const PodcastDetails = ({ params }:{params: {podcastId: string}}) => {
  return (
    <div className='text-white-1'>Podcast Details for {params.podcastId}</div>
  )
}

export default PodcastDetails