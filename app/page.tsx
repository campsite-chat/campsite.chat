import HomeHeader from '@/components/home/header';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <HomeHeader />
    </div>
  )
}
