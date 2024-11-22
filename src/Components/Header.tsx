import { MapPin, Search } from 'lucide-react'
import Logo from '../assets/Logo.png'
import { Button } from '@mui/material'
import { useState } from 'react'

function Header() {
  const [isInput,setIsInput]=useState(false);
  return (
    <div className=' w-screen h-28 top-0 left-0 bg-gray-100 z-40 '>
      <div className="w-full flex justify-end gap-[20%] h-[20%] text-sm bg-[#151F3E] text-[#DF7117] px-10">
        <span> Call: +250786 888 888</span>
        <span> Email: support@kigalitable.com</span>
      </div>
      <div className="w-full h-[80%] flex justify-center items-center px-10">
        <div className="flex w-full h-full justify-between items-center">
          <div className="flex items-center gap-5">
            <div className='flex items-center'>
            <img src={Logo}  alt="" className='w-20 rounded-2xl' />
            <h1 className="text-3xl font-bold text-[#DF7117] ">KigaliTables</h1>
            </div>
            <div className="flex text-gray-700 gap-1">
            <MapPin/>
            <span className="text-gray-700"> Kigali</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
          <Button variant="contained" className='!bg-[#151F3E] !text-gray-100 !capitalize'>Login</Button>
          <div className="flex items-center">
            <input type="search" className={`max-w-32 h-8 rounded-md transition-all duration-300 border border-gray-700 ease-in-out ${isInput?"":'hidden'}`} />
            <Search onClick={()=>setIsInput(!isInput)} className='w-6 h-6'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
