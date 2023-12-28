import InputForm from '@/components/InputForm'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
   <main className='h-full w-full flex items-center justify-center relative overflow-hidden'>
  
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#7ba0f2_1px,transparent_1px)] [background-size:16px_16px]"></div>
   <InputForm/>
   <Link href="https://github.com/taqui-786/GitEst" target="_blank" className=" w-28 z-50 bg-primary absolute -top-[11px] -right-[38px] flex items-center justify-center p-5 rotate-45"><Github className='h-5 w-5 text-white' /></Link>
   </main>
  )
}
