"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import isaacdrugs from "@/app/assets/isaacdrugs.jpeg";
import { FlipWords } from "@/components/ui/flip-words";
import { db } from "@/db/index";
import { users } from "@/db/schema";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
 
let notifications = [
  {
    name: "",
    description: "Magic UI",
    time: "15m ago",
 
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export default function aboutMe() {
  const words: string[] = ["coding", "university", "smoking"];

  // insertOneUser();
  return (
    
    <div className="flex justify-center gap-12 flex-wrap">
      <div className="flex flex-col justify-center">
        <div className="text-md">You think<FlipWords words={words}/>is bad?</div>
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
      <div className = "flex flex-row">
        <AnimatedListDemo/>
      </div>

    </div>
  )
}
