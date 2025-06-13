import React from 'react'
import { AuthImages } from '@/assets/Authasset/authAsset'
import { Icons } from '@/assets/Authasset/authAsset'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
function ResetPassword() {
    return (
        <div className='flex flex-col md:flex-row  gap-0 md:gap-3 lg:gap-20'>
            <div className='hidden md:block'>
                <img src={AuthImages.Resetpassword} className='h-[700px] lg:w-[580px] xl:w-[700px] ' alt="" />
            </div>
            <div className='mx-5 lg:mx-10 xl:mx-30 mt-10'>
                <div className='space-y-4'>
                    <div className='mb-10 space-y-4'>
                        <p className='text-xl text-center md:text-start md:text-4xl font-bold'>Reset Your Password</p>
                        <div className='space-y-1'>
                            <p className='text-sm text-[#3C4242]'>Enter your email and we'll send you a link to reset your password. </p>
                            <p className='text-sm text-[#3C4242]'>Please  check it.</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <Label className="text-[#3C4242] font-normal ">Email</Label>
                        <Input
                            type="email"
                            className="border border-[#3C4242] h-11 text-[#8A33FD] hover:border-[#8A33FD] focus:border-[#8A33FD] focus:ring-0 focus:outline-none shadow-none focus-visible:ring-0 "
                        />
                        <p className='text-sm text-[#EE1D52]'>We can not find your email.</p>
                    </div>
                    <Button className="bg-[#8A33FD] w-1/2 md:w-30  h-12 font-normal">Send</Button>
                    <div>
                        <p className='text-[#3C4242]'>Back To <Link className=' underline'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword