import { PropsWithChildren } from 'react'

export function GreenButton({ children }: PropsWithChildren) {
  return (
    <div
      className={
        'border-solid border-[1px] rounded-[4px] border-[#222222] py-2.5 px-6 text-[14px] text-white bg-[#2B4C1C] font-bold cursor-pointer'
      }
    >
      {children}
    </div>
  )
}

export function WhiteButton({children} : PropsWithChildren) {
  return (
    <div
      className={
        'border-solid border-[1px] rounded-[4px] border-[#222222] py-2.5 px-6 text-[14px] font-bold cursor-pointer'
      }
    >
      {children}
    </div>
  )
}