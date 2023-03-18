import er from '../../assets/elden.mp4'

const EldenRing = () => {
  return (
    <div className='relative'>
        <div>
        <video className='w-full' src={er} autoPlay={false} loop={true} controls={false}></video>
        </div>
        <div className='absolute bottom-4 left-16 z-10 '>
            <img src="https://cdn.cloudflare.steamstatic.com/steamdeck/images/gamelogo_eldenRing.png" alt="" className='w-52' />
        </div>
    </div>
  )
}

export default EldenRing