"use client";
import { useState, useEffect, useRef } from "react";
import { reviews } from "./data";


const termsContent = `제 1장 총칙

제 1조 (목적)
본 약관은 주식회사 핑미(이하 "회사")가 운영하는 서비스 "핑미"(이하 "본 서비스")를 이용하는 회원 간 또는 회원과 회사 간의 권리, 의무, 책임사항 및 회원의 본 서비스 이용조건 및 절차 등 기본적인 사항을 규정하여 회원의 권익을 보호함을 목적으로 합니다.

제 2조 (약관의 효력 및 변경)
① 본 약관은 본 서비스를 이용하고자 하는 모든 회원에게 그 효력을 발생합니다.
② 본 약관의 내용은 회사가 본 서비스의 인터넷 홈페이지(www.pingme.co.kr, 이하 "홈페이지") 또는 본 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지하고, 회원이 이에 동의하면 효력이 발생합니다.
③ 회사는 필요하다고 인정되면 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 때에는 적용일자와 변경사유를 밝혀 그 적용일자 7일 전부터 공지합니다. 다만, 회원에게 불리한 약관 변경의 경우 그 적용일자 30일 전부터 공지하며, 이메일 또는 문자메시지 등으로 회원에게 개별 통지합니다.
④ 회원이 변경된 약관의 효력 발생일까지 거부 의사를 표시하지 않으면 변경 약관에 동의한 것으로 간주합니다.
⑤ 본 약관에 동의하는 것은 회사가 운영하는 홈페이지를 정기적으로 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다.
⑥ 회사는 이용자가 요구하면 본 약관의 사본을 이용자에게 교부하며, 이용자가 홈페이지에서 본 약관을 인쇄할 수 있도록 조치합니다.

제3조 (약관 외 준칙)
① 본 약관에 밝히지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령 및 회사가 정한 서비스의 세부이용지침 등의 규정을 따릅니다.
② 회사는 필요하면 특정 서비스에 적용될 사항(이하 "개별약관")을 정하여 공지할 수 있습니다.

제4조 (용어의 정의)
① 본 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.
1. 본 서비스: 회사가 제공하는 디지털 콘텐츠 중개 서비스 및 관련 정보 제공·유통 서비스
2. 회원: 본 약관에 동의하고 본 서비스를 이용하는 개인 고객
3. 쿠키: 회원이 APP 내에서 유료 콘텐츠를 사용하고 그 대가를 지급하는데 사용할 수 있는 지급수단
4. 인앱결제: 회원이 본 서비스를 통해 유료상품을 구매할 때 적용되는 결제수단 및 그 서비스

제2장 서비스 이용계약

제5조 (이용신청)
① 본 서비스에 가입하여 서비스를 이용하고자 하는 자는 휴대용 단말기에서 본 약관에 동의하고, 해당 단말기를 등록하여 가입 절차를 밟습니다.
② 회사는 문자메시지(SMS) 인증 등 본인을 확인할 수 있는 인증 절차를 요구할 수 있습니다.
③ 본인의 관리 소홀로 타인이 본인 명의의 인증절차를 수행하거나 본인이 타인의 명의를 무단으로 사용하여 인증을 수행했을 때 발생하는 불이익에 대해 회사는 책임을 지지 않습니다.

제6조 (이용계약의 성립)
이용계약은 가입신청자가 본 약관의 내용에 대하여 동의한 후 회원가입을 신청하고, 회사가 위 신청을 승낙하면 체결됩니다.

제7조 (이용신청에 대한 승낙 유보 및 서비스 이용의 제한)
① 회사는 다음 각 호에 해당하는 신청은 승낙을 유보하거나 거부할 수 있습니다.
1. 다른 사람의 명의를 사용하거나 허위로 신청하는 경우
2. 기술상 서비스를 제공할 수 없는 경우
3. 회원 자격을 잃은 사실이 있는 경우
4. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우

제3장 서비스 이용

제8조 (서비스의 제공 내용)
① 회사는 회원에게 다음 각 호의 서비스를 제공합니다.
가. 회원 간 문자 서비스
나. 회원 간 음성통화 서비스
다. 회원 간 영상통화 서비스
라. 인앱 결제 서비스

제11조 (상품의 구매)
① 회사는 인앱상품을 구매회원에게 제공하여 구매회원이 결제할 수 있게 합니다.
② 미성년자인 회원이 법정 대리인의 동의 없이 상품을 구매하거나 계약 체결 후 법정 대리인이 추인하지 않으면 민법상 취소권을 행사할 수 있습니다.

제12조 (청약철회)
① 전자상거래 등에서의 소비자보호에 관한 법률 등 관련법령에 따라 구매회원은 청약철회를 요청할 수 있습니다.
② 유료 재화를 구매한 이후 사용 내용이 없을 시에는 환불 접수가 가능하나, 포인트를 소모한 경우에는 환불이 불가능합니다.

제13조 (서비스의 변경 및 중단)
회사는 다음 각 호에 해당하면 본 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.
1. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
2. 기타 천재지변, 국가비상사태 등 불가항력의 사유가 있는 경우

제14조 (서비스 이용료)
회사는 본 서비스의 일부 특정 서비스 또는 기능을 제공할 때 포인트를 소모합니다.

제4장 계약당사자의 의무

제20조 (회사의 의무)
① 회사는 본 서비스 제공과 관련하여 알게 된 회원의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다.
② 회사는 회원의 불만사항이 접수되면 이를 신속하게 처리해야 합니다.
③ 회사가 제공하는 서비스로 회원에게 손해가 발생하였다면 회사의 고의나 과실이 있을 때에만 책임을 부담하며, 그 범위는 통상손해에 한정됩니다.

제21조 (회원의 의무)
① 회원은 본 서비스를 이용할 때 다음 각 호에 해당하는 행위를 해서는 안 됩니다.
1. 이용신청 또는 개인정보 변경 때 거짓된 정보를 적거나 타인의 정보를 무단으로 사용하는 행위
2. 타인의 명예를 손상하거나 불이익을 주는 행위
3. 게시판 등에 음란물을 게재하거나 음란 사이트를 연결하는 행위
4. 본 서비스 운영을 고의로 방해하는 행위
5. 기타 불법적이거나 부당한 행위

제5장 계약해지 및 이용제한

제25조 (계약해지 및 이용제한)
① 회원은 언제든지 이용계약을 해지할 수 있습니다. 회원탈퇴로 발생한 불이익은 회원 본인이 책임져야 합니다.
② 회사는 제21조 제1항 위반 등을 이유로 회원과의 이용계약을 해지하거나 서비스 이용을 제한할 수 있습니다.
③ 회사는 회원 가입 후 6개월 동안 본 서비스를 사용한 이력이 없는 회원에게는 서비스 이용 여부를 묻는 고지를 하고, 기한 내 답변이 없으면 이용계약을 해지할 수 있습니다.

제26조 (양도 금지)
회원은 서비스의 이용 권한과 기타 이용 계약상 지위를 타인에게 양도하거나 증여할 수 없으며, 담보로 제공할 수 없습니다.

제6장 손해배상 등

제27조 (손해배상)
① 본 약관의 규정을 위반하여 회사에 손해를 끼친 회원은 회사에 발생한 통상의 손해를 배상할 책임이 있습니다.
② 회원이 본 서비스를 이용하면서 불법행위를 하여 회사가 제3자로부터 손해배상 청구 등을 받는다면 회사는 해당 회원에게 구상권을 행사할 수 있습니다.

제28조 (면책사항)
① 회사는 천재지변 또는 이에 준하는 불가항력으로 본 서비스를 제공할 수 없는 때에는 책임이 면제됩니다.
② 회사는 회원의 귀책사유에 기인한 서비스 이용장애에 대해 책임을 지지 않습니다.
③ 본 서비스를 매개로 회원 상호 간 또는 회원과 제3자 간에 분쟁이 발생했을 때 회사는 고의 또는 과실이 없는 한 분쟁으로 인한 손해를 배상할 책임이 없습니다.

제29조 (분쟁의 해결)
① 회사와 회원 사이에 분쟁이 발생하면 성실히 협의합니다.
② 협의에서도 분쟁이 해결되지 않아 소송이 제기되었을 때, 관할법원은 민사소송법 등 관련 법령에 따른 관할법원으로 정합니다.

제30조 (회원가입시 필수 동의)

[외부 만남 관련 고지]
회원이 앱 외부에서 진행하는 만남은 전적으로 회원의 판단과 책임 하에 이루어지며, 외부 만남 과정에서 발생할 수 있는 폭행, 성범죄, 금전 피해, 사기 등 일체의 분쟁·범죄 및 손해에 대하여 회사는 원칙적으로 책임을 부담하지 않습니다.

[미성년자 이용 금지]
본 서비스는 만 19세 미만은 이용할 수 없습니다. 회원이 연령 정보를 허위로 제공하거나 타인의 정보를 이용하여 가입·이용함으로써 발생하는 불이익 및 법적 책임은 해당 회원에게 있습니다.

[캡처·녹화·유출 금지]
회원은 서비스 이용 중 상대방 동의 없는 캡처, 녹화, 녹음, 유출, 복제, 공유, 게시가 금지됨을 확인하고 준수합니다. 회사는 기술적 보호 조치를 제공할 수 있으나 운영체제·단말·외부장비 등의 사유로 완전한 차단을 보장할 수 없습니다.

부칙
본 약관은 2026년 6월 5일부터 시행됩니다.`;

const privacyContent = `주식회사 핑미(이하 "회사")는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보 보호법 등 개인정보와 관련된 법령을 준수하며, 이용자 권익 보호에 최선을 다하고 있습니다.

1. 개인정보 수집항목 및 수집방법

① 회사는 회원가입, 원활한 고객상담, 각종 서비스의 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.
1. 이름, 아이디, 비밀번호, E-mail, 이동통신사, 휴대폰번호, 성별, 나이
2. (네이버, 카카오 로그인시) 이메일, 전화번호, 성별, 생년월일
3. 서비스 이용 기록, 접속로그, 쿠키, 접속IP정보, 결제기록, 불량이용기록

② 수집 방법: 홈페이지, 어플리케이션, 회원가입, 상담 게시판, 이메일, 이벤트 응모 등

2. 개인정보의 수집 및 이용 목적

① 회사는 수집한 개인정보를 다음의 목적을 위해 처리합니다.
1. 서비스 제공 및 요금정산: 콘텐츠 제공, 본인인증, 구매 및 요금 결제
2. 회원관리: 본인 확인, 불량 회원의 부정 이용 방지, 가입 의사 확인, 연령 확인, 분쟁 조정을 위한 기록 보존
3. 신규 서비스 개발 및 마케팅·광고: 신규 서비스 개발, 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공
4. 제휴 서비스: 회사는 서비스 활성화를 위하여 적법한 절차를 거쳐 제휴사와 정보를 공유할 수 있습니다.

3. 개인정보의 처리 및 보유기간

① 이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다.
단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

- 계약 또는 청약철회에 관한 기록: 5년 (전자상거래법)
- 대금결제 및 재화 공급에 관한 기록: 5년 (전자상거래법)
- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)
- 로그기록 관련 접속기록: 3개월 (통신비밀보호법)
- 전자금융거래기록: 5년 (전자금융거래법)

4. 개인정보 파기절차 및 방법

① 회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
1. 문서 등 출력된 개인정보: 분쇄기로 분쇄하거나 소각하여 파기
2. 전자적 파일 형태로 저장된 개인정보: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제

5. 개인정보의 제3자 제공

회사는 원칙적으로 이용자의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우를 제외하고는 사전 동의 없이 제3자에게 제공하지 않습니다.
1. 정보주체로부터 별도의 동의를 받은 경우
2. 다른 법률에 특별한 규정이 있는 경우
3. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우

6. 개인정보처리 위탁

회사는 원활한 서비스 제공을 위하여 제3자에게 개인정보처리를 위탁할 수 있습니다.
이 경우 회사는 위탁 기관 및 위탁 업무 내용을 공지합니다.

7. 정보주체의 권리와 행사방법

① 이용자는 언제든지 등록된 자신의 개인정보를 조회, 수정, 삭제 요청할 수 있으며 가입 해지를 요청할 수도 있습니다.
② '회원정보수정' 또는 '회원탈퇴'를 통해 직접 처리 가능합니다.
③ 이용자는 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락할 수 있습니다.

8. 개인정보 자동 수집 장치

① 회사는 이용자들에게 맞춤 서비스를 제공하기 위해 쿠키(cookie)를 사용합니다.
② 이용자는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
③ 회사는 이용자에게 적합한 광고 서비스를 제공하기 위해 광고 식별자와 분석 소프트웨어를 사용합니다.
- 마케팅 분석 툴: AppsFlyer
- 안드로이드 마케팅 정보 수신 차단: [설정 > 구글 > 개인정보 보호 > 마케팅 정보 수신] 선택 해제
- 안드로이드 맞춤형 광고 차단: [설정 > 구글 > 개인정보 보호 > 광고] 에서 선택 해제
- iOS 맞춤형 광고 차단: [설정 > 개인정보 보호 > Apple 광고] 에서 선택 해제

9. 개인정보보호 관리책임자

이름: 오민형
이메일: jkmoon.dev@gmail.com

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우:
- 개인정보침해신고센터: privacy.kisa.or.kr / 국번없이 118
- 대검찰청 사이버수사과: www.spo.go.kr / 국번없이 1301
- 경찰청 사이버안전국: cyberbureau.police.go.kr / 국번없이 182

10. 개인정보의 안전성 확보 조치

① 기술적 대책
- 비밀번호 암호화 저장 및 관리
- 해킹 방지를 위한 침입 차단 장치 운영 (24시간 365일)
- 백신프로그램을 이용한 바이러스 방지 조치

② 관리적 대책
- 개인정보 접근권한을 최소한의 인원으로 제한
- 마케팅, 이벤트, 고객지원, 서비스운영 업무 수행자
- 개인정보관리책임자 및 개인정보관리업무 수행자

11. 고지의무

회사는 개인정보처리방침을 개정하는 경우 7일전 웹사이트 또는 앱 내 공지사항을 통하여 공지할 것입니다.

부칙
개인정보처리방침 시행일자: 2024년 10월 21일`;





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
  const [modal, setModal] = useState<null | "terms" | "privacy">(null);
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{minHeight: "100svh"}}>
        {/* 배경 영상 */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{minHeight: "100%", minWidth: "100%"}}>
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
            지금 핑미에,<br />
            <span className="text-white font-bold">당신을 기다리는 사람이 있습니다.</span>
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


      {/* 실시간 매칭 현황 */}
      <section className="py-20 px-4 overflow-hidden relative" style={{background: "linear-gradient(180deg, #0D0D1A 0%, rgba(168,40,120,0.15) 50%, #0D0D1A 100%)"}}>
        <div className="text-center mb-10">
          <span className="text-[#FF2D78] font-bold text-sm uppercase tracking-widest italic block mb-3">
            🔴 실시간 매칭 현황
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            지금 이 순간, 누군가 새로운 인연을 만나고 있습니다
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-[scrollMatch_60s_linear_infinite] whitespace-nowrap" style={{width: "max-content"}}>
            {[
              { names: ["주원", "하은"], msg: "님과 {1}님이 연결되었습니다", time: "방금" },
              { names: ["50대", "40대"], msg: " 회원님과 {1} 회원님이 영상통화 중입니다", time: "12초 전" },
              { names: ["", "10분"], msg: "대화가 {1}을 넘었습니다 🎊", time: "18초 전" },
              { names: ["승우", ""], msg: "님이 대화를 시작했습니다", time: "22초 전" },
              { names: ["", "매칭 성공!"], msg: "새로운 커플이 {1} 💑", time: "29초 전" },
              { names: ["준서", "민서"], msg: "님과 {1}님이 연결되었습니다", time: "35초 전" },
              { names: ["건우", ""], msg: "님이 접속했습니다 🌴", time: "41초 전" },
              { names: ["", "3분"], msg: "첫 통화가 {1}을 넘었습니다 ⏱️", time: "47초 전" },
              { names: ["하준", "윤서"], msg: "님과 {1}님이 연결되었습니다", time: "53초 전" },
              { names: ["35세", "42세"], msg: " 회원님과 {1} 회원님이 대화 중입니다", time: "방금" },
              { names: ["시우", ""], msg: "님이 매칭을 시작했습니다", time: "8초 전" },
              { names: ["", "15분"], msg: "대화가 {1}을 넘었습니다 🔥", time: "14초 전" },
              { names: ["연우", "유진"], msg: "님과 {1}님이 연결되었습니다", time: "19초 전" },
              { names: ["", "매칭 성공!"], msg: "새로운 커플이 {1} ❤️", time: "26초 전" },
              { names: ["수호", ""], msg: "님이 대화를 시작했습니다", time: "31초 전" },
              { names: ["45세", "38세"], msg: " 회원님과 {1} 회원님이 영상통화 중입니다", time: "38초 전" },
              { names: ["정우", "서윤"], msg: "님과 {1}님이 연결되었습니다", time: "50초 전" },
              { names: ["민재", ""], msg: "님이 매칭을 시작했습니다", time: "56초 전" },
              { names: ["", "매칭 성공!"], msg: "새로운 커플이 {1} 🎉", time: "방금" },
              { names: ["동현", "예린"], msg: "님과 {1}님이 연결되었습니다", time: "20초 전" },
            ].concat([
              { names: ["주원", "하은"], msg: "님과 {1}님이 연결되었습니다", time: "방금" },
              { names: ["50대", "40대"], msg: " 회원님과 {1} 회원님이 영상통화 중입니다", time: "12초 전" },
              { names: ["", "10분"], msg: "대화가 {1}을 넘었습니다 🎊", time: "18초 전" },
              { names: ["승우", ""], msg: "님이 대화를 시작했습니다", time: "22초 전" },
              { names: ["", "매칭 성공!"], msg: "새로운 커플이 {1} 💑", time: "29초 전" },
              { names: ["준서", "민서"], msg: "님과 {1}님이 연결되었습니다", time: "35초 전" },
              { names: ["건우", ""], msg: "님이 접속했습니다 🌴", time: "41초 전" },
              { names: ["", "3분"], msg: "첫 통화가 {1}을 넘었습니다 ⏱️", time: "47초 전" },
              { names: ["하준", "윤서"], msg: "님과 {1}님이 연결되었습니다", time: "53초 전" },
              { names: ["35세", "42세"], msg: " 회원님과 {1} 회원님이 대화 중입니다", time: "방금" },
              { names: ["시우", ""], msg: "님이 매칭을 시작했습니다", time: "8초 전" },
              { names: ["", "15분"], msg: "대화가 {1}을 넘었습니다 🔥", time: "14초 전" },
              { names: ["연우", "유진"], msg: "님과 {1}님이 연결되었습니다", time: "19초 전" },
              { names: ["", "매칭 성공!"], msg: "새로운 커플이 {1} ❤️", time: "26초 전" },
              { names: ["수호", ""], msg: "님이 대화를 시작했습니다", time: "31초 전" },
              { names: ["45세", "38세"], msg: " 회원님과 {1} 회원님이 영상통화 중입니다", time: "38초 전" },
              { names: ["정우", "서윤"], msg: "님과 {1}님이 연결되었습니다", time: "50초 전" },
              { names: ["민재", ""], msg: "님이 매칭을 시작했습니다", time: "56초 전" },
              { names: ["", "매칭 성공!"], msg: "새로운 커플이 {1} 🎉", time: "방금" },
              { names: ["동현", "예린"], msg: "님과 {1}님이 연결되었습니다", time: "20초 전" },
            ]).map((item, i) => (
              <div key={i} className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-full mx-2 flex-shrink-0">
                <div className="flex -space-x-2">
                  <span className="w-10 h-10 rounded-full bg-[#8C1911] flex items-center justify-center text-lg border-2 border-[#0D0D1A]">👨</span>
                  <span className="w-10 h-10 rounded-full bg-[#8C1911] flex items-center justify-center text-lg border-2 border-[#0D0D1A]">👩</span>
                </div>
                <span className="text-white font-medium text-sm">
                  {item.names[0] && <strong className="text-[#FF2D78]">{item.names[0]}</strong>}
                  {item.msg.split("{1}")[0]}
                  {item.names[1] && <strong className="text-[#FF2D78]">{item.names[1]}</strong>}
                  {item.msg.split("{1}")[1] || ""}
                </span>
                <span className="text-white/40 text-xs ml-2 flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
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
                  {item.label && <span className="text-5xl md:text-6xl font-black gradient-text ml-1">{item.label}</span>}
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
              핑미는<br /><span className="gradient-text">다릅니다</span>
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
              <div key={i} className="group" style={{perspective: "1000px"}}>
                <div className="relative w-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{transformStyle: "preserve-3d", minHeight: "220px"}}>
                  {/* 앞면 */}
                  <div className="absolute inset-0 review-card rounded-2xl p-5 flex flex-col overflow-hidden" style={{backfaceVisibility: "hidden"}}>
                    <div className="flex gap-0.5 mb-3 flex-shrink-0">
                      {Array(r.stars).fill(0).map((_, j) => (
                        <span key={j} className="text-[#FF2D78] text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-[#AAAACC] text-xs leading-relaxed flex-1 overflow-hidden" style={{display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical", overflow: "hidden"}}>"{r.text}"</p>
                    <div className="border-t border-white/5 pt-3 mt-3 flex-shrink-0">
                      <p className="text-white font-bold text-sm">{r.name}</p>
                      <p className="text-[#AAAACC] text-xs">{r.age}세 · {r.job}</p>
                    </div>
                  </div>
                  {/* 뒷면 */}
                  <div className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)]" style={{backfaceVisibility: "hidden", background: "linear-gradient(135deg, #FF2D78, #A855F7)"}}>
                    <div className="flex gap-1 mb-4">
                      {Array(r.stars).fill(0).map((_, j) => (
                        <span key={j} className="text-white text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-white font-black text-2xl mb-1">{r.name}</p>
                    <p className="text-white/80 text-sm mb-4">{r.age}세 · {r.job}</p>
                    <div className="w-12 h-0.5 bg-white/40 mb-4" />
                    <p className="text-white/90 text-xs leading-relaxed">"{r.text.slice(0, 60)}..."</p>
                  </div>
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
              <button onClick={() => setModal("terms")} className="hover:text-white transition-colors">이용약관</button>
              <span>|</span>
              <button onClick={() => setModal("privacy")} className="hover:text-white transition-colors">개인정보처리방침</button>
            </div>
          </div>
          <div className="text-center text-[#AAAACC] text-xs mt-8">
            © 2026 주식회사 핑미. All Rights Reserved.
          </div>
        </div>
      </footer>


      {/* 이용약관/개인정보처리방침 모달 */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative bg-[#0D0D1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
              <h2 className="text-white font-black text-lg gradient-text">
                {modal === "terms" ? "이용약관" : "개인정보처리방침"}
              </h2>
              <button onClick={() => setModal(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white text-xl">✕</button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <pre className="text-[#AAAACC] text-xs leading-relaxed whitespace-pre-wrap font-sans">
                {modal === "terms" ? termsContent : privacyContent}
              </pre>
            </div>
            <div className="p-4 border-t border-white/10 flex-shrink-0">
              <button onClick={() => setModal(null)} className="w-full download-btn py-3 rounded-xl text-white font-bold text-sm">확인</button>
            </div>
          </div>
        </div>
      )}
      {/* 이용약관/개인정보처리방침 모달 */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative bg-[#0D0D1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
              <h2 className="text-white font-black text-lg gradient-text">
                {modal === "terms" ? "이용약관" : "개인정보처리방침"}
              </h2>
              <button onClick={() => setModal(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white text-xl">✕</button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <pre className="text-[#AAAACC] text-xs leading-relaxed whitespace-pre-wrap font-sans">
                {modal === "terms" ? termsContent : privacyContent}
              </pre>
            </div>
            <div className="p-4 border-t border-white/10 flex-shrink-0">
              <button onClick={() => setModal(null)} className="w-full download-btn py-3 rounded-xl text-white font-bold text-sm">확인</button>
            </div>
          </div>
        </div>
      )}
      {/* 이용약관/개인정보처리방침 모달 */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative bg-[#0D0D1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
              <h2 className="text-white font-black text-lg gradient-text">
                {modal === "terms" ? "이용약관" : "개인정보처리방침"}
              </h2>
              <button onClick={() => setModal(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white text-xl">✕</button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <pre className="text-[#AAAACC] text-xs leading-relaxed whitespace-pre-wrap font-sans">
                {modal === "terms" ? termsContent : privacyContent}
              </pre>
            </div>
            <div className="p-4 border-t border-white/10 flex-shrink-0">
              <button onClick={() => setModal(null)} className="w-full download-btn py-3 rounded-xl text-white font-bold text-sm">확인</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
