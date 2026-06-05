import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PINGME | 3초면, 새로운 인연 시작",
  description: "30~50대 남성을 위한 영상통화 소개팅 앱 핑미. 가입 후 3초면 새로운 인연과 연결됩니다. 영상통화로 진짜 대화를 시작하세요.",
  keywords: "소개팅, 영상통화, 데이트, 30대, 40대, 50대, 인연, 만남, 채팅, 핑미, PingMe",
  authors: [{ name: "PingMe" }],
  robots: "index, follow",
  verification: { google: "aODX6WRy5uX__gNtlBeYla5nNzmnC8xHi9hlRsKyGgM" },
  metadataBase: new URL("https://www.pingme.co.kr"),
  alternates: { canonical: "https://www.pingme.co.kr" },
  openGraph: {
    type: "website",
    url: "https://www.pingme.co.kr",
    title: "PINGME | 3초면, 새로운 인연 시작",
    description: "30~50대 남성을 위한 영상통화 소개팅 앱 핑미. 가입 후 3초면 새로운 인연과 연결됩니다.",
    images: [{ url: "https://www.pingme.co.kr/og-image.jpg" }],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "PINGME | 3초면, 새로운 인연 시작",
    description: "30~50대 남성을 위한 영상통화 소개팅 앱 핑미. 가입 후 3초면 새로운 인연과 연결됩니다.",
    images: ["https://www.pingme.co.kr/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PingMe",
              applicationCategory: "SocialNetworkingApplication",
              operatingSystem: "iOS, Android",
              description: "30~50대 남성을 위한 영상통화 소개팅 앱",
              offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1240",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
