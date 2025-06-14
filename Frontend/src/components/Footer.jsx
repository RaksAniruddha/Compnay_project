import React from 'react'
import { HomeIcons } from '@/assets/HomePageAsset/HomeExport'
// import { Separator } from './ui/separator'

function Footer() {
    return (
        <div className='w-full  bg-[#3C4242] text-sm text-[#F6F6F6]'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='flex gap-30 mt-10 mb-4'>
                    <div>
                        <h1 className='text-xl font-semibold'>Need Help</h1>
                        <div className='mt-7 space-y-3'>
                            <p>Contact Us</p>
                            <p>Track Order</p>
                            <p>Returns & Refunds</p>
                            <p>FAQ's</p>
                            <p>Career</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Company</h1>
                        <div className='mt-7 space-y-3'>
                            <p>About Us</p>
                            <p>euphoria Blog</p>
                            <p>euphoriastan</p>
                            <p>Collaboration</p>
                            <p>Media</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>More Info</h1>
                        <div className='mt-7 space-y-3'>
                            <p>Term and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Shipping Policy</p>
                            <p>Sitemap</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Location</h1>
                        <div className='mt-7 space-y-3'>
                            <p>support@euphoria.in</p>
                            <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
                            <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-baseline-last gap-x-96 '>
                    <div className='flex justify-center items-center gap-3 mr-60'>
                        <img src={HomeIcons.Facebook} className='h-7 w-7' alt="" />
                        <img src={HomeIcons.Instagram} className='h-7 w-7' alt="" />
                        <img src={HomeIcons.Linkedin} className='h-7 w-7' alt="" />
                        <img src={HomeIcons.Twitter} className='h-7 w-7' alt="" />
                    </div>
                    <div className='space-y-4' >
                        <h1 className='text-xl font-semibold'>Download The App</h1>
                        <div className='flex gap-5 '>
                            <img src={HomeIcons.Playstore} className='h-10 w-fit' alt="" />
                            <img src={HomeIcons.Appstore} className='h-10 w-fit' alt="" />

                        </div>
                    </div>
                </div> 
                <div className='w-[1050px]'>
                    <img src={HomeIcons.Line}  alt="" />
                </div>
                <div className='flex justify-between gap-x-96  items-center' >
                    <p className='mr-88'>Popular Categories</p>
                    <img src={HomeIcons.Icon} className='h-2 w-fit ml-40' alt="" />
                </div>
                <div className='w-[1050px]'>
                    <img src={HomeIcons.Line}  alt="" />
                </div>
                <div className=' mb-5'>
                    <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    ) 
}

export default Footer