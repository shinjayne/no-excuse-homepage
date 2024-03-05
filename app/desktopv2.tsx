'use client'

import React, { useRef, useState } from 'react'
import { useScroll, useWindowSize } from '@react-hooks-library/core'
import { useWindowScrollPositions } from '@/lib/useWindowScrollPositions'
import { GreenButton } from '@/components/Button'
import Space from '@/components/Space'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BRAINSTORMING, EXHIBITION, SELECT } from '@/app/menu'
import { Navigation } from '@/components/Navigation'

export default function DesktopV2() {
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
      <Navigation />
      <div
        className={'sticky top-0 z-10 flex flex-row h-[100vh] min-h-[100vh]'}
      >
        <div
          style={{
            width: `100%`,
          }}
          className={`relative bg-[url('/wall.jpg')] bg-cover bg bg-center h-full p-3`}
        >
          <div
            className={
              'absolute top-0 right-0 flex flex-row justify-center items-center'
            }
            style={{
              width: `100%`,
              height: `${80 + (scrollPositions.scrollY / 100) * 10}%`,
              maxHeight: '90%',
            }}
            // style={{ width: `${70 + (scrollPositions.scrollY / 100) * 30}%` }}
          >
            <img
              src={'/post/post2.JPEG'}
              style={{
                height: '35vh',
                // height: `${35 + (scrollPositions.scrollY / 100) * 15}%`,
                maxHeight: '80vh',
                // maxWidth: '60%',
                // width: `${45 + (scrollPositions.scrollY / 100) * 15}%`,
                borderImageSource: 'url("/photoframe.webp")',
                borderImageWidth: '10px',
                borderWidth: '10px',
                borderImageRepeat: 'repeat',
                borderImageSlice: '4% 4% 4% 4%',
                cursor: 'pointer',
                position: 'relative',
                bottom: '80px',
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
          <div
            style={{
              opacity: `${Math.min((scrollPositions.scrollY / windowSize.height) * 100, 100)}%`,
            }}
            className={`absolute z-10 bottom-0 left-0 w-[100vw]  flex flex-col items-end justify-end pb-10 px-12 bg-gradient-to-t from-[#000000] to-[rgba(34, 34, 34, 0)] text-white`}
          >
            <div className={'font-normal text-[24px] text-right'}>
              WASHED RELAXED HOOD ZIP UP
            </div>
            <Space y={12} />
            <div className={'font-extralight text-[11px] text-right'}>
              NO,EXCUSE SELECT 24S/S
            </div>
            <Space y={20} />
            <Link href={'/product/1'}>
              <GreenButton>Go to Detail</GreenButton>
            </Link>
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
