import React from 'react'
import { AuthImages } from '@/assets/Authasset/authAsset'
import { Icons } from '@/assets/Authasset/authAsset'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function Createnewpassword() {
    return (
        <div className='flex flex-col md:flex-row  gap-0 md:gap-3 lg:gap-20'>
            <div className='hidden md:block'>
                <img src={AuthImages.Createnewpassword} className='h-[700px] lg:w-[580px] xl:w-[700px] ' alt="" />
            </div>
            <div className='mx-5 lg:mx-10 xl:mx-30 mt-10'>
                <div className='space-y-4'>
                    <div className='mb-10 space-y-4'>
                        <p className='text-xl text-start md:text-start md:text-4xl font-bold'>Create New Password</p>
                        <p className='text-sm text-[#3C4242]'>Your new password must be different from previous used passwords.</p>
                    </div>
                    <div className='space-y-5 relative'>
                        <div className='space-y-5 mb-5'>
                            <Label className="text-[#3C4242] font-normal">Password</Label>
                            <div className='space-y-2'>
                                <Input
                                    type="password"
                                    className="md:w-[350px] border border-[#3C4242] h-11 text-[#8A33FD] hover:border-[#8A33FD] focus:border-[#8A33FD] focus:ring-0 focus:outline-none shadow-none focus-visible:ring-0 "
                                />
                                <p className='text-sm text-[#3C4242]'>Must be at least 8 characters.</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <Label className="text-[#3C4242] font-normal">Confirm Password</Label>
                            <Input
                                type="password"
                                className="md:w-[350px] border border-[#3C4242] h-11 text-[#8A33FD] hover:border-[#8A33FD] focus:border-[#8A33FD] focus:ring-0 focus:outline-none shadow-none focus-visible:ring-0 "
                            />
                            <img src={Icons.HideView} className='absolute left-80 bottom-3' alt="" />
                        </div>
                    </div>
                    <p className='text-sm text-[#FF0000]'>New password and comfirm new password do not match</p>
                    <Button className="bg-[#8A33FD] hover:bg-[#8A33FD]  w-1/2 md:w-30  h-12 font-normal">Reset Password</Button>
                </div>
            </div>
        </div>
    )
}

export default Createnewpassword