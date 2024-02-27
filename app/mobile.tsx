import React from 'react'
import { useWindowScrollPositions } from '@/lib/useWindowScrollPositions'
import { useWindowSize } from '@react-hooks-library/core'
import { GreenButton } from '@/components/Button'
import Space from '@/components/Space'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function MobileHome() {
  const scrollPositions = useWindowScrollPositions()
  const windowSize = useWindowSize()

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
          className={`relative bg-[url('/main_bg1.png')] bg-cover bg bg-center h-full p-3`}
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
              src={'/post/photo1.jpeg'}
              style={{
                width: `${45 + (scrollPositions.scrollY / 100) * 15}%`,
                maxWidth: '60%',
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
        <div
          className={`w-1/2 bg-cover bg bg-center p-10 text-white flex flex-col justify-end items-end overflow-hidden break-all`}
          style={{
            backgroundImage:
              "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('/post/theme1.jpeg')",
          }}
        >
          <div className={'text-[30px] font-normal'}>Exhibition</div>
          <Space y={8} />
          <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
        </div>
        <div className={'w-1/2 flex flex-col '}>
          <div
            className={`h-1/2 bg-cover bg bg-center p-10 text-white  flex flex-col justify-end items-start overflow-hidden break-all`}
            style={{
              backgroundImage:
                "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('/post/theme5.jpg')",
            }}
          >
            <div className={'text-[30px] font-normal'}>Select</div>
            <Space y={8} />
            <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
          </div>
          <div
            className={`h-1/2 bg-cover bg bg-center p-10 text-white  flex flex-col justify-end items-start overflow-hidden break-all`}
            style={{
              backgroundImage:
                "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('/post/theme6.jpg')",
            }}
          >
            <div className={'text-[30px] font-normal'}>Brainstorming</div>
            <Space y={8} />
            <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
          </div>
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
