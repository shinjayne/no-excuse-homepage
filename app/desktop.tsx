'use client'

import React, { useRef, useState } from 'react'
import { useScroll } from '@react-hooks-library/core'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import usePickRandomArt from '@/app/artlist'
import FooterContent from '@/app/footer'

export default function Desktop() {
  const box = useRef<HTMLDivElement | null>(null)
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  const [artUrl, changeArt] = usePickRandomArt()

  useScroll(box, ({ scrollX, scrollY }) =>
    setScroll({ x: scrollX, y: scrollY }),
  )

  console.log(`DesktopV5 : ${artUrl}`)

  const router = useRouter()

  return (
    <div className={'flex flex-col'}>
      <Navigation />

      <div className={'flex flex-row w-full h-[100vh] sticky top-0'}>
        <div
          className={'w-1/2 h-full bg-cover'}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0.05)), url('/daemun/bikerpants.png')`,
            backgroundPosition: '75% 70%',
          }}
        ></div>
        <div
          className={'w-1/2 h-full bg-cover'}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0.05)),url('/daemun/monkey.jpeg')`,
            backgroundPosition: '50% 100%',
          }}
        ></div>
      </div>
      <div className={'flex flex-row w-full h-[100vh] sticky top-0'}>
        <div
          className={'w-1/2 h-full bg-cover'}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0.05)),url('/daemun/soldier.jpeg')`,
            backgroundPosition: '100% 70%',
          }}
        ></div>
        <div
          className={'w-1/2 h-full bg-cover'}
          style={{
            backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0.05)),url('/daemun/leopard2.png')`,
            backgroundPosition: '50% 60%',
          }}
        ></div>
      </div>
      <div className={'sticky top-0 bg-black'}>
        <div
          className={
            'flex flex-col justify-center items-center py-2 font-light text-medium  text-start bg-black text-white overflow-hidden'
          }
        >
          <div className={'animate-slide w-[2400px] font-light text-sm'}>
            NO EXCUSE, NO SURRENDER. In every moment, choose to stand out;
            refuse to blend in. Our threads are for those who speak boldly—No
            Thanks, EXCUSE not needed. NO EXCUSE, NO SURRENDER. In every moment,
            choose to stand out; refuse to blend in. Our threads are for those
            who speak boldly—No Thanks, EXCUSE not needed.
          </div>
        </div>
        <div className={'h-[90vh]'}></div>

        {/*<div className={'flex flex-row justify-center gap-8 items-center h-[90vh]'}>*/}
        {/*  <div*/}
        {/*    // href={EXHIBITION.link}*/}
        {/*    className={`w-[30vw] h-[50vw] max-w-[360px] max-h-[600px] bg-cover bg bg-center p-10 text-white flex flex-col justify-center items-center overflow-hidden break-all cursor-not-allowed`}*/}
        {/*    style={{*/}
        {/*      backgroundImage: `linear-gradient(to top,rgb(0 0 0 / 90%), rgb(34 34 34 / 56%)), url('${EXHIBITION.imageUrl}')`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      className={*/}
        {/*        'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1 relative'*/}
        {/*      }*/}
        {/*    >*/}
        {/*      {EXHIBITION.title.toUpperCase()}*/}
        {/*      <div className={'flex justify-center'}>*/}
        {/*        <div*/}
        {/*          className={*/}
        {/*            'rounded-md border-1 border-solid border-white py-2 px-4 text-[12px] absolute top-[80px] z-10'*/}
        {/*          }*/}
        {/*        >*/}
        {/*          COMING SOON*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    /!*<Space y={8} />*!/*/}
        {/*    /!*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*!/*/}
        {/*  </div>*/}
        {/*  <Link*/}
        {/*    href={SELECT.link}*/}
        {/*    className={`w-[30vw] h-[50vw] max-w-[360px] max-h-[600px] bg-cover bg bg-center p-10 text-white flex flex-col justify-center items-center overflow-hidden break-all`}*/}
        {/*    style={{*/}
        {/*      backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${SELECT.imageUrl}')`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      className={*/}
        {/*        'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1'*/}
        {/*      }*/}
        {/*    >*/}
        {/*      {SELECT.title.toUpperCase()}*/}
        {/*    </div>*/}
        {/*    /!*<Space y={8} />*!/*/}
        {/*    /!*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*!/*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href={BRAINSTORMING.link}*/}
        {/*    className={`w-[30vw] h-[50vw] max-w-[360px] max-h-[600px] bg-cover bg bg-center p-10 text-white flex flex-col justify-center items-center overflow-hidden break-all`}*/}
        {/*    style={{*/}
        {/*      backgroundImage: `linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0)), url('${BRAINSTORMING.imageUrl}')`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      className={*/}
        {/*        'text-[18px] font-medium border-b-3 border-solid border-white px-2 py-1'*/}
        {/*      }*/}
        {/*    >*/}
        {/*      {BRAINSTORMING.title.toUpperCase()}*/}
        {/*    </div>*/}
        {/*    /!*<Space y={8} />*!/*/}
        {/*    /!*<div className={'text-[16px] font-light'}>VIEW ALL {'>'}</div>*!/*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <div
          className={
            'w-full flex flex-col items-center gap-2 bg-black pt-20  pb-10 px-10'
          }
        >
          <div
            className={
              'text-xs text-center font-medium flex flex-col items-center mb-5 text-white'
            }
          >
            <div>CUSTOMER SERVICE</div>
            <div>no-excuse-shop@naver.com</div>
            <div>0507-1352-6385</div>
            <div>
              WEEKDAY 10:00 ~ 18:00 | NOT AVAILABLE ON WEEKEND OR HOLIDAY
            </div>
          </div>
          <div className={'text-xs text-gray-500 text-center'}>
            {FooterContent}
          </div>
        </div>
      </div>
    </div>
  )
}
