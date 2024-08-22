import { ExhibitionTopBar } from '@/app/exhibition/ExhibitionTopBar'
import Link from 'next/link'

function ExhibitionListProduct({
  title,
  price,
  subText,
  imgSrc,
}: {
  title: string
  price: string
  subText: string
  imgSrc: string
}) {
  return (
    <Link
      href={''}
      className={
        'flex flex-col items-center basis-1/2 sm:basis-1/3 text-center text-[11px]'
      }
    >
      <img src={imgSrc} />
      <div className={'mb-2'}>{title}</div>
      <div className={'mb-2'}>{price}</div>
      <div className={'text-red-800 font-bold'}>{subText}</div>
    </Link>
  )
}

export default function ExhibitionShop() {
  return (
    <>
      <ExhibitionTopBar />
      <div className={'pt-64 pb-64 px-6 flex flex-wrap gap-y-8'}>
        <ExhibitionListProduct
          title={'PROJECT 01 CREW T SHIRTS - CELEBRATE EDITION'}
          price={'209,000 KRW'}
          subText={'SOLD OUT'}
          imgSrc={'/exhibition/products/001/001_1.jpeg'}
        />
        <ExhibitionListProduct
          title={'PROJECT 01 CREW T SHIRTS'}
          price={'90,000 KRW'}
          subText={''}
          imgSrc={'/exhibition/products/001/001_2.jpeg'}
        />
      </div>
    </>
  )
}
