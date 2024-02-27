'use client'
import { JTLocation } from '@/components/icon/JTLocation'
import { JTSearch } from '@/components/icon/JTSearch'
import { SubmitHandler, useForm } from 'react-hook-form'

type SearchAreaProps = {
  onSubmit: SubmitHandler<SearchInputs>
}

type SearchInputs = {
  name: string
}

export const SearchArea = ({ onSubmit }: SearchAreaProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInputs>({})

  return (
    <div className="bg-white py-spacing-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <div className="flex items-center border-0.8 border-gray-20 h-[48px]">
          <div className="flex items-center flex-1 h-full">
            <div className="px-spacing-xxs">
              <JTLocation />
            </div>
            <div className="h-full w-full">
              <input
                className="h-full w-full outline-none text-md text-gray-40"
                type="text"
                placeholder="Busque por atração"
                {...register('name')}
              />
            </div>
          </div>
          <div className="max-w-[48px] flex-1 h-full flex justify-center items-center border-l-0.8 border-gray-20">
            <button type="submit">
              <JTSearch />
            </button>
          </div>
        </div>
        {errors && (
          <div className="mt-2">
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </div>
        )}
      </form>
    </div>
  )
}
