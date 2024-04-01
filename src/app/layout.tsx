import "~/styles/globals.css";

import { Mulish } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Elude analytics",
  description: "Free, open-source, and non-evasive analytics for your website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen font-sans ${mulish.variable}`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
