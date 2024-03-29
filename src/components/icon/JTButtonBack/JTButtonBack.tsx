import { IconProps } from '@/types/Icon'

export const JTButtonBack = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 14.076V14C18 10.686 15.314 8 12 8H10.581H6"
        stroke={`${color ? color : '#323232'}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14.08V19"
        stroke={`${color ? color : '#323232'}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11L6 8L9 5"
        stroke={`${color ? color : '#323232'}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
