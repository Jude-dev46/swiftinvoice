'use client'
import Image from 'next/image'
import logo from '../../../public/logo-text.svg'

const Navbar = () => {
  return (
    <div>
    <div className='px-4 sm:px-8 py-4 flex justify-start bg-[#F6F6F6]'>
            <Image src={logo} alt="logo" className=' w-[8.5rem] sm:w-auto h-10 sm:h-19'priority={true}/>

            
        </div>

    </div>
  )
}

export default Navbar