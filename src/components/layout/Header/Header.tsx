import { JTLogo } from '@/components/icon/JTLogo'
import { JTSupport } from '@/components/icon/JTSupport'
import { JTUser } from '@/components/icon/JTUser'
import Image from 'next/image'
import { ButtonCart } from './ButtonCart/ButtonCart'

export const Header = () => {
  return (
    <header className="py-6 px-8 border-b-0.8 border-gray-10 bg-white">
      <div className="container relative flex items-center justify-between">
        <a href="/">
          <JTLogo />
        </a>
        <div className="flex items-center ml-auto border-r gap-spacing-xs pr-spacing-xs border-gray-10">
          <span className="text-sm">Cotação do dólar hoje: R$5,53</span>
          <Image
            src={'/images/brasil-flag.png'}
            width={30}
            height={21}
            alt=""
            className="cursor-pointer"
          />
          <span className="cursor-pointer">
            <JTSupport />
          </span>
        </div>
        <div className="flex items-center gap-spacing-xs pl-spacing-xs curpo">
          <div className="flex items-center gap-spacing-xxs cursor-pointer">
            <span>
              <JTUser />
            </span>
            <span className="text-md font-bold text-brand-blue">Entrar</span>
          </div>
          <ButtonCart />
        </div>
      </div>
    </header>
  )
}
