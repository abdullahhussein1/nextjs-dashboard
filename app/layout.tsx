import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Moon Dashboard",
    default: "Moon Dashboard",
  },
  description: "The official Next.js Course Dashboard, build with App Router.",
  metadataBase: new URL("https://nextjs-ranya.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased cursor-fancy`}>
        {children}
      </body>
    </html>
  );
}
