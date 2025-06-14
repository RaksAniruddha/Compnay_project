import React from 'react'
import { HomeIcons, HomeImages } from '@/assets/HomePageAsset/HomeExport';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@/components/ui/button';
import './Homepage.css'


function Herosection() {
  return (
    <>
      <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 "
            >
              <img src={HomeIcons.Arrow} alt="" />
            </button>
          )}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2"
            >
              <img src={HomeIcons.rightArrow} alt="" />
            </button>
          )
        }
      >
        <div
          className="h-[560px]"
          style={{
            backgroundImage: `url(${HomeImages.CarouselHome})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className='h-[350px] pt-25 flex flex-col items-start gap-12 ml-50'>
            <p className='text-white text-2xl'>T Shirts / Tops</p>
            <div className='flex flex-col items-start gap-5 '>
              <p className='text-6xl text-white font-extrabold'>Summer</p>
              <p className='text-6xl text-white font-extrabold'> Value Pack</p>
              <p className='text-white text-2xl mt-4'>cool / colorful / comfy</p>
            </div>
            <Button className="bg-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#3C4242] text-[#3C4242] w-35 h-10">Shop Now</Button>
          </div>
        </div>
        <div
          className="h-[560px]"
          style={{
            backgroundImage: `url(${HomeImages.CarouselHome})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className='h-[350px] pt-25 flex flex-col items-start gap-12 ml-50'>
            <p className='text-white text-2xl'>T Shirts / Tops</p>
            <div className='flex flex-col items-start gap-5 '>
              <p className='text-6xl text-white font-extrabold'>Summer</p>
              <p className='text-6xl text-white font-extrabold'> Value Pack</p>
              <p className='text-white text-2xl mt-4'>cool / colorful / comfy</p>
            </div>
            <Button className="bg-[#FFFFFF] text-[#3C4242]  hover:bg-[#FFFFFF] hover:text-[#3C4242] w-35 h-10">Shop Now</Button>
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundImage: `url(${HomeImages.CarouselHome})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="h-[560px]"
            style={{
              backgroundImage: `url(${HomeImages.CarouselHome})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className='h-[350px] pt-25 flex flex-col items-start gap-12 ml-50'>
              <p className='text-white text-2xl'>T Shirts / Tops</p>
              <div className='flex flex-col items-start gap-5 '>
                <p className='text-6xl text-white font-extrabold'>Summer</p>
                <p className='text-6xl text-white font-extrabold'> Value Pack</p>
                <p className='text-white text-2xl mt-4'>cool / colorful / comfy</p>
              </div>
              <Button className="bg-[#FFFFFF] text-[#3C4242]  hover:bg-[#FFFFFF] hover:text-[#3C4242] w-35 h-10">Shop Now</Button>
            </div>
          </div>
        </div>
      </Carousel>
      <div className='w-full h-fit my-16'>
        <div className='flex justify-center gap-10 items-center h-fit'>
          <div
            className="rounded-2xl h-[330px] w-[530px] shadow-xl flex flex-col justify-center "
            style={{
              backgroundImage: `url(${HomeImages.Card1})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className='space-y-7 mx-10'>
              <p className='text-white font-bold text-lg'>Low Price</p>
              <div className='space-y-3'>
                <p className='text-white font-bold text-3xl'>High Coziness</p>
                <p className='text-white text-sm '>UPTO 50% OFF</p>
              </div>
              <p className='text-white font-bold text-lg underline decoration-1 underline-offset-4'>Explore Items</p>
            </div>
          </div>

          <div
            className="rounded-2xl h-[330px] w-[530px] shadow-xl flex flex-col justify-center "
            style={{
              backgroundImage: `url(${HomeImages.Card2})`, backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className='space-y-7 mx-10'>
              <p className='text-white font-bold text-lg'>Beyoung Presents</p>
              <div className='space-y-3'>
                <div className='space-y-1.5'>
                  <p className='text-white font-bold text-3xl'>Breezy Summer</p>
                  <p className='text-white font-bold text-3xl'>Style</p>
                </div>
                <p className='text-white text-sm mt-4'>UPTO 50% OFF</p>
              </div>
              <p className='text-white font-bold text-lg underline decoration-1 underline-offset-4'>Explore Items</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection