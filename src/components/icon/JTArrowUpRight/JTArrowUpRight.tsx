import { IconProps } from '@/types/Icon'

export const JTArrowUpRight = ({ color }: IconProps) => {
  return (
    <svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill={`${color ? color : '#fff'}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1350_418)">
        <path
          d="M1.91732 5.99994H8.78923"
          stroke={`${color ? color : '#fff'}`}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.35327 1.93289L8.78923 5.99994L5.35327 10.067"
          stroke={`${color ? color : '#fff'}`}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1350_418">
          <rect
            width="9.2931"
            height="11"
            fill={`${color ? color : '#fff'}`}
            transform="translate(0.706787 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
