'use client'

import React, { useRef, useState } from 'react'
import { useScroll, useWindowSize } from '@react-hooks-library/core'
import { useWindowScrollPositions } from '@/lib/useWindowScrollPositions'
import { GreenButton, WhiteButton } from '@/components/Button'
import Space from '@/components/Space'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BRAINSTORMING, EXHIBITION, SELECT } from '@/app/menu'

export default function Desktop() {
  const box = useRef<HTMLDivElement | null>(null)
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  const scrollPositions = useWindowScrollPositions()
  const windowSize = useWindowSize()

  useScroll(box, ({ scrollX, scrollY }) =>
    setScroll({ x: scrollX, y: scrollY }),
  )

  const router = useRouter()

  return (
    <div className={'flex flex-col h-[300vh]'}>
      <div
        className={'sticky top-0 z-10 flex flex-row h-[100vh] min-h-[100vh]'}
      >
        <div
          className={`bg-white h-full flex flex-col items-end justify-between text-black`}
          style={{
            width: `${20 - Math.min(100, scrollPositions.scrollY / windowSize.height) * 20}%`,
            minWidth: 0,
          }}
        >
          <div className={'flex flex-col items-end'}>
            <div className={'flex flex-col items-end gap-6 mr-6 mt-14'}>
              <div className={'cursor-pointer hover:text-gray-300'}>
                Exhibition
              </div>
              <div className={'cursor-pointer hover:text-gray-300'}>Select</div>
              <div className={'cursor-pointer hover:text-gray-300'}>
                Brainstorming
              </div>
              <div className={'cursor-pointer hover:text-gray-300'}>FAQ</div>
            </div>
            <div
              className={
                'w-7 border-t-[1px] border-solid border-[#999999] mr-6 mt-8 mb-4'
              }
            ></div>
            <div className={'flex flex-row mr-6 ml-6 gap-1.5'}>
              <img src={'/person.png'} className={'size-6 cursor-pointer'} />
              <img src={'/cart.png'} className={'size-6 cursor-pointer'} />
            </div>
          </div>
          <div className={'flex flex-col items-end mr-6 ml-5'}>
            <img src={'/logo33.png'} className={'max-h-10 mb-3 w-fit'} />
            <div
              className={
                'font-extralight text-[16px] text-right mb-5 min-w-fit max-w-full'
              }
            >
              NO EXCUSE, NO SURRENDER. In every moment, choose to stand out;
              refuse to blend in. Our threads are for those who speak boldly—No
              Thanks, EXCUSE not needed.
            </div>
            <div className={'flex flex-row mb-14 hidden'}>
              <WhiteButton>ABOUT US</WhiteButton>
              <Space x={16} />
              <GreenButton>SHOP NOW</GreenButton>
            </div>
          </div>
        </div>
        <div
          style={{
            width: `${80 + (scrollPositions.scrollY / 100) * 20}%`,
          }}
          className={`relative bg-[url('/wall.jpg')] bg-cover bg bg-center h-full p-3`}
        >
          <div
            style={{
              opacity: `${Math.min((scrollPositions.scrollY / windowSize.height) * 100, 100)}%`,
            }}
            className={`absolute z-10 top-0 left-0 flex flex-col items-end justify-end w-[30vw] h-full pb-32 px-12 bg-gradient-to-r from-[#000000a1] to-[rgba(34, 34, 34, 0)] text-white`}
          >
            <div className={'font-normal text-[36px] text-right'}>
              WASHED RELAXED HOOD ZIP UP
            </div>
            <Space y={12} />
            <div className={'font-extralight text-[18px] text-right'}>
              NO,EXCUSE SELECT 24S/S
            </div>
            <Space y={20} />
            <Link href={'/product/1'}>
              <GreenButton>Go to Detail</GreenButton>
            </Link>
          </div>
          <div
            className={
              'absolute top-0 right-0 flex flex-row justify-center items-center'
            }
            style={{
              width: '100%',
              maxWidth: '75vw',
              // width: `${60 + (scrollPositions.scrollY / 100) * 15}vw`,
              height: `${80 + (scrollPositions.scrollY / 100) * 20}%`,
              // maxWidth: '75vw',
              maxHeight: '100%',
            }}
            // style={{ width: `${70 + (scrollPositions.scrollY / 100) * 30}%` }}
          >
            <img
              src={'/post/post2.JPEG'}
              style={{
                // width: `${35 + (scrollPositions.scrollY / 100) * 15}%`,
                // maxWidth: '50%',
                height: `${35 + (scrollPositions.scrollY / 100) * 15}%`,
                maxHeight: '80vh',
                borderImageSource: 'url("/photoframe.webp")',
                borderImageWidth: '10px',
                borderWidth: '10px',
                borderImageRepeat: 'repeat',
                borderImageSlice: '4% 4% 4% 4%',
                cursor: 'pointer',
              }}
              onClick={() => {
                router.push('/product/1')
              }}
              // src={'frame_1.png'}
              // className={`w-[]`}
              // className={'absolute top-0 right-0'}
              // style={{ width: `${(scrollPositions.scrollY / 100) * 90}%` }}
            />
          </div>
        </div>
      </div>
      <div className={'bg-black min-h-[200vh]'}>
        {/*  DO NOTHING, just for spacing */}
      </div>
      <div className={'sticky top-0 z-10 min-h-screen flex flex-row'}>
        <Link
          href={EXHIBITION.link}
          className={`w-1/2 bg-cover bg bg-center p-10 text-white flex flex-col justify-end items-end overflow-hidden break-all`}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${EXHIBITION.imageUrl}')`,
          }}
        >
          <div className={'text-[30px] font-normal'}>{EXHIBITION.title}</div>
          <Space y={8} />
          <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
        </Link>
        <div className={'w-1/2 flex flex-col '}>
          <Link
            href={SELECT.link}
            className={`h-1/2 bg-cover bg bg-center p-10 text-white  flex flex-col justify-end items-start overflow-hidden break-all`}
            style={{
              backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${SELECT.imageUrl}')`,
            }}
          >
            <div className={'text-[30px] font-normal'}>{SELECT.title}</div>
            <Space y={8} />
            <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
          </Link>
          <Link
            href={BRAINSTORMING.link}
            className={`h-1/2 bg-cover bg bg-center p-10 text-white  flex flex-col justify-end items-start overflow-hidden break-all`}
            style={{
              backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${BRAINSTORMING.imageUrl}')`,
            }}
          >
            <div className={'text-[30px] font-normal'}>
              {BRAINSTORMING.title}
            </div>
            <Space y={8} />
            <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
          </Link>
        </div>
      </div>
      <div
        className={
          'w-full flex flex-col items-end gap-2 h-[320px] bg-white p-10 text-gray-600'
        }
      >
        <div>NO, EXCUSE</div>
        <div>Contact : 01051336385</div>
        <div> Email : shinjayne@gmail.com</div>
      </div>
    </div>
  )
}
