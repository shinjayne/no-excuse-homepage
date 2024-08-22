import Link from 'next/link'

export function ExhibitionTopBar() {
  return (
    <div
      style={{
        width: '100%',
        // marginTop: '-0.5vw',
        position: 'fixed',
        top: '-0.5vw',
      }}
      className={'flex flex-col items-center justify-start'}
    >
      <img src={'/assets/noex2_black.png'} style={{ width: '95vw' }} />
      <div
        className={
          'flex justify-center gap-10 sm:gap-44 mt-8 text-[14px] sm:text-[16px]'
        }
      >
        <Link href={'/exhibition/shop'}>SHOP</Link>
        <Link href={'https://instagram.com/no__ex2'}>INSTAGRAM</Link>
        <Link href={'/archive/project01'}>ARCHIVE CENTER</Link>
      </div>
    </div>
  )
}
