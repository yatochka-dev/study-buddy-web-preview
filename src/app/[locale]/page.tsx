import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import {Spotlight} from "~/components/ui/spotlight";
import {useTranslations, } from "next-intl";
import {getTranslations} from "next-intl/server";

export default async function Home() {
    const t = await getTranslations('HomePage');
    const title = t("title");
    const cap = t("caption");

  return (
    <HydrateClient>
        <div
            className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col">
                <h1 dangerouslySetInnerHTML={{__html: title}} className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {/*Study Buddy <br/>*/}
                    {/*Is the way to go {t("title")}*/}

                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center self-center">
                    {cap}
                    {/*Study Buddy is a mobile app that helps you study more efficiently. It's teacher-student collaboration feature allow teachers to give their students material in a better way.*/}

                </p>
            </div>
        </div>
    </HydrateClient>
  );
}
