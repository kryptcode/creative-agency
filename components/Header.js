import { MenuIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className="flex justify-start sticky h-24 top-0 md:h-32 items-center bg-white z-20">
        <div className='flex-1 '>
            <img src="./assets/desktop/logo.svg" className='pl-10 md:pl-24 ' alt="creative" />
        </div>
        <div className='hidden md:flex flex-1 bg-[#f94f4f] h-full items-center'>
            <div className='flex space-x-8 items-center pl-16 text-white text-md  font-semibold'>
                <p className='cursor-pointer hover:underline'>
                    About
                </p>
                <p className='cursor-pointer hover:underline'>
                    Service
                </p>
                <p className='cursor-pointer hover:underline'>
                    Projects
                </p>
                <div />
                <p className='py-4 px-6 bg-black hover:opacity-80 cursor-pointer transition-all duration-200 hidden lg:flex'>
                    Schedule a call
                </p>
            </div>
        </div>
        <div className='flex md:hidden mr-3 p-2 rounded-full hover:bg-black/10 cursor-pointer transiton-all ease-in duration-200'>
            <MenuIcon className='h-8' />
        </div>
    </div>
  )
}

export default Header