type FilterAreaTitleProps = {
  title: string
}
export const FilterAreaTitle = ({ title }: FilterAreaTitleProps) => {
  return (
    <span className="inline-block text-md font-bold mb-spacing-xxs">
      {title}
    </span>
  )
}
