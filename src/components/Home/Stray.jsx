import stray from '../../assets/stray.mp4'

const Stray = () => {
  return (
    <div className='relative'>
        <div>
        <video className='w-full' src={stray} autoPlay={false} loop={true} controls={false}></video>
        </div>
        <div className='absolute bottom-4 left-16 z-10 '>
            <img src="https://cdn.cloudflare.steamstatic.com/steamdeck/images/gamelogo_Stray.png" alt="" className='w-52' />
        </div>
    </div>
  )
}

export default Stray