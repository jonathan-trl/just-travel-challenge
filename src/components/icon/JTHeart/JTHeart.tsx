type JTHeartProps = {
  isInCart: boolean
}
export const JTHeart = ({ isInCart }: JTHeartProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={isInCart ? '#fff' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3823 5.711C13.0713 4.905 14.2633 4 16.0783 4C19.2533 4 21.3823 6.98 21.3823 9.755C21.3823 15.556 14.1603 20 12.3823 20C10.6043 20 3.38232 15.556 3.38232 9.755C3.38232 6.98 5.51132 4 8.68632 4C10.5013 4 11.6933 4.905 12.3823 5.711Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
