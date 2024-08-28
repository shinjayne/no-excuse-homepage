import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse-archive.com'),
  title: 'ARCHIVE CENTER',
  description: 'Inspiration, background of NO,EXCUSE project',
  openGraph: {
    title: 'Project 01. Self-Consciousness',
    type: 'website',
    url: 'https://www.no-excuse-archive.com/archive/project01',
    siteName: 'NO, EXCUSE ARCHIVE CENTER',
    description: 'Project 01. Self-Consciousness',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: 'NO, EXCUSE',
      },
    ],
  },
}

function LookbookTile({
  title,
  text,
  link,
  imgSrc,
}: {
  title: string
  text: ReactNode
  link: string
  imgSrc: string
}) {
  return (
    <>
      <div className={'flex flex-col items-center basis-1/2 sm:basis-1/4'}>
        <div className={'mb-2'}>{title}</div>
        <div className={'text-[11px] mb-2 h-[50px]'}>{text}</div>
        <Image src={imgSrc} alt={imgSrc} width={300} height={600} />
      </div>
    </>
  )
}

function SubTitle({ text }: { text: string }) {
  return (
    <div
      style={{
        fontFamily: 'Inter',
        fontWeight: 200,
        fontSize: 20,
        marginTop: 150,
        marginBottom: 20,
      }}
    >
      {text}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <div
        className={
          'flex flex-col items-center justify-center bg-black text-white pt-16 pb-60 text-center'
        }
      >
        <div
          style={{
            fontFamily: 'Inter',
            letterSpacing: '0.57rem',
            fontWeight: 500,
            fontSize: '20px',
            marginBottom: '10px',
          }}
        >
          NO,EXCUSE ARCHIVE CENTER
        </div>
        <div
          style={{
            fontFamily: 'Inter',
            letterSpacing: '0.57rem',
            fontWeight: 100,
            fontSize: '15px',
            marginBottom: '48px',
          }}
        >
          project 01. planting seeds
        </div>
        <div className={'flex flex-row items-center'}>
          <Link href={'/exhibition'}>
            <img
              src={'/assets/noex2_sq_w.png'}
              alt={'no,excuse exhibition'}
              className={'w-[100px]'}
            />
          </Link>
          <img src={'/icon/x.png'} alt={'x'} className={'w-[24px] mx-[24px]'} />
          <Link href={'https://no-excuse.shop'}>
            <img
              src={'/assets/select-arch-logo-w.svg'}
              alt={'no,excuse select'}
              className={'w-[100px]'}
            />
          </Link>
        </div>

        <SubTitle text={'Short Story'} />
        <div style={{ fontSize: 11, fontWeight: 100 }}>
          NO,EXCUSE 의 첫번째 프로젝트 Planting Seeds 는<br />
          패션, 문화, 예술을 통해 본인의 정체성을 찾아가는 {'"'}개인의 자기인식
          {'"'}과
          <br />
          프로젝트를 전개해나가며 NO,EXCUSE 정체성을 찾아가는 {'"'}브랜드의
          자기인식{'"'}
          <br />
          두가지 주제를 탐구하고 표현합니다.
          <br />
          <br />
          브랜드 정체성인 {'"'}타협하지 않는 자기 표현 (DARE TO STAND OUT){'"'}{' '}
          정신을 몸소 실천하고자, 신생 브랜드에게는 무모한 도전일 수도 있는 몽골
          고비 사막으로 4박 5일간 떠났습니다.
          <br />
          <br />
          제작 의상 6피스, 리워크 의류 2피스, 여성 셀렉 의류 20피스를 들고 6명의
          크루원들이 오지로 무작정 출발했습니다.
          <br />
          비행기 출발 두시간 전까지 의상 제작을 계속 했을 만큼 순탄치 않았고,
          시도해본 적 없던 여성 라인 제품 촬영도 큰 도전이었습니다.
          <br />
          전기, 인터넷, 수도도 원활하지 않는 오지에서 6명의 크루원이 4일 밤을
          자야했고, 여러가지 걱정들을 안고 출발했습니다.
          <br />
          <br />이 험난하고도 무모했던 여정을 여과 없이 공유하고자 합니다.
          <br />
          <br />
          이번 프로젝트를 진행하며 NO,EXCUSE 는 내/외부적으로 무척 성장했습니다.
          앞으로 더 큰 꿈을 꿀 수 있겠다는 자신감이 생겼습니다. NO,EXCUSE 의
          활동을 계속 지켜봐주세요.
        </div>

        <SubTitle text={'Lookbook'} />
        <div
          className={
            'flex flex-row gap-x-2 gap-y-8 flex-wrap place-content-center'
          }
        >
          <LookbookTile
            title={'Look 1'}
            text={
              <>
                Top : REWORK Stud Neck Crop T Shirts <br />
                Bottom : Extralong Wrinkle Denim (Short Cropped)
              </>
            }
            link={'/project01/lookbook/look1/DSC01627.jpg'}
            imgSrc={'/project01/lookbook/look1/DSC01627.jpg'}
          />
          <LookbookTile
            title={'Look 2'}
            text={
              <>
                Top : Grunge Denim T Shirts <br />
                Bottom : Extralong Wrinkle Denim (Long Unclipped)
              </>
            }
            link={'/project01/lookbook/look2/DSC01786.jpg'}
            imgSrc={'/project01/lookbook/look2/DSC01786.jpg'}
          />
          <LookbookTile
            title={'Look 3'}
            text={
              <>
                Acc : Shirts Balaclava <br />
                Bottom : Extralong Wrinkle Denim (Long Clipped)
              </>
            }
            link={'/project01/lookbook/look3/DSC02261.jpg'}
            imgSrc={'/project01/lookbook/look3/DSC02261.jpg'}
          />
          <LookbookTile
            title={'Look 4'}
            text={
              <>
                Top : [SELECT] Multi Cutting Sleveless <br />
                Bottom : Extralong Wrinkle Denim (Long Unclipped)
                <br /> Acc : Module Camo Skirt
              </>
            }
            link={'/project01/lookbook/look4/IMG_2947.jpg'}
            imgSrc={'/project01/lookbook/look4/IMG_2947.jpg'}
          />
          <LookbookTile
            title={'Look 5'}
            text={<></>}
            link={'/project01/lookbook/look4/IMG_2947.jpg'}
            imgSrc={'/project01/lookbook/look4/IMG_2947.jpg'}
          />
        </div>
        <SubTitle text={'Brand Film'} />

        <SubTitle text={'Pieces - NO,EXCUSE EXHIBITION'} />

        <SubTitle text={'Pieces - NO,EXCUSE SELECT'} />

        <SubTitle text={'Project Crew'} />

        <SubTitle text={'Behind The Scene'} />
      </div>
    </>
  )
}
