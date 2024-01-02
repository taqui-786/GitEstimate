'use client'
import React, {  useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from './ui/button';
import { toPng } from 'html-to-image';
import Image from 'next/image';
import {Loader2} from 'lucide-react'
import { toast } from 'sonner';


interface ShowCardProps {
    avatar?:string,
    fullname?:string,
    username?:string,
    followers?:number,
  stars?:number,
  contribuitions?:number,
  estimated?: number
}

const ShowCard:React.FC<ShowCardProps> = ({avatar,contribuitions, fullname, username, followers,stars,estimated}) => {
const elementRef = useRef<HTMLDivElement | null>(null);
 const [loading, setLoading] = useState(false)



//  FUNCTION TO CONVERT HTML TO IMAGE 
    const htmlToImageConvert = () => {
      setLoading(true)
      try {
     if(elementRef.current ){

    toPng(elementRef.current , { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "gitEstimate.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        // console.log(err);
        toast.error('Sorry, Downloading limit reached! Max 1000 images' ,{  style: {
          background: 'crimson', color: 'white'
        }, position: 'top-center'})
      }).finally(()=>{
        setLoading(false)
      });
  };
  } catch (error) {
    toast.error('Error converting to image !' ,{  style: {
      background: 'crimson', color: 'white'
    }, position: 'top-center'})
         console.error("Error converting to image:", error);
      }
  };

  return (
   <>
   <div className="flex flex-col bg-white max-w-[520px] p-1 sm:p-5 rounded-md shadow-md border bg-card"  ref={elementRef} >
    {/* HEAD  */}
            <div className="flex flex-row justify-between w-full p-2 sm:p-5">
                <div className="h-full flex flex-col items-center justify-center mb-2">

              <Avatar className="h-[100px] w-auto">
                <AvatarImage src={avatar} />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
              
              <span className="text-lg font-bold text-center "> {fullname}</span>
                <span className="text-sm font-normal text-center"> github.com/{username}</span>
                </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl font-bold text-center "> {estimated} $</span>
                <span className="text-xl font-normal text-center"> Estimated Worth</span>
              </div>
            </div>
            {/* BODY  */}
            <div className="py-2 px-2 sm:px-5 w-full flex flex-row justify-center ">
                <div className="sm:px-4 px-1 flex flex-col gap-2 border-r">
                 <span className="w-full text-center font-medium">{contribuitions}</span>
                 <span className="w-full text-center text-sm font-medium">Total Contributions</span>
                    </div>
                    <div className="sm:px-4 px-1 flex flex-col  gap-2 border-r">
                 <span className="w-full text-center font-medium">{stars}</span>
                 <span className="w-full text-center text-sm font-medium">Total Stars</span>
                    </div>
                <div className="sm:px-4 px-1 flex flex-col  gap-2">
                 <span className="w-full text-center font-medium">{followers}</span>
                 <span className="w-full text-center text-sm font-medium">Total Followers</span>
                    </div>
               
            </div>
            {/* FOOTER  */}
            <div className="mt-3 py-2 px-2 sm:px-5 w-full flex h-[100px] relative">
             
                {/* 🔴 SUGGESTION -> Due to my vercel free tire end of 1000 images  unoptimized= true 👇   */}

               <Image src={`https://ghchart.rshah.org/${username}`} alt="Contribution Graph" fill={true} loading="eager" priority  unoptimized={true}/>
          
          </div>
          <span className="w-full text-center mt-2 text-xs">Get your&#39;s at gitestimate.vercel.app</span>
          </div>
          <Button disabled={loading} onClick={htmlToImageConvert}>{loading ? <Loader2 className='h-5 w-5 text-white animate-spin'/> : "Save as JPEG"}</Button>

   </>
  )
}

export default ShowCard