import { ExhibitionTopBar } from '@/app/exhibition/ExhibitionTopBar'
import Link from 'next/link'

function ExhibitionListProduct({
  title,
  price,
  subText,
  subTextType = 'red',
  imgSrc,
  link = '',
}: {
  title: string
  price: string
  subText: string
  subTextType: 'red' | 'blue'
  imgSrc: string
  link: string
}) {
  return (
    <Link
      href={link}
      className={
        'flex flex-col items-center basis-1/2 sm:basis-1/3 text-center text-[11px]'
      }
    >
      <img src={imgSrc} />
      <div className={'mb-2'}>{title}</div>
      <div className={'mb-2'}>{price}</div>
      <div className={`text-${subTextType}-800 font-black`}>{subText}</div>
    </Link>
  )
}

export default function ExhibitionShop() {
  return (
    <>
      <ExhibitionTopBar />
      <div
        className={'pt-64 pb-64 px-6 flex flex-wrap gap-y-8'}
        style={{
          fontFamily: 'RobotoMono',
          letterSpacing: '0.1rem',
        }}
      >
        <ExhibitionListProduct
          title={'V1.0 EXTRA LONG WRINKLE DENIM'}
          price={'599,000 KRW'}
          subText={'DROP AT 9/6 17:00 KST'}
          subTextType={'blue'}
          imgSrc={'/exhibition/products/003_wrinklepants/003_1_sq.jpg'}
          link={
            'https://no9excuse.com/product/b570b312-5292-408a-a54c-9465a84be606'
          }
        />
        <ExhibitionListProduct
          title={'V1.0 PROJECT 01 CREW T SHIRTS'}
          price={'90,000 KRW'}
          subText={''}
          subTextType={'blue'}
          imgSrc={'/exhibition/products/002_crewt/002_1.jpg'}
          link={
            'https://no9excuse.com/product/8d128b0e-6f52-4eb2-a095-8130563869ae-108'
          }
        />
        <ExhibitionListProduct
          title={'V1.0 PROJECT 01 CREW T SHIRTS - CELEBRATE EDITION'}
          price={'209,000 KRW'}
          subText={'SOLD OUT'}
          subTextType={'red'}
          imgSrc={'/exhibition/products/001/001_1.jpeg'}
          link={
            'https://no9excuse.com/product/8d128b0e-6f52-4eb2-a095-8130563869ae'
          }
        />
      </div>
    </>
  )
}
