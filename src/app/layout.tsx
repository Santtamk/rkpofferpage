import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const devanagari = localFont({ src: "../../public/assets/noto-sans-devanagari.ttf", display: "swap" });

export const metadata: Metadata = {
  title: "साथ जुड़ें, साथ पढ़ें | राजकमल प्रकाशन",
  description: "राजकमल प्रकाशन समूह — हिंदी पखवाड़ा ऑफर्स का फ्रंटएंड डेमो।",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="hi" className="scheme-light"><body className={`${devanagari.className} m-0 overflow-x-hidden bg-[#fffdfb] text-[#591416]`}>{children}</body></html>;
}
