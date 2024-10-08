import Link from 'next/link'

export function ExhibitionTopBar() {
  return (
    <div
      style={{
        width: '100%',
        // marginTop: '-0.5vw',
        position: 'fixed',
        top: '-0.5vw',
        fontFamily: 'RobotoMono',
        letterSpacing: '0.1rem',
        backgroundColor: 'white',
      }}
      className={'flex flex-col items-center justify-start'}
    >
      <Link href={'/exhibition'}>
        <img src={'/assets/noex2_black.png'} style={{ width: '95vw' }} />
      </Link>
      <div
        className={
          'flex justify-center gap-10 sm:gap-44 mt-8 text-[14px] sm:text-[16px]'
        }
      >
        <Link href={'/exhibition/shop'} className={'w-[90px] text-center'}>
          SHOP
        </Link>
        <Link
          href={'https://instagram.com/no__ex2'}
          className={'w-[90px] text-center'}
        >
          INSTAGRAM
        </Link>
        <Link href={'/archive/project01'} className={'w-[90px] text-center'}>
          ARCHIVE
        </Link>
        <Link href={'/exhibition/about'} className={'w-[90px] text-center'}>
          ABOUT
        </Link>
      </div>
    </div>
  )
}
