import Deck  from '../../assets/deck_hero.png'
import { ArrowRightSvg } from '../../svgs'

const Hero = () => {
  return (
    <div className='bg-confetti py-6'>
        <div className='w-[80%] mx-auto md:mb-10'>
            <img src={Deck} alt="" />
        </div>

        <div className='w-[90%] mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:items-end'>
            <div className='hidden md:block'>
                <div className='bg-white p-1.5 md:p-3 text-2xl md:text-5xl font-bold inline-block  my-2 md:mb-4'>
                Steam Deck is 10% off this week. 
                </div>
                <div className='bg-white p-1.5 md:p-3 text-2xl md:text-5xl font-semibold inline-block mb-3'>
                We're celebrating its first year!
                </div>

            </div>

            <div className='md:hidden'>
                <div className='bg-white p-1.5 md:p-3 text-2xl md:text-5xl font-bold inline-block  my-2 md:mb-4'>
                Steam Deck is  
                </div>
                <div className='bg-white p-1.5 md:p-3 text-2xl md:text-5xl font-bold inline-block  my-2 md:mb-4'>
                10% off this week.
                </div>
                <div className='bg-white p-1.5 md:p-3 text-2xl md:text-5xl font-semibold inline-block mb-3'>
                We're celebrating its first year!
                </div>
            </div>

            <div className='bg-white p-3 rounded-2xl w-full md:w-52 flex space-x-2 items-center justify-center font-bold  cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out transition-all '>
                <div>
                    Get Yours
                </div>
                <ArrowRightSvg />
            </div>
        </div>
    </div>
  )
}

export default Hero