import DeckFront from '../../assets/tech/deck_front.png'
import DeckTop from '../../assets/tech/deck_top.png'
import DeckBack from '../../assets/tech/deck_back.png'
import DeckFrontMobile from '../../assets/tech/deck_front_mobile.png'
import DeckTopMobile from '../../assets/tech/deck_top_mobile.png'
import DeckBackMobile from '../../assets/tech/deck_back_mobile.png'
import Dock from '../../assets/tech/dock.png'
import  DockMobile from '../../assets/tech/dock_mobile.png'

const TechSpecs = () => {
  return (
    <div className='bg-[#1b1b1b] text-white py-16 '>
        <div className='w-[90%] mx-auto '>
            <h2 className='text-3xl md:text-8xl font-bold text-center'>
                Tech Specs
            </h2>

            {/* Deck View */}

            <div className='hidden md:block'>
                <div className='my-5'>
                    <img src={DeckFront} alt="" />
                </div>

                <div className='my-5'>
                    <img src={DeckTop} alt="" />
                </div>

                <div className='my-5'>
                    <img src={DeckBack} alt="" />
                </div>
            </div>

            {/* DEck Views Mobile */}

            <div className='md:hidden'>
                <div className='my-5 '>
                    <img src={DeckFrontMobile} alt="" />
                    <div className='w-full grid grid-cols-2 justify-items-start gap-2 my-3 text-lg font-medium'>
                        <span><span className='text-slate-600'>01.</span> D-pad</span>
                        <span><span className='text-slate-600'>02.</span>View</span>
                        <span><span className='text-slate-600'>03.</span>Thumbstick / L3</span>
                        <span><span className='text-slate-600'>04.</span>Trackpad</span>
                        <span><span className='text-slate-600'>05.</span>Steam</span>
                        <span><span className='text-slate-600'>06.</span>Left speaker</span>
                        <span><span className='text-slate-600'>07.</span>7" touchscreen</span>
                        <span><span className='text-slate-600'>08.</span>Thumbstick / R3</span>
                        <span><span className='text-slate-600'>09.</span>Menu</span>
                        <span><span className='text-slate-600'>10.</span>ABXY</span>
                        <span><span className='text-slate-600'>11.</span>Trackpad</span>
                        <span><span className='text-slate-600'>12.</span>Quick access</span>
                        <span><span className='text-slate-600'>13.</span>Right speaker</span>
                        <span><span className='text-slate-600'>14.</span>Mic</span>
                    </div>
                </div>
                
                <div className='my-5 '>
                    <img src={DeckTopMobile} alt="" />
                    <div className='w-full grid grid-cols-2 justify-items-start gap-2 my-3 text-lg font-medium'>
                        <span><span className='text-slate-600'>01.</span>L2</span>
                        <span><span className='text-slate-600'>02.</span>L1</span>
                        <span><span className='text-slate-600'>03.</span>Volume</span>
                        <span><span className='text-slate-600'>04.</span>Headphone jack</span>
                        <span><span className='text-slate-600'>05.</span>Fan</span>
                        <span><span className='text-slate-600'>06.</span>Charging port</span>
                        <span><span className='text-slate-600'>07.</span>Status LED</span>
                        <span><span className='text-slate-600'>08.</span>Power Button</span>
                        <span><span className='text-slate-600'>09.</span>R1</span>
                        <span><span className='text-slate-600'>10.</span>R2</span>
                    </div>
                </div>
                
                <div className='my-5 '>
                    <img src={DeckBackMobile} alt="" />
                    <div className='w-full grid grid-cols-2 justify-items-start gap-2 my-3 text-lg font-medium'>
                        <span><span className='text-slate-600'>01.</span>R4</span>
                        <span><span className='text-slate-600'>02.</span>R5</span>
                        <span><span className='text-slate-600'>03.</span>microSD card slot</span>
                        <span><span className='text-slate-600'>04.</span>L4</span>
                        <span><span className='text-slate-600'>05.</span>L5</span>
                    </div>
                </div>
            </div>

            {/* SPeed amd Feeds */}


            <div className='mt-32'>
                <h2 className='text-2xl md:text-6xl font-bold mb-2 md:mb-8'>
                    Speeds and Feeds
                </h2>

                {/* Compute */}

                <div>
                    <h4 className='text-xl md:text-3xl font-semibold mb-3 border-b-[1px] border-slate-600/80 py-2 '>
                        Compute
                    </h4>

                    <div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2 '>
                            <h6 className='text-slate-600 w-[16em] flex-[1] '>
                                Processor
                            </h6>

                            <div className='flex-[4] '>
                                <p>AMD APU</p>
                                <p>CPU: Zen 2 4c/8t, 2.4-3.5GHz (up to 448 GFlops FP32)</p>
                                <p>GPU: 8 RDNA 2 CUs, 1.0-1.6GHz (up to 1.6 TFlops FP32)</p>
                                <p>APU power: 4-15W</p>
                            </div>
                        </div>
                        
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                RAM
                            </h6>

                            <div className='flex-[4]'>
                                <p>16 GB LPDDR5 on-board RAM (5500 MT/s quad 32-bit channels)</p>
                            </div>
                        </div>

                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium  py-2'>
                            <h6 className='text-slate-600 w-[16rem] flex-[1] '>
                                Storage
                            </h6>

                            <div className='flex-[4]'>
                                <p>64 GB eMMC (PCIe Gen 2 x1)</p>
                                <p>256 GB NVMe SSD (PCIe Gen 3 x4 or PCIe Gen 3 x2*)</p>
                                <p>512 GB high-speed NVMe SSD (PCIe Gen 3 x4 or PCIe Gen 3 x2*)</p>

                                <div className='italic mt-6'>
                                    <p>
                                    All models use socketed 2230 m.2 modules (not intended for end-user replacement)
                                    </p>
                                    <p>All models include high-speed microSD card slot</p>
                                    <p>*Some 256GB and 512GB models ship with a PCIe Gen 3 x2 SSD. In our testing, we did not see any impact to gaming performance between x2 and x4.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ctrls and Inputs */}

                <div className='my-3'>
                    <h4 className='text-xl md:text-3xl font-semibold mb-3 border-b-[1px] border-slate-600/80 py-2 '>
                    Controls and Input
                    </h4>

                    <div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2 '>
                            <h6 className='text-slate-600 w-[16em] flex-[1] '>
                                Gamepad Controls
                            </h6>

                            <div className='flex-[4] '>
                                <p>A B X Y buttons</p>
                                <p>D-pad</p>
                                <p>L & R analog triggers</p>
                                <p>L & R bumpers</p>
                                <p>View & Menu buttons</p>
                                <p>4 x assignable grip buttons</p>
                            </div>
                        </div>
                        
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                Thumbsticks
                            </h6>

                            <div className='flex-[4]'>
                                <p>2 x full-size analog sticks with capacitive touch</p>
                            </div>
                        </div>
                        
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                Haptics
                            </h6>

                            <div className='flex-[4]'>
                                <p>HD haptics</p>
                            </div>
                        </div>

                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 w-[16rem] flex-[1] '>
                                Trackpads
                            </h6>

                            <div className='flex-[4]'>
                                <p>2 x 32.5mm square trackpads with haptic feedback</p>
                                <p>55% better latency compared to Steam Controller</p>
                                <p>Pressure-sensitivity for configurable click strength</p>
                            </div>
                        </div>

                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium py-2'>
                            <h6 className='text-slate-600 w-[16rem] flex-[1] '>
                                Gyro
                            </h6>

                            <div className='flex-[4]'>
                                <p>6-Axis IMU</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Display */}

                <div className='my-3'>
                    <h4 className='text-xl md:text-3xl font-semibold mb-3 border-b-[1px] border-slate-600/80 py-2 '>
                    Display
                    </h4>

                    <div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2 '>
                            <h6 className='text-slate-600 w-[16em] flex-[1] '>
                                Resolution
                            </h6>

                            <div className='flex-[4] '>
                                <p>1280 x 800px (16:10 aspect ratio)</p>
                            </div>
                        </div>
                        
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                Type
                            </h6>

                            <div className='flex-[4]'>
                                <p>Optically bonded IPS LCD for enhanced readability</p>
                            </div>
                        </div>
                        
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                Display Size
                            </h6>

                            <div className='flex-[4]'>
                                <p>7" diagonal</p>
                            </div>
                        </div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                Brightness
                            </h6>

                            <div className='flex-[4]'>
                                <p>400 nits typical</p>
                            </div>
                        </div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 flex-[1] w-[16rem] '>
                                Refresh rates
                            </h6>

                            <div className='flex-[4]'>
                                <p>60Hz</p>
                            </div>
                        </div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2'>
                            <h6 className='text-slate-600 w-[16rem] flex-[1] '>
                                Touch enabled
                            </h6>

                            <div className='flex-[4]'>
                                <p>Yes</p>
                            </div>
                        </div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium py-2'>
                            <h6 className='text-slate-600 w-[16rem] flex-[1] '>
                                Sensors
                            </h6>

                            <div className='flex-[4]'>
                                <p>Ambient light sensor</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connectivity */}

                <div className='my-3'>
                    <h4 className='text-xl md:text-3xl font-semibold mb-3 border-b-[1px] border-slate-600/80 py-2 '>
                    Connectivity
                    </h4>

                    <div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2 '>
                            <h6 className='text-slate-600 w-[16em] flex-[1] '>
                                Bluetooth
                            </h6>

                            <div className='flex-[4] '>
                                <p>Bluetooth 5.0 (support for controllers, accessories and audio)</p>
                            </div>
                        </div>
                        <div className='flex space-x-10 md:space-x-16 text-lg  font-medium border-b-[1px] border-slate-600/80 py-2 '>
                            <h6 className='text-slate-600 w-[16em] flex-[1] '>
                                Wi-Fi
                            </h6>

                            <div className='flex-[4] '>
                                <p>Dual-band Wi-Fi radio, 2.4GHz and 5GHz, 2 x 2 MIMO, IEEE 802.11a/b/g/n/ac</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-32'>
                <div className='hidden md:block'>
                <img src={Dock} alt="" />
                </div>

                <div className='md:hidden'>
                    <img src={DockMobile} alt="" />
                    <div className='w-full grid grid-cols-2 justify-items-start gap-2 my-3 md:text-lg font-medium'>
                        <span><span className='text-slate-600'>01.</span>USB-C cable to Steam Deck</span>
                        <span><span className='text-slate-600'>02.</span>ViewDisplayPort 1.4</span>
                        <span><span className='text-slate-600'>03.</span>HDMI 2.0</span>
                        <span><span className='text-slate-600'>04.</span>Power in</span>
                        <span><span className='text-slate-600'>05.</span>Ethernet</span>
                        <span><span className='text-slate-600'>06.</span>3x USB3.1</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechSpecs