import Link from 'next/link'

export default function NewHomeDesktop() {
  return (
    <div
      className={
        'w-screen h-screen bg-cover py-16 px-8 pb-64 flex flex-col justify-between animate-fadeIn'
      }
      style={{
        backgroundImage:
          "linear-gradient(to top,rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0.05)), url('/home/homemain2.jpg')",
        backgroundPosition: 'center',
      }}
    >
      <div
        className={
          'w-full flex flex-col items-center mb-32 sm:items-end animate-fadeInDelay'
        }
      >
        <img src={'/logo22.png'} />
        <div className={'mt-4 sm:mt-0'}>Project Group for Art & Subculture</div>
        <div>EST.2024 SEOUL</div>
      </div>

      <div
        className={
          'flex flex-col justify-end items-center sm:items-start animate-fadeInDelay2'
        }
      >
        <div className={'flex flex-row items-center mb-16'}>
          <div
            className={
              'border-0 border-solid border-black w-0 mr-0 sm:w-96 sm:mr-4 sm:border-1 sm:animate-growWidth384'
            }
          ></div>
          <Link href={'/exhibition'}>
            <img
              src={'/assets/noex2_black.png'}
              style={{
                cursor: 'pointer',
                width: 318,
              }}
            />
          </Link>
        </div>
        <div className={'flex flex-row items-center mb-16'}>
          <div
            className={
              'border-0 border-solid border-black w-0 mr-0 sm:w-[700px] sm:mr-4 sm:border-1 sm:animate-growWidth568'
            }
          ></div>
          <img
            src={'/assets/select-arch-logo-b.svg'}
            style={{
              cursor: 'pointer',
              width: 134,
            }}
            onClick={() => {
              window.open('https://no9excuse.com')
            }}
          />
        </div>
        {/*<div className={'flex flex-row items-center'}>*/}
        {/*  <div*/}
        {/*    className={*/}
        {/*      'border-0 border-solid border-black w-0 mr-0 sm:w-96 sm:mr-4 sm:border-1 sm:animate-growWidth384'*/}
        {/*    }*/}
        {/*  ></div>*/}
        {/*  <div style={{ fontSize: '20px', cursor: 'pointer' }}>about team</div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
