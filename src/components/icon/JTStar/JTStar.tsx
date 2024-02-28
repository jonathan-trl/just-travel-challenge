import { IconProps } from '@/types/Icon'

export const JTStar = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17.2351L6.179 20.0001L7.388 13.8801L3 9.39206L9.179 8.62106L12 3.00006L14.821 8.62106L21 9.39206L16.612 13.8801L17.821 20.0001L12 17.2351Z"
        fill={color ? color : '#FFAD0D'}
        stroke={color ? color : '#FFAD0D'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
