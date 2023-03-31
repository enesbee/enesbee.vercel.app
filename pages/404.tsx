import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          저.. 페이지를 잘못 찾아오신 것 같은데요..
        </p>
        <p className="mb-8">원하시는 페이지를 다시 한번 확인해주세요.</p>
        <Link href="/">
          <button className="inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-500 focus:outline-none dark:hover:bg-primary-300">
            메인 페이지로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  )
}
