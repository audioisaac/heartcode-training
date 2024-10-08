import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import isaacdrugs from "@/app/assets/isaacdrugs.jpeg";

export default function aboutMe() {
  return (
    <div className="flex justify-center gap-12 flex-wrap">
      <div className="flex flex-col justify-center">
        <p className="text-md">You think coding is bad?</p>
        <p className="text-md">Check out DRUGS then</p>
        <hr></hr>
        <p className="text-md">Heck yeah drugs are HORRIBLE</p>
        <p className="padding-10 text-lg font-bold text-5x1"><b>H</b> - Heavy on the wallet</p>
        <p className="text-xl font-bold text-5x1"><b>O</b> - Only brings harm to you</p>
        <p className="text-xl font-bold text-5x1"><b>R</b> - Removes all your friends </p>
        <p className="text-xl font-bold text-5x1"><b>R</b> - Removes all your family</p>
        <p className="text-xl font-bold text-5x1"><b>I</b> - Incredibly detrimental to your health</p>
        <p className="text-xl font-bold text-5x1"><b>B</b> - Bad for your brain cells</p>
        <p className="text-xl font-bold text-5x1"><b>L</b> - Leaves you wanting more</p>
        <p className="text-xl font-bold text-5x1"><b>E</b> - Extremely expensive</p>
      </div>
      <div className="relative">
        {/* <div className="fixed top-12 left-0 right-0"> */}
          <Image className="rounded-lg h-auto max-w-xl max-w-lg ms-auto" alt="funny picture" src={isaacdrugs}/>
        {/* </div> */}
      </div>
    </div>
  )
}
