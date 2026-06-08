export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>핑미 PingMe</title>
    <link>https://www.pingme.co.kr</link>
    <description>30~50대 남성을 위한 영상통화 소개팅 앱 핑미. 가입 후 3초면 새로운 인연과 연결됩니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://www.pingme.co.kr/rss" rel="self" type="application/rss+xml"/>
    <item>
      <title>핑미 - 영상통화 소개팅 앱 출시</title>
      <link>https://www.pingme.co.kr</link>
      <description>30~50대 남성을 위한 영상통화 기반 소셜 매칭 앱 핑미가 출시되었습니다. 가입 후 23초면 새로운 인연과 연결됩니다.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>https://www.pingme.co.kr</guid>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
