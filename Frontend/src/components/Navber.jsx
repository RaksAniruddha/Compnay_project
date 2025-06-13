import React from 'react'
import { NavberImages } from '@/assets/NavberAsset/navberExport'
import { Link } from 'react-router-dom'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Button } from './ui/button'

function Navber() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center border-b-2'>
                <div className='hidden md:flex justify-center items-center gap-20 ml-5'>
                    <div className='flex justify-around items-baseline-start my-3  gap-10 lg:gap-25 xl:gap-50'>
                        <Link> <img src={NavberImages.navberLogo} alt="" className='w-fit h-full' /></Link>
                        <Input
                            className="text-center font-medium w-[120px] h-[46px] lg:w-[184px] text-[#807D7E] bg-[#F6F6F6]  mx-4 lg:mx-10 border-none shadow-none focus-visible:ring-0"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-fit shadow-none border-0 hover:border-0 focus-visible:ring-0 [&>svg]:stroke-[3.5] focus:ring-0 focus:outline-none">
                                <SelectValue placeholder="English (united States) " />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className=' flex gap-3 mx-5'>
                        <Button className="bg-[#8A33FD] hover:bg-[#8A33FD]  w-20 lg:w-30">Login</Button>
                        <Button variant="outline" className=" w-20 lg:w-30 ">Sign Up</Button>
                    </div>
                </div>
            </div>
            <MobileNavber />
        </>
    )
}

export default Navber

export const MobileNavber = () => {
    return (
        <>
            <div className='flex flex-col md:hidden  justify-center items-center mb-6 gap-2 mx-auto sm:mx-0'>
                <div className='flex flex-col justify-center items-center my-3 gap-5 sm:gap-10'>
                    <div className='flex justify-center items-center gap-10 sm:gap-20'>
                        <Link> <img src={NavberImages.navberLogo} alt="" className='w-fit h-full' /></Link>
                        <Input
                            className="text-center font-medium w-[120px] h-[46px] lg:w-[184px] text-[#807D7E] bg-[#F6F6F6]  mx-4 lg:mx-10 border-none shadow-none focus-visible:ring-0"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <Select>
                        <SelectTrigger className="w-fit shadow-none border-0 hover:border-0 focus-visible:ring-0 [&>svg]:stroke-[3.5] focus:ring-0 focus:outline-none">
                            <SelectValue placeholder="English (united States) " />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className=' flex gap-3 mx-5'>
                    <Button className="bg-[#8A33FD] hover:bg-[#8A33FD]  w-20 ">Login</Button>
                    <Button variant="outline" className=" w-20 ">Sign Up</Button>
                </div>
            </div>
        </>
    )
}