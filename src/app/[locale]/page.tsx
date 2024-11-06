import {Spotlight} from "~/components/ui/spotlight";
import {getTranslations, getLocale} from "next-intl/server";
import {BackgroundBeamsWithCollision} from "~/components/ui/background-beams-with-collision";
import {TypewriterEffectSmooth} from "~/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import UnderText from "~/app/_components/UnderText";


export default async function Home() {
    const t = await getTranslations('HomePage');
    const title = t("title");
    const cap = t("caption");
    const words = cap.split(" ").map(word => ({text: word}));


    const rtl = (await getLocale()) === "he";
    const dir   = rtl ? "rtl" : "ltr";
    const delay = 3.2;
  return (
<>
      <BackgroundBeamsWithCollision>
          <h2 className=" flex flex-row relative z-20 text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold font-bold text-center text-black dark:text-white font-sans tracking-tight" dir={dir}>
              <div className="mt-[.45rem] relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      <span className="">{title}</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                      <span className="">{title}</span>
                  </div>
              </div>
              &nbsp;
              <TypewriterEffectSmooth  className={"text-xl sm:text-xl md:text-3xl lg:text-5xl"} cursorClassName={"bg-gradient-to-b from-indigo-500 to-purple-500 "} words={words} />
              <UnderText text={t("underText")} delay={delay}/>
          </h2>
      </BackgroundBeamsWithCollision>
</>
  );
}
