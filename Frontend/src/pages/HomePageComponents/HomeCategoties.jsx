import { HomeIcons, HomeImages } from '@/assets/HomePageAsset/HomeExport'
import Categories from '@/components/Categories'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

function HomeCategoties() {
    const [categorie,setNewcategorie]=useState("Women");
    
    const dataMen=[
        {
            imageUrl:HomeImages.FirstHome,
            Title:"Shirts"
        }
    ]
    return (
        <div className='w-fit space-y-5'>
            <div className='ml-10 flex flex-col gap-2'>
                {/* New Arival Section Start */}
                <div className="flex gap-3 mx-22">
                    <p className='font-bold text-xl text-[#8A33FD] rounded-xs'>|</p>
                    <p className='font-bold text-2xl'>New Arrival</p>
                </div>
                <div className='w-fit'>
                    <Carousel infiniteLoop showThumbs={false} showStatus={false}
                        showIndicators={false}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute left-25  top-1/2 transform -translate-y-1/2 z-10 p-2 "
                                >
                                    <span className='text-2xl text-[#3C4242]'>{"<-"}</span>
                                </button>
                            )}
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute right-25 top-1/2 transform -translate-y-1/2 z-10 p-2"
                                >
                                    <span className='text-2xl text-[#3C4242]'>{"->"}</span>
                                </button>
                            )
                        }
                    >
                        <div className='flex items-start justify-center gap-7 my-20'>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard1} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Knitted Joggers</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard2} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Full Sleeve</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard3} className='object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Active T-Shirts</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard4} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Urban Shirts</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center gap-7 my-20'>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard1} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Knitted Joggers</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard2} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Full Sleeve</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard3} className='object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Active T-Shirts</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard4} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Urban Shirts</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center gap-7 my-20'>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard1} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Knitted Joggers</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard2} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Full Sleeve</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard3} className='object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Active T-Shirts</p>
                            </div>
                            <div className='space-y-4'>
                                <img src={HomeImages.NewArivalCard4} className=' object-cover' alt="" />
                                <p className='text-sm text-start text-[#3C4242] font-bold'>Urban Shirts</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                {/* New Arival section End */}
            </div>
            <div className='ml-10 items-start flex flex-col gap-10 my-10'>
                {/* Big Saving Zone Start */}
                <div className="flex gap-3 mx-22">
                    <p className='font-bold text-xl text-[#8A33FD] rounded-xs'>|</p>
                    <p className='font-bold text-2xl'>Big Saving Zone</p>
                </div>
                <div className='flex justify-center items-center gap-8 ml-26'>
                    <div className='h-[350px] w-[350px] object-cover object-center'
                        style={{
                            backgroundImage: `url(${HomeImages.BigArivalcard1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className='flex flex-1/2 flex-col mx-6 mt-10'>
                            <p className='text-3xl text-[#FFFFFF] font-semibold'>Hawaiian</p>
                            <p className='text-3xl text-[#FFFFFF] font-semibold'>Shirts</p>
                        </div>
                        <div className='flex flex-1/2 flex-col gap-2 mx-6 mt-4'>
                            <p className='text-[#FFFFFF] text-sm'>Dress up in summer vibe</p>
                            <p className='text-xl text-[#FFFFFF]'>UPTO 50% OFF</p>
                            <div className='flex flex-col gap-12 justify-center items-center w-1/3 mt-5'>
                                <img src={HomeIcons.DownArrow} className="h-6 w-6" alt="" />
                                <Button variant="outline" className="bg-transparent w-30 h-10 text-[#FFFFFF] text-sm hover:text-[#FFFFFF] hover:bg-transparent">SHOP NOW</Button>
                            </div>
                        </div>
                    </div>
                    <div className='h-[350px] w-[350px] object-cover object-center'
                        style={{
                            backgroundImage: `url(${HomeImages.BigArivalcard2})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className='flex flex-1/2 flex-col ml-55 mt-7 space-y-5'>
                            <div>
                                <Button>Limited Stock</Button>
                            </div>
                            <div>
                                <p className='text-3xl text-[#FFFFFF] font-semibold'>Printed</p>
                                <p className='text-3xl text-[#FFFFFF] font-semibold mx-2'>T-Shirt</p>
                            </div>
                        </div>
                        <div className='text-[#FFFFFF] ml-45 mt-5'>
                            <p className='text-sm'>New Designs Every Week</p>
                            <p className='text-center font-bold mt-3 text-xl'>UPTO 40% OFF</p>
                            <div className='flex flex-col  gap-5 justify-center items-center mt-1'>
                                <img src={HomeIcons.DownArrow} alt="" />
                                <Button variant="outline" className="bg-transparent w-30 h-10 text-[#FFFFFF] text-sm hover:text-[#FFFFFF] hover:bg-transparent">SHOP NOW</Button>
                            </div>
                        </div>
                    </div>
                    <div className='h-[350px] w-[350px] object-cover object-center'
                        style={{
                            backgroundImage: `url(${HomeImages.BigArivalcard3})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className='flex flex-1/2 flex-col ml-55 mt-15 space-y-5'>
                            {/* <div>
                                <Button>Limited Stock</Button>
                            </div> */}
                            <div>
                                <p className='text-3xl text-[#3C4242] font-semibold'>Cargo</p>
                                <p className='text-3xl text-[#3C4242] font-semibold'>Joggers</p>
                            </div>
                        </div>
                        <div className='text-[#3C4242] ml-45 mt-5'>
                            <p className='text-sm'>New Designs Every Week</p>
                            <p className='text-center font-bold mt-3 text-xl'>UPTO 40% OFF</p>
                            <div className='flex flex-col  gap-5 justify-center items-center mt-5'>
                                <img src={HomeIcons.DownArrowBlack} alt="" />
                                <Button variant="outline" className="bg-transparent w-30 h-10 text-[#3C4242] text-sm hover:text-[#3C4242] hover:bg-transparent hover:border-[#3C4242] border-[#3C4242]">SHOP NOW</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8 ml-26'>
                    <div className='w-[550px] h-[400px]  rounded-xl' style={{
                        backgroundImage: `url(${HomeImages.BigArivalCard4})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                        <div className='flex flex-col justify-center items-center mt-15 ml-35 gap-5'>
                            <div className='space-y-2 '>
                                <p className='text-3xl font-bold text-[#3C4242]'>Urban</p>
                                <p className='text-3xl font-bold text-[#3C4242]'>Shirts</p>
                            </div>
                            <div className=' space-y-2 ml-5'>
                                <p className='text-sm text-[#3C4242]'>Live In Confort</p>
                                <p className='font-semibold text-l text-[#3C4242]'>FLAT 60% OFF</p>
                            </div>
                            <div className='mt-1 ml-5 flex flex-col justify-center items-center gap-5'>
                                <img src={HomeIcons.DownArrowBlack} className='w-6 h-6' alt="" />
                                <Button variant="outline" className="bg-transparent w-30 h-10 text-[#3C4242] text-sm hover:text-[#3C4242] hover:bg-transparent hover:border-[#3C4242] border-[#3C4242] ">SHOP NOW</Button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[550px] h-[400px] rounded-xl' style={{
                        backgroundImage: `url(${HomeImages.BigArivalCard5})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                        <div className='flex flex-col justify-center items-center mt-15 ml-35 gap-5'>
                            <div className='space-y-2 ml-10  '>
                                <p className='text-3xl font-bold text-[#3C4242]'>Oversized</p>
                                <p className='text-3xl font-bold text-[#3C4242]'>T-Shirts</p>
                            </div>
                            <div className=' space-y-2 ml-5'>
                                <p className='text-sm text-[#3C4242]'>Live In Confort</p>
                                <p className='font-semibold text-l text-[#3C4242]'>FLAT 60% OFF</p>
                            </div>
                            <div className='mt-1 ml-8 flex flex-col justify-center items-center gap-5'>
                                <img src={HomeIcons.DownArrowBlack} className='w-6 h-6' alt="" />
                                <Button variant="outline" className="bg-transparent w-30 h-10 text-[#3C4242] text-sm hover:text-[#3C4242] hover:bg-transparent hover:border-[#3C4242] border-[#3C4242] ">SHOP NOW</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  w-full justify-items-start items-start'>
                    <div className='h-[450px] w-[450px] rounded-l-xl ml-26'
                        style={{
                            backgroundImage: `url(${HomeImages.BigArivalCard6})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className='flex flex-col justify-center items-center gap-3 h-full'>
                            <div className='flex flex-col justify-center gap-2'>
                                <p className='text-[#FFFFFF] text-2xl font-bold'>WE MADE YOUR EVERYDAY</p>
                                <p className='text-[#FFFFFF] text-2xl font-bold'>FASHION BETTER!</p>
                            </div>
                            <div className='mt-4'>
                                <p className='text-[#FFFFFF]'>In our journey to improve everyday fashion, </p>
                                <p className='text-[#FFFFFF]'>euphoria presents EVERYDAY wear range -</p>
                                <p className='text-[#FFFFFF]'>Comfortable & Affordable fashion 24/7</p>
                            </div>
                            <div className=' flex  justify-start ml-35 w-full mt-5'>
                                <Button className="bg-[#FFFFFF] text-[#3C4242] hover:bg-[#FFFFFF] hover:text-[#3C4242] w-35">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={HomeImages.BigArivalCard7} className='h-[450px] w-[450px]'
                            alt="" />
                    </div>
                </div>
            </div>
            <div className='ml-10 items-start flex flex-col gap-10 my-10'>
                <Select onValueChange={(value)=>{setNewcategorie(value)}}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select</SelectLabel>
                            <SelectItem value="Men">Men</SelectItem>
                            <SelectItem value="Women">women</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Categories Categorie={categorie} />
            </div>
        </div>
    )
}

export default HomeCategoties