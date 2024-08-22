import React from 'react'
import TopLeague from '../component/TopLeague'
import ImageSlider from '../component/ImageSlider'
import Slip from '../component/Slip'
import MatchesBig from '../component/MatchesBig'

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
           <div className="col-span-12 md:col-span-2" >
               <TopLeague />
           </div>
           
       
           <div className="col-span-12 md:col-span-7">
               <ImageSlider />
                <MatchesBig />
           </div>
       
           <div className="col-span-12 md:col-span-3">
               <Slip />
           </div>
    </div>
  )
}

export default Home
