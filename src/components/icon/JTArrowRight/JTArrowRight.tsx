type JTArrowRightProps = {
  disable: boolean
}
export const JTArrowRight = ({ disable }: JTArrowRightProps) => {
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
        d="M9.2925 15.4625L13.1725 11.5825L9.2925 7.7025C8.9025 7.3125 8.9025 6.6825 9.2925 6.2925C9.6825 5.9025 10.3125 5.9025 10.7025 6.2925L15.2925 10.8825C15.6825 11.2725 15.6825 11.9025 15.2925 12.2925L10.7025 16.8825C10.3125 17.2725 9.6825 17.2725 9.2925 16.8825C8.9125 16.4925 8.9025 15.8525 9.2925 15.4625Z"
        fill={disable ? '#9EAAE1' : '#455CC7'}
      />
    </svg>
  )
}
