import { IconProps } from '@/types/Icon'

export const JTCart = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.86755 21.5625C9.41492 21.5625 9.85864 21.1188 9.85864 20.5714C9.85864 20.024 9.41492 19.5803 8.86755 19.5803C8.32019 19.5803 7.87646 20.024 7.87646 20.5714C7.87646 21.1188 8.32019 21.5625 8.86755 21.5625Z"
        fill={`${color ? color : '#fff'}`}
        stroke={`${color ? color : '#fff'}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.767 21.5625C20.3143 21.5625 20.7581 21.1188 20.7581 20.5714C20.7581 20.024 20.3143 19.5803 19.767 19.5803C19.2196 19.5803 18.7759 20.024 18.7759 20.5714C18.7759 21.1188 19.2196 21.5625 19.767 21.5625Z"
        fill={`${color ? color : '#fff'}`}
        stroke={`${color ? color : '#fff'}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.9375 0C0.523286 0 0.1875 0.335786 0.1875 0.75C0.1875 1.16421 0.523286 1.5 0.9375 1.5H4.2871L5.15133 5.81793C5.15493 5.84188 5.15966 5.86545 5.16547 5.8886L6.82235 14.1668L6.82242 14.1672C6.94741 14.796 7.28953 15.3608 7.78892 15.7628C8.28641 16.1633 8.90839 16.3768 9.54679 16.3663H19.1669C19.8053 16.3768 20.4273 16.1633 20.9248 15.7628C21.4243 15.3607 21.7664 14.7957 21.8914 14.1668L21.8914 14.1668L21.8925 14.1612L23.4782 5.84594C23.5201 5.62638 23.4618 5.39958 23.3193 5.22736C23.1769 5.05514 22.965 4.95545 22.7415 4.95545H6.50845L5.63727 0.602807C5.56712 0.252289 5.25933 0 4.90186 0H0.9375Z"
        fill={`${color ? color : '#fff'}`}
      />
    </svg>
  )
}
