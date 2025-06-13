import React from 'react'
import { AuthImages } from '@/assets/Authasset/authAsset'
import { Icons } from '@/assets/Authasset/authAsset'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function Verification() {
    return (
            <div className='flex flex-col md:flex-row  gap-0 md:gap-3 lg:gap-20'>
                <div className='hidden md:block'>
                    <img src={AuthImages.Vefiication} className='h-[700px] lg:w-[580px] xl:w-[700px] ' alt="" />
                </div>
                <div className='mx-5 lg:mx-10 xl:mx-30 mt-10'>
                    <div className='space-y-4'>
                        <div className='mb-10 space-y-4'>
                            <p className='text-xl text-start md:text-start md:text-4xl font-bold'>Verification</p>
                                <p className='text-sm text-[#3C4242]'>Verify your code.</p>
                        </div>
                        <div className='space-y-5'>
                            <Label className="text-[#3C4242] font-normal">Verification Code</Label>
                            <Input
                                className="md:w-[350px] border border-[#3C4242] h-11 text-[#8A33FD] hover:border-[#8A33FD] focus:border-[#8A33FD] focus:ring-0 focus:outline-none shadow-none focus-visible:ring-0 "
                            />
                        </div>
                        <Button className="bg-[#8A33FD] hover:bg-[#8A33FD]  w-1/2 md:w-30  h-12 font-normal">Verify Code</Button>
                    </div>
                </div>
            </div>
    )
}

export default Verification