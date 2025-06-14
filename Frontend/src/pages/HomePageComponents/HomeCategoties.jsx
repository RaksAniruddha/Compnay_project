import { HomeImages } from '@/assets/HomePageAsset/HomeExport'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function HomeCategoties() {
    return (
        <div className='w-fit'>
            <div className='ml-10 flex flex-col gap-2'>
                {/* New Arival Section Start */}
                <div className="flex gap-3 mx-22">
                    <p className='font-bold text-xl text-[#8A33FD] rounded-xs'>|</p>
                    <p className='font-bold text-2xl'>New Arrival</p>
                </div>
                <div className='w-fit'>
                    <Carousel  infiniteLoop showThumbs={false} showStatus={false}
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
        </div>
    )
}

export default HomeCategoties