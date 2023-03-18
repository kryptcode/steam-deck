import joystick from '../../assets/analog.webm'
import walkin from '../../assets/walkingSteam.png'
import { ArrowRightCircleSvg } from '../../svgs'

const LearnMore = () => {
  return (
    <div className='bg-[#3d3f43] text-white md:py-10'>
        <div className='md:w-[90%] mx-auto flex flex-col md:flex-row justify-between'>
            <div className='bg-[#1b1b1b] pt-24 p-10 text-center flex flex-col items-center '>
                <div>
                    <video className='w-[14rem] h-[18rem] ' src={joystick}  autoPlay={true} loop={true} controls={false}></video>
                </div>
                <p className='text-2xl my-10'>
                    Designed to put real games in real hands
                </p>

                <div className='flex justify-center items-center space-x-3 text-lg cursor-pointer hover:underline'>
                    <div>Learn more about Hardware</div>
                    <ArrowRightCircleSvg />
                </div>
            </div>

            <div className='bg-[#3d3f43] md:bg-[#1b1b1b] pt-24 p-10 text-center flex flex-col items-center '>
                <div>
                    <img src={walkin} className='w-[18rem] h-[18rem] object-contain' alt="" />
                </div>
                <p className='text-2xl my-10'>
                    Bring Steam with you, wherever you go!
                </p>

                <div className='flex justify-center items-center space-x-3 text-lg cursor-pointer hover:underline'>
                    <div>Learn more about Software</div>
                    <ArrowRightCircleSvg />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearnMore