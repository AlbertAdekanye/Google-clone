import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className="flex justify-end text-sm p-5">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} 
          className="hover:underline"
        >
          Gmail
        </Link>
        {/* image */}
        <Link href={"https://image.google.com"} 
          className="hover:underline"
        >
          Images
        </Link>
        {/* icon */}
        <TbGridDots  className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
        {/* button */}
        <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  )
}
