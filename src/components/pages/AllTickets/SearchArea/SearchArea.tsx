'use client'
import { JTLocation } from '@/components/icon/JTLocation'
import { JTSearch } from '@/components/icon/JTSearch'
import { FormEvent } from 'react'
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
    reset,
  } = useForm<SearchInputs>({})

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSubmit(onSubmit)()
    reset()
  }

  return (
      <form
        onSubmit={handleFormSubmit}
        data-testid="search-form"
      >
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
                data-testid="search-input"
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
  )
}
