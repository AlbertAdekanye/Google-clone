import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'


export default function Home() {
  return (
   <>
    <HomeHeader />
    <div className="flex flex-col items-center mt-24">
      <Image 
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
        alt="Google Logo"
        width={300} 
        height={100} 
        priority
        style={{ width: 'auto' }} 
      />
        <HomeSearch />
    </div>
   </>
  )
}
