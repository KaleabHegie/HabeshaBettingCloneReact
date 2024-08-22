import React from "react";
import {HiTrash} from 'react-icons/hi'
const Slip = () => {
  return (
    <div href="#" className="max-w-sm bg-neutral-900 border rounded-lg">
      <div className="flex mr-5 bg-yellow-200" style={{ width: '100%', margin: 0 }}>
      <button className="bg-yellow-300 w-full p-3 rounded-lg">BetSlip 1</button>
      <button className="bg-yellow-200 w-full p-3 rounded-lg">BetSlip 2</button>
      <button className="bg-yellow-200 w-full p-3 rounded-lg">BetSlip 3</button>
      <button className="bg-yellow-200 w-full p-3 rounded-lg">{HiTrash}</button>
      </div>
      <p className="font-normal text-white h-20 text-lg mt-16 text-center">
        <span className="text-yellow-300">/////</span> Click ODDS to Start <span className="text-yellow-300"> ///// </span>
      </p>
    </div>
  )
}


export default Slip;
