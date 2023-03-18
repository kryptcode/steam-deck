import { ArrowRightCircleSvg } from '../../svgs'

const DeckV = () => {
  return (
    <div className='deck-bg h-[70vh] md:h-[95vh] text-center text-white flex flex-col justify-between items-center py-8'>
        <div className=' text-2xl md:text-5xl font-bold'>
            Your Steam Library is <br /> already on Deck
        </div>
        <div className='flex justify-center items-center space-x-3 text-lg cursor-pointer hover:underline'>
            <div>Learn more about Software</div>
            <ArrowRightCircleSvg />
        </div>
    </div>
  )
}

export default DeckV