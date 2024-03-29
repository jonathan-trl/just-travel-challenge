import { IconProps } from '@/types/Icon'

export const JTSearch = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 20L16.3762 16.3763"
        stroke={color ? color : '#CED2DB'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.25C4 15.2541 7.24594 18.5 11.25 18.5C15.2541 18.5 18.5 15.2541 18.5 11.25C18.5 7.24594 15.2541 4 11.25 4V4C7.24606 4.00029 4.00029 7.24606 4 11.25"
        stroke={color ? color : '#CED2DB'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
