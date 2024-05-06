'use client'

import React, { useRef, useState } from 'react'
import { useScroll } from '@react-hooks-library/core'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BRAINSTORMING, EXHIBITION, SELECT } from '@/app/menu'
import { Navigation } from '@/components/Navigation'
import usePickRandomArt from '@/app/artlist'
import FooterContent from '@/app/footer'

export default function DesktopV3() {
  const box = useRef<HTMLDivElement | null>(null)
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  const [artUrl, changeArt] = usePickRandomArt()

  useScroll(box, ({ scrollX, scrollY }) =>
    setScroll({ x: scrollX, y: scrollY }),
  )

  console.log(`DesktopV3 : ${artUrl}`)

  const router = useRouter()

  return (
    <div className={'flex flex-col'}>
      <Navigation />
      <div className={'flex flex-row h-[80vh]'}>
        <div
          style={{
            width: `100%`,
            backgroundPosition: '50% 57%',
          }}
          className={`relative bg-[url('/main_bg2.JPEG')] bg-cover bg h-full p-3`}
        >
          <div
            className={'flex flex-col justify-start items-center'}
            style={{
              width: `100%`,

              // height: `${80 + (scrollPositions.scrollY / 100) * 10}%`,
              // maxHeight: '90%',
            }}
            // style={{ width: `${70 + (scrollPositions.scrollY / 100) * 30}%` }}
          >
            <img
              src={artUrl}
              key={artUrl}
              style={{
                width: '50vw',
                minWidth: '800px',
                // height: '35vh',
                // height: `${35 + (scrollPositions.scrollY / 100) * 15}%`,
                // maxHeight: '80vh',
                // maxWidth: '60%',
                // width: `${45 + (scrollPositions.scrollY / 100) * 15}%`,
                borderImageSource: 'url("/photoframe.webp")',
                borderImageWidth: '10px',
                borderWidth: '10px',
                borderImageRepeat: 'repeat',
                borderImageSlice: '4% 4% 4% 4%',
                cursor: 'pointer',
                marginBottom: '32px',
                position: 'relative',
                top: '6vh',
                boxShadow:
                  '0 1px 1px rgba(0,0,0,0.12), \n' +
                  '              0 2px 2px rgba(0,0,0,0.12), \n' +
                  '              0 4px 4px rgba(0,0,0,0.12), \n' +
                  '              0 8px 8px rgba(0,0,0,0.12),\n' +
                  '              0 16px 16px rgba(0,0,0,0.12)',
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
                'flex flex-row justify-center items-end w-full absolute bottom-[0px] z-10 '
              }
            >
              <img
                src={'/standing/standing006.png'}
                className={
                  'object-cover h-[50vw] max-h-[550px] mr-[8vw] cursor-pointer hover:drop-shadow-lg hover:brightness-50 animate-blink'
                }
                onClick={() => {
                  window.open(
                    'https://showroom.no-excuse.shop/product/22a851fc-66f7-462c-981a-db82f55224c1',
                  )
                }}
              />
              <img
                src={'/standing/standing007.png'}
                className={
                  'object-cover h-[50vw] max-h-[550px] mr-[12vw] cursor-pointer hover:drop-shadow-lg hover:brightness-50  animate-blink'
                }
                onClick={() => {
                  window.open(
                    'https://showroom.no-excuse.shop/product/145d43cd-b4a2-4e17-aa10-cd3eb0fc3815',
                  )
                }}
              />

              <img
                src={'/standing/standing001.png'}
                className={
                  'object-cover h-[50vw] max-h-[550px] mr-[12vw] cursor-pointer hover:drop-shadow-lg hover:brightness-50  animate-blink'
                }
                onClick={() => {
                  window.open(
                    'https://showroom.no-excuse.shop/product/4dc425a9-cb7e-4e47-982a-d0183bf82e6e',
                  )
                }}
              />
              <img
                src={'/standing/standing004.png'}
                className={
                  'object-cover h-[50vw] max-h-[550px] cursor-pointer hover:drop-shadow-lg hover:brightness-50 animate-blink'
                }
                onClick={() => {
                  window.open(
                    'https://showroom.no-excuse.shop/product/492e79f9-f8f3-44eb-9daf-c3ebef9b3354',
                  )
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*<div className={'bg-black min-h-[200vh]'}>*/}
      {/*  /!*  DO NOTHING, just for spacing *!/*/}
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
      <div className={'min-h-screen flex flex-row'}>
        <div
          className={`w-1/3 bg-cover bg bg-center p-10 text-white flex flex-col justify-center items-center overflow-hidden break-all cursor-not-allowed`}
          style={{
            backgroundImage: `linear-gradient(to top,rgb(0 0 0 / 90%), rgb(34 34 34 / 56%)), url('${EXHIBITION.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[24px] font-medium border-b-3 border-solid border-white px-2 py-1'
            }
          >
            {EXHIBITION.title.toUpperCase()}
            <div className={'flex justify-center'}>
              <div
                className={
                  'rounded-md border-1 border-solid border-white py-2 px-4 text-[12px] absolute top-[80px] z-10'
                }
              >
                COMING SOON
              </div>
            </div>
          </div>
          {/*<Space y={8} />*/}
          {/*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*/}
        </div>
        <Link
          href={SELECT.link}
          className={`w-1/3 bg-cover bg bg-center p-10 text-white  flex flex-col justify-center items-center overflow-hidden break-all`}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${SELECT.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[24px] font-medium border-b-3 border-solid border-white px-2 py-1'
            }
          >
            {SELECT.title.toUpperCase()}
          </div>
          {/*<Space y={8} />*/}
          {/*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*/}
        </Link>
        <Link
          href={BRAINSTORMING.link}
          className={`w-1/3 bg-cover bg bg-center p-10 text-white  flex flex-col justify-center items-center overflow-hidden break-all`}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${BRAINSTORMING.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[24px] font-medium border-b-3 border-solid border-white px-2 py-1'
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
          <div>0507-1352-6385</div>
          <div>평일 10:00 ~ 18:00 | 주말 및 공휴일 휴무</div>
        </div>
        <div className={'text-xs text-gray-500 text-center'}>
          {FooterContent}
        </div>
      </div>
    </div>
  )
}
