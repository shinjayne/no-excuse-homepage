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
      <div className={'flex flex-col h-[70vh]'}>
        <div
          className={'w-full h-full bg-cover'}
          style={{
            backgroundImage: `url('/daemun/bikerpants.png')`,
            backgroundPosition: '50% 80%',
          }}
        ></div>
        <div
          className={'w-full h-full bg-cover'}
          style={{
            backgroundImage: `url('/daemun/leopard.png')`,
            backgroundPosition: '50% 70%',
          }}
        ></div>
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
        <div
          // href={EXHIBITION.link}
          className={`min-h-[180vw] bg-cover bg bg-center p-10 text-white flex flex-col justify-center items-center overflow-hidden break-all cursor-not-allowed`}
          style={{
            backgroundImage: `linear-gradient(to top,rgb(0 0 0 / 90%), rgb(34 34 34 / 56%)), url('${EXHIBITION.imageUrl}')`,
          }}
        >
          <div
            className={
              'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1 relative'
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
