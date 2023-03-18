import options from '../../assets/options.png'
import { ArrowRightSvg } from '../../svgs'

const Pricing = () => {
  return (
    <div className='text-white bg-pink-500 py-12 '>
        <div className='w-[90%] mx-auto '>
            <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 mb-12'>
                <div className='flex-1 md:pr-32'>
                    <h2 className='text-2xl md:text-4xl font-bold mt-4 mb-3 md:mb-6'>Three storage options</h2>
                    <p className='md:text-xl font-semibold'>
                    There is no in-game difference in frame rates or graphics quality between the three models.
                    </p>
                </div>

                <div className='flex-1'>
                    <img src={options} alt="" className='w-[40rem] ' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between'>
                <div>
                    <div className='flex items-center space-x-2 mb-4'>
                        <h3 className='text-4xl font-bold'>
                            $399 USD
                        </h3>
                        <h4 className='text-3xl text-black'>
                            64GB
                        </h4>
                    </div>
                    <ul className='list-disc px-5 py-2'>
                        <li>64GB eMMC internal storage</li>
                        <li>Carrying case</li>
                    </ul>
                </div>
                
                <div>
                    <div className='flex items-center space-x-2 mb-4' >
                        <h3 className='text-4xl font-bold'>
                            $529 USD
                        </h3>
                        <h4 className='text-3xl text-black'>
                            256GB
                        </h4>
                    </div>
                    <ul className='list-disc px-5 py-2'>
                        <li>256GB NVMe SSD internal storage</li>
                        <li>Faster storage</li>
                        <li>Carrying case</li>
                        <li>Exclusive Steam Community profile bundle</li>
                    </ul>
                </div>

                <div>
                    <div className='flex items-center space-x-2 mb-4'>
                        <h3 className='text-4xl font-bold'>
                            $649 USD
                        </h3>
                        <h4 className='text-3xl text-black'>
                            512GB
                        </h4>
                    </div>
                    <ul className='list-disc px-5 py-2'>
                        <li>512GB NVMe SSD internal storage</li>
                        <li>Fastest storage</li>
                        <li>Premiunn anti-glare etched glass</li>
                        <li>Exclusive carrying case</li>
                        <li>Exclusive Steam Community profile bundle</li>
                        <li>Exclusive virtual keyboard theme</li>
                    </ul>
                </div>

            </div>

            <div className='text-xs my-10 italic border-b opacity-50 pb-2'>
            Effective storage capacity subject to change based on size of operating system and formatting technology. All models include a microSD slot for additional storage capacity.
            </div>

            <div className='md:flex md:justify-end'>
                <div className='bg-black text-white p-3 rounded-3xl w-full md:w-52 flex space-x-2 items-center justify-center font-bold  cursor-pointer hover:bg-white hover:text-black duration-300 ease-in-out transition-all '>
                    <div>
                        Get Yours
                    </div>
                    <ArrowRightSvg />
                </div>
            </div>


        </div>
    </div>
  )
}

export default Pricing