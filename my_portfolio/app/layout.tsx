import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luke Knutson",
  description: "Luke Knutson's personal portfolio website built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/LK_icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className="min-h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
