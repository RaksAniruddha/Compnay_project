import React from 'react'
import { AuthImages } from '@/assets/Authasset/authAsset'
import { Icons } from '@/assets/Authasset/authAsset'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function Checkemail() {
    return (
        <div className='flex flex-col md:flex-row  gap-0 md:gap-3 lg:gap-20'>
            <div className='hidden md:block'>
                <img src={AuthImages.Checkemail} className='h-[640px] lg:w-[580px] xl:w-[640px] ' alt="" />
            </div>
            <div className='mx-5 lg:mx-10 xl:mx-30 mt-10'>
                <div className='space-y-4'>
                    <div className='mb-10 space-y-4'>
                        <p className='text-xl text-center md:text-start md:text-4xl font-bold'>Check Email</p>
                        <div className='space-y-1 w-[500px]'>
                            <p className='text-sm text-[#3C4242]'>Please check your email inbox and click on the provided link to reset your
                                password . If you don’t receive email,<span className='text-[#8A33FD] font-bold'>Click here to resend</span></p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#3C4242]'>{'<'} Back To <Link className=' underline'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkemail