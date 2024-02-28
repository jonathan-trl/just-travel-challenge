'use client'
import { Cart } from '@/components/common/Cart'
import { JTCart } from '@/components/icon/JTCart'
import { useCart } from '@/store/useCart'
import { useEffect, useRef, useState } from 'react'

export const HeaderButtonCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const { cart, totalPrice, count } = useCart()
  const cartRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setCartIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])
  
  return (
    <>
      <button
        ref={buttonRef}
        className="bg-[#0045F3] max-w-[100px] flex items-center py-2 px-5 rounded-md gap-spacing-xxs cursor-pointer select-none"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <span>
          <JTCart />
        </span>
        <div className="w-6 h-6 rounded-full leading-6 text-center bg-white/[8%]">
          <span className="text-lg font-semibold text-white">{count()}</span>
        </div>
      </button>

      {cartIsOpen && (
        <div
          ref={cartRef}
          className="absolute top-20 right-0 z-50"
          role="dialog"
        >
          <Cart cart={cart} totalPrice={totalPrice} />
        </div>
      )}
    </>
  )
}
