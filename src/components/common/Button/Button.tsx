import { IconType } from '@/types/Icon'

type ButtonProps = {
  title: string
  size?: 'sm' | 'md' | 'lg'
  colorScheme?: 'primary' | 'secondary'
  disabled?: boolean
  selected?: boolean
  href?: string
  borderless?: boolean
  icon?: IconType
  onClick?: () => void
}

export const Button = ({
  size = 'sm',
  colorScheme = 'primary',
  disabled = false,
  selected = true,
  borderless = false,
  title,
  icon: Icon,
  href,
  onClick,
}: ButtonProps) => {
  let btnColorScheme = ''

  let btnSizes = ''

  let iconColor = ''

  switch (size) {
    case 'lg':
      btnSizes += ' h-[58px] rounded-[4px] px-6 text-md'
      break
    case 'md':
      btnSizes += ' h-[50px] rounded-[4px] px-4 text-md'
      break
    case 'sm':
      btnSizes += ' h-[39px] rounded-[3px] px-3 text-normal'
      break
    default:
      btnSizes += ' h-[39px] rounded-[3px] px-3 text-normal'
  }

  switch (colorScheme) {
    case 'primary':
      btnColorScheme += ' bg-brand-blue text-white'
      iconColor = '#fff'
      break
    case 'secondary':
      btnColorScheme += ' bg-white border border-brand-blue text-brand-blue'
      iconColor = '#4070F4'
      break
    default:
      btnColorScheme += ' bg-brand-blue text-white'
      iconColor = '#fff'
  }

  if (disabled) {
    btnColorScheme = ' bg-gray-10 text-gray-30 disabled'
    iconColor = '#B6BCC9'
  }

  if (!selected) {
    btnColorScheme = ' bg-transparent text-gray-20 border border-gray-20'
  }

  const ElementType = href ? 'a' : 'button'

  return (
    <ElementType
      disabled={disabled}
      onClick={onClick}
      href={href ? href : ''}
      className={`flex flex-row items-center justify-center text-center w-full gap-2 cursor-pointer ${
        borderless ? 'border-none' : 'border'
      } ${btnSizes + btnColorScheme}`}
    >
      <span>{title}</span>
      {Icon && <Icon color={iconColor} />}
    </ElementType>
  )
}
