'use client'

import { useRef, useState } from 'react'
import { useScroll, useWindowSize } from '@react-hooks-library/core'
import { useWindowScrollPositions } from '@/lib/useWindowScrollPositions'
import { GreenButton, WhiteButton } from '@/components/Button'
import Space from '@/components/Space'

export default function Home() {
  const box = useRef<HTMLDivElement | null>(null)
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  const scrollPositions = useWindowScrollPositions()
  const windowSize = useWindowSize()

  useScroll(box, ({ scrollX, scrollY }) =>
    setScroll({ x: scrollX, y: scrollY }),
  )

  return (
    <div className={'flex flex-col h-[300vh]'}>
      <div
        className={'sticky top-0 z-10 flex flex-row h-[100vh] min-h-[100vh]'}
      >
        <div
          className={`bg-white h-full flex flex-col items-end justify-between text-black`}
          style={{
            width: `${30 - Math.min(100, scrollPositions.scrollY / windowSize.height) * 30}%`,
            minWidth: 0,
          }}
        >
          <div>
            <div className={'flex flex-col items-end gap-6 mr-6 mt-14'}>
              <div className={'cursor-pointer hover:text-gray-300'}>Shop</div>
              <div className={'cursor-pointer hover:text-gray-300'}>About</div>
              <div className={'cursor-pointer hover:text-gray-300'}>Notice</div>
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
          <div className={'flex flex-col items-end mr-6'}>
            <img src={'/logo33.png'} className={'h-10 mb-3 w-fit'} />
            <div
              className={
                'font-extralight text-[16px] text-right mb-5 pl-5 min-w-fit max-w-full'
              }
            >
              NO EXCUSE, NO SURRENDER. In every moment, choose to stand out;
              refuse to blend in. Our threads are for those who speak boldly—No
              Thanks, EXCUSE not needed.
            </div>
            <div className={'flex flex-row mb-14'}>
              <WhiteButton>ABOUT US</WhiteButton>
              <Space x={16} />
              <GreenButton>SHOP NOW</GreenButton>
            </div>
          </div>
        </div>
        <div
          style={{
            width: `${70 + (scrollPositions.scrollY / 100) * 30}%`,
          }}
          className={`relative bg-[url('/main_bg1.png')] bg-cover bg bg-center h-full p-3`}
        >
          <div
            style={{
              opacity: `${Math.min((scrollPositions.scrollY / windowSize.height) * 100, 100)}%`,
            }}
            className={`absolute z-10 top-0 left-0 flex flex-col items-end justify-end w-[30vw] h-full pb-32 px-12 bg-gradient-to-r from-[#000000a1] to-[rgba(34, 34, 34, 0)] text-white`}
          >
            <div className={'font-normal text-[36px] text-right'}>
              Brand Story
            </div>
            <Space y={12} />
            <div className={'font-extralight text-[18px] text-right'}>
              Detail Explanation about BrandBrand111 Detail Explanation about
              BrandBrand111222
            </div>
            <Space y={20} />
            <GreenButton>Go to Detail</GreenButton>
          </div>
          <div
            className={
              'absolute top-0 right-0 flex flex-row justify-center items-center'
            }
            style={{
              width: `${70 + (scrollPositions.scrollY / 100) * 15}vw`,
              height: `${80 + (scrollPositions.scrollY / 100) * 20}%`,
              maxWidth: '85vw',
              maxHeight: '100%',
            }}
            // style={{ width: `${70 + (scrollPositions.scrollY / 100) * 30}%` }}
          >
            <img
              src={'/post/photo1.jpeg'}
              style={{
                width: `${35 + (scrollPositions.scrollY / 100) * 15}%`,
                maxWidth: '50%',
                borderImageSource: 'url("/photoframe.webp")',
                borderImageWidth: '10px',
                borderWidth: '10px',
                borderImageRepeat: 'repeat',
                borderImageSlice: '4% 4% 4% 4%',
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
        <div
          className={`w-1/2 bg-cover bg bg-center p-10 text-white flex flex-col justify-end items-end`}
          style={{
            backgroundImage:
              "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('/btn_shop.png')",
          }}
        >
          <div className={'text-[36px] font-normal'}>SHOP</div>
          <Space y={8} />
          <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
        </div>
        <div className={'w-1/2 flex flex-col '}>
          <div
            className={`h-1/2 bg-cover bg bg-center p-10 text-white  flex flex-col justify-end items-start`}
            style={{
              backgroundImage:
                "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('/about.png')",
            }}
          >
            <div className={'text-[36px] font-normal'}>NOTICE</div>
            <Space y={8} />
            <div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>
          </div>
          <div
            className={`h-1/2 bg-cover bg bg-center p-10 text-white  flex flex-col justify-end items-start`}
            style={{
              backgroundImage:
                "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('/btn_faq.png')",
            }}
          >
            <div className={'text-[36px] font-normal'}>FAQ</div>
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
    // <div className={'flex flex-row'}>
    //   <div
    //     className={`bg-white h-screen`}
    //     style={{ width: `${100 - 70 - scroll.y * 30}%` }}
    //   >
    //     {scroll.y}%
    //   </div>
    //   <div
    //     style={{
    //       width: `${70 + scroll.y * 30}%`,
    //       // right: 0,
    //     }}
    //     className={`bg-[url('/main_bg1.png')] bg-cover bg bg-center h-screen p-3`}
    //   >
    //     <img
    //       src={'frame_1.png'}
    //       className={'fixed top-0'}
    //       style={{ width: `${70 + scroll.y * 30}%` }}
    //     />
    //     <div
    //       ref={box}
    //       style={{
    //         width: `${70 + scroll.y * 30}%`,
    //         right: 0,
    //       }}
    //       className={'fixed overflow-y-scroll h-screen'}
    //     >
    //       <div className={'h-[300vh] border-solid border-2 border-black'}>
    //         {' '}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
