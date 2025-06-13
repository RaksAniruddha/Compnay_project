import React from 'react'
import { AuthImages } from '@/assets/Authasset/authAsset'
import { Icons } from '@/assets/Authasset/authAsset'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
function SignupPage() {
    return (
        <div className='flex flex-col md:flex-row  gap-0 md:gap-3 lg:gap-20'>
            <div className='hidden md:block'>
                <img src={AuthImages.Signup} className='h-[700px] lg:w-[580px] xl:w-[640px] ' alt="" />
            </div>
            <div className='mx-5 lg:mx-10 xl:mx-30 mt-10'>
                <div className='space-y-4'>
                    <div className='mb-10 space-y-4'>
                        <p className='text-xl text-center md:text-start md:text-4xl font-bold'>Sign Up</p>
                        <p className='text-sm text-[#3C4242]'>Sign up for free to access to in any of our products </p>
                    </div>
                    <div className='flex justify-center items-center gap-4 border-2 h-10 w-full md:w-[350px] py-5 rounded-xl'>
                        <img src={Icons.GoogleIcon} alt="" />
                        <p className='text-[#8A33FD]'>Continue With Google</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 border-2 h-10 w-full md:w-[350px] py-5 rounded-xl'>
                        <img src={Icons.TwitterIcon} alt="" />
                        <p className='text-[#8A33FD]'>Continue With Twitter</p>
                    </div>
                    <div className='space-y-3'>
                        <Label className="text-[#3C4242] font-normal ">User name or email address</Label>
                        <Input
                            className="border-[#3C4242] h-11"
                        />
                    </div>
                    <div className='space-y-3'>
                        <Label className="text-[#3C4242] font-normal "><p>Password</p> <div className='ml-auto flex gap-2 '><img src={Icons.HideView} alt="" /><p>Hide</p></div></Label>
                        <Input
                            className="border-[#3C4242] h-11"
                        />
                        <p className='text-sm text-[#3C4242]'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className='flex gap-3 '>
                            <Checkbox id="terms-2" className="border-gray-300" defaultChecked />
                            <Label htmlFor="terms-2" className="text-sm text-[#3C4242]">Agree to our Terms of use and Privacy Policy </Label>
                        </div>
                        <div className='flex gap-3 '>
                            <Checkbox id="terms-2" className="border-gray-300" defaultChecked />
                            <Label htmlFor="terms-2" className="text-sm text-[#3C4242]">Agree to our Terms of use and Privacy Policy </Label>
                        </div>
                    </div>
                    <Button className="bg-[#8A33FD] w-1/2 md:w-30  h-12 font-normal">Sign Up</Button>
                    <div>
                        <p className='text-[#3C4242]'>Already have an  account?<Link className='mx-2 underline'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage