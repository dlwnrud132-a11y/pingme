"use client";
import { useState, useEffect, useRef } from "react";

const reviews = [
  { name: "이민준", age: 45, job: "중소기업 부장", stars: 5, text: "퇴근하고 집에서 혼자 있는 게 일상이었는데, 핑미 켜면 30초 안에 누군가 연결돼요. 오늘 있었던 얘기 나누는 것만으로도 하루가 달라집니다." },
  { name: "박성호", age: 38, job: "프리랜서", stars: 5, text: "다른 앱은 보내도 씹히기 일쑤였는데, 여기는 지금 온라인인 사람만 나오니까 바로 반응이 와요. 대화가 진짜 된다는 느낌, 오랜만에 받았습니다." },
  { name: "김태원", age: 52, job: "자영업자", stars: 5, text: "녹화 걱정 없다고 해서 반신반의했는데 진짜더라고요. 덕분에 편하게 대화할 수 있어요. 지금은 매일 저녁에 습관처럼 켭니다." },
  { name: "정우석", age: 41, job: "직장인", stars: 5, text: "사진만 보고 연락했다가 실망한 게 한두 번이 아니었는데, 영상으로 직접 보고 얘기하니까 훨씬 솔직하고 좋아요. 이게 맞는 방식이다 싶었습니다." },
  { name: "최현석", age: 36, job: "IT 개발자", stars: 5, text: "주말에 심심할 때 켜는데 매번 다른 분이랑 이야기돼요. 취미 비슷한 분 만나서 두 시간 넘게 통화한 적도 있어요. 주말이 달라졌습니다." },
  { name: "강동현", age: 48, job: "회사원", stars: 5, text: "이혼하고 나서 사람이랑 대화하는 게 어색해졌는데, 핑미 쓰면서 다시 편하게 얘기할 수 있게 됐어요. 부담 없이 시작할 수 있어서 좋았습니다." },
  { name: "윤재호", age: 42, job: "영업직", stars: 5, text: "출장이 많아서 혼자 호텔 있는 날이 많거든요. 그럴 때 핑미 켜면 심심하지 않아요. 전국 어디서든 바로 연결되는 게 신기합니다." },
  { name: "손준혁", age: 34, job: "공무원", stars: 5, text: "처음엔 어색할 줄 알았는데 영상으로 보니까 오히려 더 편하더라고요. 얼굴 보고 대화하니까 문자보다 훨씬 자연스럽게 친해질 수 있었어요." },
];

