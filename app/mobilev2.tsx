'use client'

import React, { useRef, useState } from 'react'
import { useScroll } from '@react-hooks-library/core'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BRAINSTORMING, EXHIBITION, SELECT } from '@/app/menu'
import { Navigation } from '@/components/Navigation'
import usePickRandomArt from '@/app/artlist'
import FooterContent from '@/app/footer'

export default function MobileV2() {
  const box = useRef<HTMLDivElement | null>(null)
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  const [artUrl, changeArt] = usePickRandomArt()

  useScroll(box, ({ scrollX, scrollY }) =>
    setScroll({ x: scrollX, y: scrollY }),
  )

  const router = useRouter()

  return (
    <div className={'flex flex-col'}>
      <Navigation />
      <div className={'flex flex-row h-[80vh]'}>
        <div
          style={{
            width: `100%`,
          }}
          className={`relative bg-[url('/main_bg2.JPEG')] bg-cover bg bg-center h-full p-3`}
        >
          <div
            className={'flex flex-col justify-center items-center pt-32'}
            style={{
              width: `100%`,

              // height: `${80 + (scrollPositions.scrollY / 100) * 10}%`,
              // maxHeight: '90%',
            }}
            // style={{ width: `${70 + (scrollPositions.scrollY / 100) * 30}%` }}
          >
            <img
              src={artUrl}
              style={{
                // height: '35vh',
                // height: `${35 + (scrollPositions.scrollY / 100) * 15}%`,
                // maxHeight: '80vh',
                maxWidth: '90%',
                // width: `${45 + (scrollPositions.scrollY / 100) * 15}%`,
                borderImageSource: 'url("/photoframe.webp")',
                borderImageWidth: '10px',
                borderWidth: '10px',
                borderImageRepeat: 'repeat',
                borderImageSlice: '4% 4% 4% 4%',
                cursor: 'pointer',
                marginBottom: '32px',
                position: 'absolute',
                top: '20vh',
              }}
              onClick={() => {
                changeArt()
              }}
              // src={'frame_1.png'}
              // className={`w-[]`}
              // className={'absolute top-0 right-0'}
              // style={{ width: `${(scrollPositions.scrollY / 100) * 90}%` }}
            />
            <div
              className={
                'flex flex-row justify-center items-center w-full absolute bottom-[10vh] z-10'
              }
            >
              <img
                src={'/p/p2-removebg-preview.png'}
                className={'object-cover h-[58vw] mr-[4vw]'}
              />
              <img
                src={'/p/p1-removebg-preview.png'}
                className={'object-cover h-[58vw] mr-[20vw]'}
              />
              <img
                src={'/p/p3-removebg-preview.png'}
                className={'object-cover h-[58vw]'}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  /!*  DO NOTHING, just for spacing *!/*/}
      {/*<div className={'bg-black min-h-[200vh]'}>*/}
      {/*</div>*/}
      <div
        className={
          'flex flex-col justify-center items-center py-2 font-light text-medium  text-start bg-black text-white overflow-hidden'
        }
      >
        <div className={'animate-slide w-[2400px] font-light text-sm'}>
          NO EXCUSE, NO SURRENDER. In every moment, choose to stand out; refuse
          to blend in. Our threads are for those who speak boldly—No Thanks,
          EXCUSE not needed. NO EXCUSE, NO SURRENDER. In every moment, choose to
          stand out; refuse to blend in. Our threads are for those who speak
          boldly—No Thanks, EXCUSE not needed.
        </div>
      </div>
      <div className={'flex flex-col'}>
        <Link
          href={EXHIBITION.link}
          className={`min-h-[180vw] bg-cover bg bg-center p-10 text-white flex flex-col justify-center items-center overflow-hidden break-all`}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${EXHIBITION.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1'
            }
          >
            {EXHIBITION.title.toUpperCase()}
          </div>
          {/*<Space y={8} />*/}
          {/*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*/}
        </Link>

        <Link
          href={SELECT.link}
          className={`min-h-[180vw] bg-cover bg bg-center p-10 text-white  flex flex-col justify-center items-center overflow-hidden break-all`}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${SELECT.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1'
            }
          >
            {SELECT.title.toUpperCase()}
          </div>
          {/*<Space y={8} />*/}
          {/*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*/}
        </Link>
        <Link
          href={BRAINSTORMING.link}
          className={`min-h-[180vw] bg-cover bg bg-center p-10 text-white  flex flex-col justify-center items-center overflow-hidden break-all`}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${BRAINSTORMING.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1'
            }
          >
            {BRAINSTORMING.title.toUpperCase()}
          </div>
          {/*<Space y={8} />*/}
          {/*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*/}
        </Link>
      </div>
      <div
        className={
          'w-full flex flex-col items-center gap-2 bg-white pt-20  pb-10 px-10'
        }
      >
        <div className={'text-xs font-medium flex flex-col items-center mb-5'}>
          <div>CUSTOMER SERVICE</div>
          <div>no-excuse-shop@naver.com</div>
          <div>010-5133-6385</div>
          <div>평일 10:00 ~ 18:00 | 주말 및 공휴일 휴무</div>
        </div>
        <div className={'text-xs text-gray-500 text-center'}>
          {FooterContent}
        </div>
      </div>
    </div>
  )
}
