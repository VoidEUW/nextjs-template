import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "../contexts/providers";
import { appConfig } from "@/config/general";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: appConfig.metadata.title,
    template: `%s - ${appConfig.metadata.title}`,
  },
  description: appConfig.metadata.description,
  icons: {
    icon: "/favicon.ico",
  },
  creator: appConfig.metadata.creator,
  keywords: appConfig.metadata.keywords,
  applicationName: appConfig.metadata.title
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B27B73" },
    { media: "(prefers-color-scheme: dark)", color: "#B27B73" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overscroll-none",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
