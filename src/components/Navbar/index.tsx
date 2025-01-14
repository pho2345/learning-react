import { Bs0Circle } from "react-icons/bs";
import { BsAlarm } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="w-[76px] sm:w-[260px] sm:min-w-[260px] h-screen min-h-screen bg-white p-1">
            <div className="bg-[#f5f4f7] h-full px-3 flex flex-col gap-4 pb-2">
                {/* Logo */}
                <div className="flex gap-3 items-center">
                    <img src="https://tonfi.ai/assets/tonfi/images/logo.png" alt="logo" className="w-10 h-10" />
                    <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">Admin</h1>
                </div>

                <div className="h-[40px] flex items-center px-3 gap-1">
                    <IoSearchOutline className="text-gray-800" size={20} />
                    <input type="text" placeholder="Search" className="w-full h-full bg-transparent text-white hidden sm:block" />
                    <Bs0Circle className="text-gray-800 hidden sm:block" size={20} />
                    <Bs0Circle className="text-gray-800 hidden sm:block" size={20} />
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-gray-400 hidden sm:block">Menu</label>
                    <div className="flex flex-col gap-1">
                        <ul className="flex flex-col gap-1 justify-center text-gray-950 font-bold">
                            <li className="h-[44px] flex items-center gap-3 px-3">
                                <Bs0Circle className="" size={20} />
                                <span className="hidden sm:block">Dashboard</span>
                            </li>
                            <li className="h-[44px] flex items-center gap-3 px-3">
                                <BsAlarm className="" size={20} />
                                <span className="hidden sm:block">Schedule</span>
                            </li>
                            <li className="h-[44px] flex items-center gap-3 px-3">
                                <BsArrowRightCircle className="" size={20} />
                                <span className="hidden sm:block">Avatar</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;