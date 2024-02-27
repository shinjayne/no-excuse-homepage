'use client'

import { ProductIdProps } from '@/app/product/Type'
import { Navigation } from '@/components/Navigation'
import React from 'react'
import Space from '@/components/Space'
import { Carousel } from 'antd'
import { Select, SelectItem } from '@nextui-org/react'
import { WhiteButton } from '@/components/Button'

export default function ProductDetail({
  params: { productId },
}: ProductIdProps) {
  return (
    <>
      <div className={'w-full'}>
        <Navigation />
        <div className={'flex flex-col w-full text-black items-center'}>
          <Carousel className={'max-w-[400px] w-full'}>
            <img
              src={'/post/photo1.jpeg'}
              className={
                'object-cover w-full h-[80vh] max-w-[400px] max-h-[800px]'
              }
            />
            <img
              src={'/post/photo1.jpeg'}
              className={
                'object-cover w-full h-[80vh] max-w-[400px] max-h-[800px]'
              }
            />
            <img
              src={'/post/photo1.jpeg'}
              className={
                'object-cover w-full h-[80vh] max-w-[400px] max-h-[800px]'
              }
            />
          </Carousel>

          <Space y={24} />
          <div className={'flex flex-col px-3 pb-10'}>
            <div className={'text-sm'}>Product Title</div>
            <Space y={8} />
            <div className={'text-sm font-bold'}> KRW 69,000</div>
            <Space y={16} />
            <div className={'text-xs'}>
              상품에 대한 설명입니다. 상품에 대한 설명입니다.상품에 대한
              설명입니다.상품에 대한 설명입니다.상품에 대한 설명입니다.상품에
              대한 설명입니다.
            </div>
            <Space y={16} />
            <Select
              radius={'none'}
              label={'Size'}
              size={'sm'}
              className={'w-full'}
              variant={'bordered'}
            >
              <SelectItem key={'S'} value={'S'}>
                S
              </SelectItem>
              <SelectItem key={'M'} value={'M'}>
                M
              </SelectItem>
              <SelectItem key={'L'} value={'L'}>
                L
              </SelectItem>
              <SelectItem key={'XL'} value={'XL'}>
                XL
              </SelectItem>
            </Select>
            <Space y={8} />
            <Select
              radius={'none'}
              label={'Color'}
              size={'sm'}
              className={'w-full'}
              variant={'bordered'}
            >
              <SelectItem key={'Gray'} value={'Gray'}>
                Gray
              </SelectItem>
              <SelectItem key={'Black'} value={'Black'}>
                Black
              </SelectItem>
            </Select>

            <Space y={16} />
            <div className={'flex flex-row w-full'}>
              <div className={'basis-1/2'}>
                <WhiteButton>ADD CART</WhiteButton>
              </div>
              <Space x={8} />
              <div className={'basis-1/2'}>
                <WhiteButton>BUY NOW</WhiteButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
