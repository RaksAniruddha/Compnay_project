import React from 'react'
import { AuthImages } from '@/assets/Authasset/authAsset'
import { Icons } from '@/assets/Authasset/authAsset'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function SignInPage() {
    return (
        <div className='flex flex-col md:flex-row  gap-0 md:gap-3 lg:gap-20'>
            <div className='hidden md:block'>
                <img src={AuthImages.Signin} className='h-[646px] lg:w-[580px] xl:w-[640px] ' alt="" />
            </div>
            <div className='mx-5 lg:mx-10 xl:mx-30 mt-10'>
                <div className='space-y-4'>
                    <p className='text-xl text-center md:text-start md:text-4xl font-bold mb-10'>Sign In Page</p>
                    <div className='flex justify-center items-center gap-4 border-2 h-10 w-full md:w-[350px] py-5 rounded-xl'>
                        <img src={Icons.GoogleIcon} alt="" />
                        <p className='text-[#8A33FD]'>Continue With Google</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 border-2 h-10 w-full md:w-[350px] py-5 rounded-xl'>
                        <img src={Icons.TwitterIcon} alt="" />
                        <p className='text-[#8A33FD]'>Continue With Twitter</p>
                    </div>
                    <div className="flex items-center gap-4 my-8">
                        <Separator className="h-[2px] flex-1" />
                        <p className="text-sm text-muted-foreground">Or</p>
                        <Separator className="h-[2px] flex-1" />
                    </div>
                    <div className='space-y-3'>
                        <Label className="text-[#3C4242] font-normal ">User name or email address</Label>
                        <Input
                            type="email"
                            className="border-[#3C4242] h-11"
                        />
                    </div>
                    <div className='space-y-3'>
                        <Label className="text-[#3C4242] font-normal "><p>Password</p> <div className='ml-auto flex gap-2 '><img src={Icons.HideView} alt="" /><p>Hide</p></div></Label>
                        <Input
                            type="password"
                            className="border-[#3C4242] h-11"
                        />
                        <Link className="text-sm underline text-[#3C4242] ml-0 sm:ml-0 md:ml-52">
                            Forgot your password?
                        </Link>
                    </div>
                    <Button className="bg-[#8A33FD] w-1/2 md:w-30  h-12 font-normal">Sign In</Button>
                    <div>
                        <p className='text-[#3C4242]'>Don’t have an account?<Link className='mx-2 underline'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage