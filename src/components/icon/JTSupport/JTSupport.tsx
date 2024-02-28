import { IconProps } from '@/types/Icon'

export const JTSupport = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.68481 10.1847C9.92184 9.16314 10.8523 8.45484 11.9001 8.49832C13.0727 8.43337 14.078 9.32697 14.151 10.4992C14.151 12.0037 12.0001 12.5 12.0001 13.5004"
        stroke={color ? color : '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1253 16.2517C12.1252 16.3207 12.0692 16.3766 12.0002 16.3766C11.9311 16.3766 11.8752 16.3206 11.8752 16.2516C11.8751 16.1826 11.931 16.1266 12 16.1265C12.0333 16.1265 12.0651 16.1396 12.0886 16.1631C12.1121 16.1866 12.1253 16.2185 12.1253 16.2517"
        stroke={color ? color : '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.62861 17.6604C1.94551 13.8307 2.63502 8.58534 6.21672 5.57913C9.79842 2.57293 15.0839 2.80335 18.3903 6.10985C21.6968 9.41634 21.9273 14.7018 18.9211 18.2835C15.9149 21.8652 10.6695 22.5547 6.8398 19.8716L3.99688 20.5033L4.62861 17.6604Z"
        stroke={color ? color : '#4070F4'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
