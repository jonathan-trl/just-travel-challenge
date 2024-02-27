'use client'
import { Cart } from '@/components/common/Cart'
import { JTCart } from '@/components/icon/JTCart'
import { useCart } from '@/store/useCart'
import { useState } from 'react'

export const HeaderButtonCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const { count } = useCart()

  return (
    <>
      <div
        className="bg-[#0045F3] max-w-[100px] flex items-center py-2 px-5 rounded-md gap-spacing-xxs cursor-pointer select-none"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <span>
          <JTCart />
        </span>
        <div className="w-6 h-6 rounded-full leading-6 text-center bg-white/[8%]">
          <span className="text-lg font-semibold text-white">{count()}</span>
        </div>
      </div>

      {cartIsOpen && <Cart />}
    </>
  )
}
