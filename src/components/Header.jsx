import { ChevDownSvg, GlobeSvg, MenuSvg } from "../svgs"
import { Link } from 'react-router-dom'

const styles = {
    btns: 'py-1 px-3 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out'
}

const Header = () => {
  return (
    <div className="bg-[#1b1b1b] sticky top-0 z-20" >
        <div className="w-[90%] mx-auto flex justify-between items-center text-white py-5  ">
            <div className="flex items-center space-x-4">
                <div className="h-8 w-8 rounded-full bg-pink-500" />
                <div className="uppercase space-x-2 text-xl">
                    <span className="font-medium">steam</span>
                    <span className="font-bold">deck</span>
                </div>
            </div>

            <div className="md:flex items-center hidden font-semibold space-x-3 ">
                <span className={styles.btns}>Hardware</span>
                <span className={styles.btns}>Software</span>
                <span className={styles.btns}>Deck Verified</span>
                <span className={styles.btns}>Dock</span>
                <span className={styles.btns}>FAQ</span>
                <span className={styles.btns}>
                    <Link to='/tech'>
                    Tech Specs
                    </Link>
                </span>
                <span className={styles.btns}>News</span>
                <span className={`${styles.btns} bg-pink-500`}>Add to Wishlist</span>
                <span className="flex items-center text-gray-600 py-1 px-2 rounded-2xl cursor-pointer hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
                    <GlobeSvg />
                    <ChevDownSvg />
                </span>
            </div>

            <div className="md:hidden">
                <MenuSvg />
            </div>
        </div>
    </div>
  )
}

export default Header