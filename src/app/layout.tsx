import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import {routing} from "~/i18n/routing";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import {notFound, redirect} from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Study Buddy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function LocaleLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {
    // Ensure that the incoming `locale` is valid
    // if (!routing.locales.includes(locale as unknown as typeof routing.locales[number])) {
    //     redirect("/en");
    // }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

  return (
      <NextIntlClientProvider messages={messages}>

      <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
      </NextIntlClientProvider>

  );
}

export async function generateStaticParams() {
    const locales = ["en", "he", "ru"];
    return locales.map((locale) => ({ locale }));
}