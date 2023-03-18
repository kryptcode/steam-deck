import Miles from '../../assets/morales.mp4'

const Morales = () => {
  return (
    <div className='relative'>
        <div>
            <video className='w-full' src={Miles} autoPlay={false} loop={true} controls={false}></video>
        </div>
        <div className='absolute bottom-4 left-5 z-10 '>
            <img src="https://cdn.cloudflare.steamstatic.com/steamdeck/images/gamelogo_milesMorales.png" alt="" className='w-40' />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 ' />
    </div>
  )
}

export default Morales