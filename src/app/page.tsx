import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import {BackgroundBeamsWithCollision} from "~/components/ui/background-beams-with-collision";
import {TextRevealCard} from "~/components/ui/text-reveal-card";
import {TypewriterEffect} from "~/components/ui/typewriter-effect";
import { motion } from "framer-motion";

export default async function Home() {


  return (
    <HydrateClient>
      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-3xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">Study Buddy</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">Study Buddy</span>
                </div>
            </div>
            &nbsp;
            <TypewriterEffect className={"inline"} cursorClassName={"bg-gradient-to-b from-indigo-500 to-purple-500 "} words={[
                {
                    text: "is",
                },
                {
                    text: "better",
                },
                {
                    text: "than",
                },
                {
                    text: "anything",
                },
                {
                    text: " you",
                },
                {
                    text: 'have',
                },
                {
                    text: "used",
                },
                {
                    text: 'before.',
                }
            ]} />


        </h2>

      </BackgroundBeamsWithCollision>
    </HydrateClient>
  );
}