function DownloadButtons({ size = "default" }: { size?: "default" | "large" }) {
  const btnClass = size === "large"
    ? "download-btn flex items-center gap-3 px-8 py-5 rounded-2xl font-black text-white text-lg"
    : "download-btn flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-white text-sm";
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://apps.apple.com/kr/app/pingme/id6761865607" target="_blank" rel="noopener noreferrer" className={btnClass}>
        <svg className={size === "large" ? "w-7 h-7" : "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        App Store
      </a>
      <a href="https://play.google.com/store/apps/details?id=net.ping.me" target="_blank" rel="noopener noreferrer" className={btnClass} style={{background: "linear-gradient(135deg, #A855F7, #FF2D78)"}}>
        <svg className={size === "large" ? "w-7 h-7" : "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.3.17.64.25.99.25.37 0 .74-.1 1.07-.29l11.93-6.93-2.54-2.54-11.45 9.51zM.25 1.13C.09 1.43 0 1.79 0 2.18v19.64c0 .39.09.75.25 1.05l.1.1 11-11v-.26L.35 1.03l-.1.1zM20.76 10.3l-2.56-1.49-2.84 2.84 2.84 2.84 2.58-1.5c.74-.43.74-1.27-.02-1.69zM4.17.54L16.1 7.47l-2.54 2.54L.63.5C.97.3 1.38.3 1.74.5l2.43 1.51V.54z"/>
        </svg>
        Google Play
      </a>
    </div>
  );
}

export default function Home() {
  const [onlineCount, setOnlineCount] = useState(2412);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(Math.floor(Math.random() * (2600 - 2200 + 1)) + 2200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D1A]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D1A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-xl tracking-tight">핑미 <span className="gradient-text">PingMe</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#AAAACC] hidden lg:block">
              <span className="pulse-pink inline-block w-2 h-2 bg-[#FF2D78] rounded-full mr-1.5"></span>
              {onlineCount.toLocaleString()}명 접속 중
            </span>
            <a href="https://apps.apple.com/kr/app/pingme/id6761865607" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="hidden sm:block">App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=net.ping.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-white/40 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.25.99.25.37 0 .74-.1 1.07-.29l11.93-6.93-2.54-2.54-11.45 9.51zM.25 1.13C.09 1.43 0 1.79 0 2.18v19.64c0 .39.09.75.25 1.05l.1.1 11-11v-.26L.35 1.03l-.1.1zM20.76 10.3l-2.56-1.49-2.84 2.84 2.84 2.84 2.58-1.5c.74-.43.74-1.27-.02-1.69zM4.17.54L16.1 7.47l-2.54 2.54L.63.5C.97.3 1.38.3 1.74.5l2.43 1.51V.54z"/>
              </svg>
              <span className="hidden sm:block">Google Play</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 배경 영상 */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* 영상 위 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/70 via-[#0D0D1A]/50 to-[#0D0D1A]/90 z-[1]" />
        {/* orb 효과 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2D78]/10 rounded-full blur-3xl z-[2]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl z-[2]" />

        <div className="relative z-10 text-center px-4 pt-24 pb-16 max-w-4xl mx-auto">
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 gradient-border px-4 py-2 rounded-full mb-8">
            <span className="pulse-pink inline-block w-2 h-2 bg-[#FF2D78] rounded-full"></span>
            <span className="text-sm font-bold text-[#AAAACC]">지금 {onlineCount.toLocaleString()}명 접속 중</span>
          </div>

          {/* 메인 헤드라인 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
            <span className="text-white block">3초면,</span>
            <span className="gradient-text block">새로운 인연</span>
            <span className="text-white block">시작</span>
          </h1>

          {/* 부제 */}
          <p className="text-xl md:text-2xl text-[#AAAACC] font-medium mb-4 leading-relaxed">
            지금 누군가<br />
            <span className="text-white font-bold">당신을 기다리고 있어요</span>
          </p>
          <p className="text-sm md:text-base text-[#AAAACC] mb-10">
            가입 30초 · 연결 23초 · 첫 영상통화 무료
          </p>

          {/* CTA 버튼 */}
          <div id="download">
            <DownloadButtons size="large" />
          </div>
        </div>

        {/* 스크롤 안내 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#AAAACC]">
          <span className="text-xs">스크롤</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#FF2D78] to-transparent"></div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-4 section-glow relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FF2D78] font-bold text-sm uppercase tracking-widest mb-4">THE PROBLEM</p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              왜 항상<br />
              <span className="gradient-text">나만 외로운</span> 걸까요?
            </h2>
            <p className="text-[#AAAACC] text-lg">
              30~50대 남성 10명 중 7명이<br />
              퇴근 후 말 한마디 나눌 상대가 없다고 답했습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "8%", label: "미만",
                title: "연락해도 읽지도 않는다",
                desc: "메시지 보내고 기다리다 지쳐서 포기. 하루 평균 3시간 그냥 날립니다.",
                sub: "기존 앱 평균 응답률"
              },
              {
                num: "68%", label: "",
                title: "실제로 어떤 사람인지 모른다",
                desc: "사진 한 장으로 모든 걸 판단해야 하는 현실. 만나보면 전혀 다른 사람인 경우가 태반입니다.",
                sub: "프로필과 달랐던 경험"
              },
              {
                num: "4명", label: "중 1",
                title: "첫 메시지조차 못 보낸다",
                desc: "뭘 써야 할지 모르겠고, 보내기도 민망하고. 시작조차 못 하고 끝납니다.",
                sub: "남성 10명 중 앱을 그냥 닫는"
              },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 text-center">
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-black gradient-text">{item.num}</span>
                  {item.label && <span className="text-2xl font-black text-white ml-1">{item.label}</span>}
                </div>
                <p className="text-[#AAAACC] text-xs mb-4">{item.sub}</p>
                <h3 className="text-white font-black text-lg mb-3">{item.title}</h3>
                <p className="text-[#AAAACC] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0a1e]/30 to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#A855F7] font-bold text-sm uppercase tracking-widest mb-4">THE SOLUTION</p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              핑미가<br /><span className="gradient-text">다릅니다</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: "📹",
                num: "23초",
                title: "영상통화 즉시 연결",
                quote: "얼굴 보고 대화하니까 어색함이 없습니다.",
                stats: [
                  { label: "대기 시간", value: "제로" },
                  { label: "첫 대화 만족도", value: "91%" },
                  { label: "재접속률", value: "4.7회/일" },
                  { label: "평균 통화", value: "18분" },
                ],
                desc: "지금 접속 중인 상대만 표시 — 연결 즉시 시작"
              },
              {
                icon: "🟢",
                num: "28초",
                title: "실시간 온라인 확인",
                quote: "연락했는데 안 받는 경우? 핑미엔 없습니다.",
                stats: [
                  { label: "응답 대기 단축", value: "94%" },
                  { label: "동시 접속", value: "2,400명+" },
                  { label: "대화 시작", value: "28초" },
                  { label: "응답률", value: "95%+" },
                ],
                desc: "지금 바로 대화 가능한 상대만 보여드립니다"
              },
              {
                icon: "🔒",
                num: "100%",
                title: "녹화·캡처 완전 차단",
                quote: "걱정 마세요. 기술적으로 완전 차단됩니다.",
                stats: [
                  { label: "캡처 차단", value: "100%" },
                  { label: "안전 만족도", value: "96점" },
                  { label: "신고 처리", value: "3분 이내" },
                  { label: "허위 프로필", value: "없음" },
                ],
                desc: "우리 둘만의 대화입니다"
              },
            ].map((svc, i) => (
              <div key={i} className="service-card rounded-3xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-2xl">
                      {svc.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-black gradient-text">{svc.num}</span>
                      <span className="text-white font-black text-xl">{svc.title}</span>
                    </div>
                    <p className="text-[#AAAACC] italic mb-4">"{svc.quote}"</p>
                    <p className="text-white font-bold mb-6">{svc.desc}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {svc.stats.map((s, j) => (
                        <div key={j} className="glass-card rounded-xl p-3 text-center">
                          <div className="text-lg font-black gradient-text">{s.value}</div>
                          <div className="text-[#AAAACC] text-xs mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 section-glow">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FF2D78] font-bold text-sm uppercase tracking-widest mb-4">REVIEWS</p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              핑미를 쓰는<br />
              <span className="gradient-text">남자들의 솔직한 이야기</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="review-card rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array(r.stars).fill(0).map((_, j) => (
                    <span key={j} className="text-[#FF2D78] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#AAAACC] text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white font-bold text-sm">{r.name}</p>
                  <p className="text-[#AAAACC] text-xs">{r.age}세 · {r.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D78]/10 via-transparent to-[#A855F7]/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#FF2D78]/30 to-transparent" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="gradient-border rounded-3xl p-12 md:p-16">
            <p className="text-[#FF2D78] font-bold text-sm uppercase tracking-widest mb-6">지금 시작하세요</p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              오늘 밤,<br />
              <span className="gradient-text">혼자 있지 않아도</span><br />
              됩니다.
            </h2>
            <p className="text-[#AAAACC] text-lg mb-4">
              지금 핑미를 다운받으면<br />
              <span className="text-white font-bold">23초 후 그녀와 연결됩니다.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-[#AAAACC] mb-10">
              <span>✔ 가입 즉시 매칭 시작</span>
              <span className="hidden sm:block">·</span>
              <span>✔ 첫 영상통화 <span className="text-[#FF2D78] font-bold">무료</span></span>
              <span className="hidden sm:block">·</span>
              <span>✔ 언제든 탈퇴 가능</span>
            </div>

            <DownloadButtons size="large" />

            <p className="mt-8 text-[#AAAACC] text-sm">
              <span className="pulse-pink inline-block w-2 h-2 bg-[#FF2D78] rounded-full mr-2"></span>
              지금 이 순간 <span className="text-white font-bold">{onlineCount.toLocaleString()}명 이상</span>이 핑미에 접속 중
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-black">핑미 PingMe</span>
            </div>
            <div className="text-center text-[#AAAACC] text-sm space-y-1">
              <p>주식회사 핑미 | 서울특별시 강남구 학동로 165, 2층 208호</p>
              <p>고객지원: <a href="mailto:pingme.support@gmail.com" className="text-[#FF2D78] hover:underline">pingme.support@gmail.com</a></p>
            </div>
            <div className="flex gap-4 text-xs text-[#AAAACC]">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            </div>
          </div>
          <div className="text-center text-[#AAAACC] text-xs mt-8">
            © 2026 주식회사 핑미. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
