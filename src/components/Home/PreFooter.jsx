import React from 'react'
import { ArrowRightCircleSvg } from '../../svgs'

const PreFooter = () => {
  return (
    <div className='bg-[#3d3f43] text-white md:py-10'>
        <div className='md:w-[90%] mx-auto flex flex-col md:flex-row justify-between md:space-x-24'>
            <div className='bg-[#1b1b1b] md:flex-1 p-10 text-center flex flex-col items-center h-[80vh] bg-tech-specs '>
              <h5 className='text-2xl mb-3'>Tech Specs</h5>
              <p className='flex justify-center items-center space-x-3 text-sm cursor-pointer hover:underline'>
                <span>Learn more about inputs, controls <br /> and details that make up Steam Deck</span> <ArrowRightCircleSvg /> 
              </p>
            </div>

            <div className='bg-[#3d3f43] md:bg-[#1b1b1b] h-[80vh] md:flex-1 p-10 text-center flex flex-col items-center bg-connect'>
              <h5 className='text-2xl mb-3'>Connect your deck</h5>
              <p className='flex justify-center items-center space-x-3 text-sm cursor-pointer hover:underline'>
                <span>Learn more about the docking station</span> <ArrowRightCircleSvg /> 
              </p>
            </div>
        </div>
    </div>
  )
}

export default PreFooter