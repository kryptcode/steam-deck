import React from 'react'
import { ArrowRightSvg } from '../svgs'

const Wishlist = () => {
  return (
<div className='bg-[#ec4899] text-white  '>
<div className='w-[90%] mx-auto flex py-8 items-center   '>
            <div className=''>
                <h2>
                    Add Deck to your Wishlist!
                </h2>
                <p>
                Steam Deck is now shipping to the United States, Canada, European Union, and the United Kingdom. More regions to come—stay tuned for more info.
                </p>
            </div>

            <div className='bg-black text-white p-3 rounded-3xl w-full md:w-52 flex space-x-2 items-center justify-center font-bold  cursor-pointer hover:bg-white hover:text-black duration-300 ease-in-out transition-all '>
                <div>
                    Get Yours
                </div>
                <ArrowRightSvg />
            </div>
        </div>
    </div>
  )
}

export default Wishlist