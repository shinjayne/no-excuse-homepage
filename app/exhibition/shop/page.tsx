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
  subTextType: 'red' | '#3533a1' | 'orange'
  imgSrc: string
  link: string
}) {
  return (
    <Link
      href={link}
      className={
        'flex flex-col items-center basis-1/2 sm:basis-1/3 text-center text-[11px] px-1'
      }
    >
      <img src={imgSrc} />
      <div className={'mb-2'}>{title}</div>
      <div className={'mb-2'}>{price}</div>
      <div
        style={{
          color: subTextType,
        }}
        className={`text-${subTextType}-800 font-black`}
      >
        {subText}
      </div>
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
          title={'V1.0 SHIRTS BALACLAVA - VIOLET YELLOW'}
          price={'???'}
          subText={'DROP AT 9/24 17:00 KST'}
          subTextType={'#3533a1'}
          imgSrc={'/exhibition/products/004_balaclava/002.jpg'}
          link={
            'https://no9excuse.com/product/45dbbb4f-7b1e-4202-accc-a9dbf2c6e3ce-113'
          }
        />
        <ExhibitionListProduct
          title={'V1.0 SHIRTS BALACLAVA - IVORY BLUE'}
          price={'???'}
          subText={'DROP AT 9/24 17:00 KST'}
          subTextType={'#3533a1'}
          imgSrc={'/exhibition/products/004_balaclava/001.jpg'}
          link={
            'https://no9excuse.com/product/45dbbb4f-7b1e-4202-accc-a9dbf2c6e3ce'
          }
        />
        <ExhibitionListProduct
          title={'V1.0 EXTRA LONG WRINKLE DENIM'}
          price={'599,000 KRW'}
          subText={'SOLD OUT SOON'}
          subTextType={'orange'}
          imgSrc={'/exhibition/products/003_wrinklepants/003_1_sq.jpg'}
          link={
            'https://no9excuse.com/product/b570b312-5292-408a-a54c-9465a84be606'
          }
        />

        <ExhibitionListProduct
          title={'V1.0 PROJECT 01 CREW T SHIRTS'}
          price={'89,000 KRW'}
          subText={'SOLD OUT SOON'}
          subTextType={'orange'}
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
