import Image from 'next/image'

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-6 mt-spacing-md">
      <Image src="/images/logo.png" width={245} height={53} alt="Logo" />
      <h2>Carregando...</h2>
    </div>
  )
}

export default Loading
