import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "핑미 (PingMe) — 지금 이 순간, 그녀가 기다리고 있습니다",
  description: "핑미에서는 지금 접속 중인 여성과 바로 영상통화로 연결됩니다. 가입 30초, 연결 23초.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
