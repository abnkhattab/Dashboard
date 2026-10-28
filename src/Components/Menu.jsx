import { useState } from 'react'
import Images from '../assets/imgs/dashboard-prof.jpg'


const Menu = () => {
    const [isOpen,setIsOpen] = useState(true);
    return (
        <div className={`hidden bg-gradient-to-t from-main to-secondary min-h-[100vh] overflow-y-auto overflow-x-hidden transition-all duration-300 shrink-0 ${isOpen ? 'w-64' : 'w-20'}`}>
            <div>
                <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer focus:outline-none text-white text-4xl text-center m-auto w-full my-6'><i className='fa-solid fa-bars'></i></button>
            </div>
            {isOpen && (
                <div className='flex flex-col gap-4 items-center my-8'>
                    <div className='rounded-full overflow-hidden w-24 border-4 border-main'>
                        <img src={Images} alt="" className='w-full'/>
                    </div>
                    <div className='text-white text-center'>
                        <h2 className='font-bold uppercase text-2xl my-2'>Beauty Matrix</h2>
                        <p className='text-[#777] text-md'>beautymatrix@gmail.com</p>
                    </div>
                </div>
            )}

            {/* links */}
            <ul className='flex flex-col items-start justify-center w-full px-4 py-8'>
                <li className='flex items-center justify-start px-8 gap-8 text-white hover:bg-gray-400 py-4 rounded-mg text-center w-full rounded-sm'>
                    <i className='fa-solid fa-house'></i>
                    <p>Home</p>
                </li>
                <li className='flex items-center justify-start px-8 gap-8 text-white hover:bg-gray-400 py-4 rounded-mg text-center w-full rounded-sm'>
                    <i className='fa-solid fa-file'></i>
                    <p>File</p>
                </li>
                <li className='flex items-center justify-start px-8 gap-8 text-white hover:bg-gray-400 py-4 rounded-mg text-center w-full rounded-sm'>
                    <i className='fa-solid fa-message'></i>
                    <p>Messages</p>
                </li>
                <li className='flex items-center justify-start px-8 gap-8 text-white hover:bg-gray-400 py-4 rounded-mg text-center w-full rounded-sm'>
                    <i className='fa-solid fa-rocket'></i>
                    <p>Notifications</p>
                </li>
                <li className='flex items-center justify-start px-8 gap-8 text-white hover:bg-gray-400 py-4 rounded-mg text-center w-full rounded-sm'>
                    <i className='fa-solid fa-location'></i>
                    <p>Location</p>
                </li>
                <li className='flex items-center justify-start px-8 gap-8 text-white hover:bg-gray-400 py-4 rounded-mg text-center w-full rounded-sm'>
                    <i className='fa-solid fa-chart-pie'></i>
                    <p>Graph</p>
                </li>
            </ul>
        </div>
    )
}

export default Menu
