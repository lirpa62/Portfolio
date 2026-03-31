export const meta = {
  name: "남기성",
  nickname: "Lirpa",
  title: "Frontend Developer",
  tagline: "불편한 지점을 빠르게 발견하고 \n실제로 쓰이는 도구로 해결합니다.",
  email: "danielnam426@gmail.com",
  github: "https://github.com/lirpa62",
  education: "B.S. Computer Engineering, Pukyong National University",
};

export const projects = {
  "CHZZK Tools": [
    {
      id: "con-chzzk",
      name: "Con-Chzzk",
      desc: "치지직 스트리머 알림 확장 프로그램",
      period: "2025.08 ~",
      url: "https://github.com/lirpa62/Con-Chzzk",
      image: "",
      tags: ["JavaScript", "Chrome Extensions"],
      chromeId: "fndooehkehemlimfeemnfpmnkdjfpcjf",
      whaleGistId: "6d270190a0e1692961df16cde21eb691",
      gistTitle: "Con-Chzzk-Whale-Users",
      problem:
        "치지직의 모바일 앱에서는 라이브 시작과 다시보기 업로드 알림을 제공하지만 PC 브라우저에서는 아무런 알림 수단이 없었습니다. 이전 트위치 이용자들과 커뮤니티에서도 동일한 불편을 토로하는 이용자가 많았습니다. 여러 스트리머를 팔로우하는 사용자일수록 매번 사이트에 직접 들어가 확인해야 하는 과정이 반복적이고 비효율적이었습니다.",
      solution:
        "팔로우한 스트리머의 라이브 시작, 다시보기 업로드, 카테고리 변경, 제목 변경, 커뮤니티 게시글 작성, 치지직 공지사항, 배너 등을 브라우저 알림으로 받을 수 있는 확장 프로그램을 개발했습니다. 모바일 앱이 제공하지 않는 카테고리 변경, 커뮤니티 알림까지 지원하여 차별점을 만들었습니다.\n\n알림의 실시간성과 API 부하 사이의 균형이 핵심 설계 과제였습니다. 치지직 API의 rate limit을 고려하여 알림 유형별로 폴링 주기를 차등 적용했습니다. 라이브 시작 및 종료처럼 즉시성이 중요한 알림은 1분 간격으로 커뮤니티 게시글, 공지사항, 배너 등 상대적으로 덜 긴급한 알림은 2~4분 간격으로 조회합니다. 이 전략으로 API 차단 없이 안정적인 알림 전달을 유지하고 있습니다.",
      result:
        "Chrome/Whale/Edge/Firefox 웹 스토어에 배포하여 Chrome 633명, Whale 282명의 실사용자에게 서비스 중입니다. 사용자 피드백을 반영해 지속적으로 기능을 개선하고 있으며 Background/Content/Popup 구조의 확장 프로그램 아키텍처를 직접 설계 및 구현한 경험을 쌓았습니다.",
    },
    {
      id: "cheemoticon-cleaner",
      name: "Cheemoticon-Cleaner",
      desc: "이모티콘 목록 정리 확장 프로그램 (시리즈 최다 사용자)",
      period: "2025.08 ~",
      url: "https://github.com/lirpa62/Cheemoticon-Cleaner",
      image: "",
      tags: ["JavaScript", "Chrome Extensions"],
      chromeId: "ailgppmceifogibkmdpdonfginhkfhca",
      whaleGistId: "0a916900bf2fe7e32dfaeac9a037204c",
      gistTitle: "cheemo-users",
      problem:
        "치지직 채팅에서 이모티콘을 사용할 때마다 '최근 사용한 이모티콘' 목록에 계속 쌓여서 원하는 이모티콘을 찾기 어려워지는 사소하지만 반복적인 불편이 있었습니다.",
      solution:
        'Content Script에서 치지직 채팅창의 DOM을 탐색 및 조작하여 이모티콘 목록의 개별/일괄 삭제 기능을 구현했습니다. 배포 후 사용자들로부터 "채팅창 이모티콘을 아예 숨기는 기능", "이모티콘 크기 조절 기능", "이모티콘 위치 조절" 등을 요청받아 추가 개발했습니다.\n\n치지직 페이지의 DOM 구조가 업데이트될 때마다 셀렉터가 깨지는 문제가 발생했는데 MutationObserver 기반으로 DOM 변경을 감지하고 대응하는 구조를 설계하여 플랫폼의 빈번한 UI 업데이트에도 안정적으로 운영 중입니다.',
      result:
        "Chrome 634명, Whale 356명으로 시리즈 최다 사용자를 기록하고 있습니다. 사용자 피드백을 반영해 이모티콘 숨김, 크기 조절, 위치 조절 등 3가지 기능을 추가 개발했으며 MutationObserver 기반 DOM 변경 대응으로 플랫폼 업데이트에도 에러 리포트 없이 안정적으로 운영 중입니다.",
    },
    {
      id: "chzzk-grinder",
      name: "Chzzk-Grinder",
      desc: "클린 시청 도구 (UID 확인·차단·증거 수집)",
      period: "2025.12 ~",
      url: "https://github.com/lirpa62/Chzzk-Grinder",
      image: "",
      tags: ["JavaScript", "Chrome Extensions"],
      chromeId: "igiaeniadpmojahgllpodpfmedblaalb",
      problem:
        "치지직 시청 중 악성 채팅이 발생했을 때 해당 사용자의 UID를 확인하거나 증거를 수집하기 어려웠습니다. 기존 플랫폼 기능만으로는 효과적으로 대응하기 힘들었습니다.",
      solution:
        "UID 확인, 댓글 차단, PNG/PDF 형태의 증거 수집 기능을 하나의 확장 프로그램으로 통합하여 클린 시청 환경을 지원하는 도구를 개발했습니다.",
      result:
        "Chrome 164명, Whale 63명의 실사용자에게 서비스 중입니다. 여러 기능을 하나의 UI에 통합하면서 복합 기능의 확장 프로그램 설계 경험을 쌓았습니다.",
    },
    {
      id: "chzzk-logpower-eraser",
      name: "Chzzk-Logpower-Eraser",
      desc: "통나무 파워 채널 숨김 확장 프로그램",
      period: "2026.02 ~",
      url: "https://github.com/lirpa62/Chzzk-Logpower-Eraser",
      image: "",
      tags: ["JavaScript", "Chrome Extensions"],
      chromeId: "npghhgjfapajogklmofacjfmpliolmjc",
      problem:
        "치지직의 통나무 파워 목록에 원하지 않는 채널이 표시되어 관리가 번거로웠습니다.",
      solution:
        "특정 채널을 통나무 파워 목록에서 숨길 수 있는 확장 프로그램을 개발했습니다.",
      result:
        "Chrome 80명, Whale 20명의 실사용자에게 서비스 중입니다. 사용자 요청을 받고 당일에 개발부터 배포까지 완료하여 아이디어 발견부터 배포까지의 사이클을 최소화한 프로젝트입니다.",
    },
  ],
  "Web / Data": [
    {
      id: "mail-on",
      name: "Mail-On",
      desc: "대학 취업게시물 메일 구독 웹 서비스",
      period: "2025.05 ~",
      url: "https://github.com/lirpa62/Mail-On",
      image: "/images/projects/mail-on.png",
      imageType: "landscape" as const,
      tags: ["React", "TypeScript", "Express", "Supabase"],
      live: "https://mail-on.vercel.app",
      problem:
        "부경대 컴퓨터·인공지능공학부 취업 준비를 하면서 학과 홈페이지의 취업 게시판을 매번 직접 들어가 확인하는 과정이 반복적이었습니다. 주변 동기들에게 물어보니 취업 게시물이 올라온다는 사실 자체를 모르는 경우도 있었습니다.",
      solution:
        "React + TypeScript로 구독 신청 UI를 구현했습니다. 이메일 입력 → 인증 코드 발송 → 코드 검증 → 구독 완료의 다단계 폼에서, 사용자가 인증 도중 페이지를 이탈하거나 새로고침해도 진행 상태가 유지되도록 localStorage에 상태를 저장하고 useEffect에서 복원하는 구조를 설계했습니다. API 호출의 loading/error 상태는 커스텀 훅(useVerification)으로 분리하여 UI 렌더링 로직과 비동기 통신 로직이 섞이지 않도록 구조화했습니다.\n\nExpress 백엔드에서 학과 게시판을 스크래핑하고 Supabase에 등록된 구독자에게 Nodemailer로 메일을 자동 발송합니다. 이메일 인증 시스템은 bcrypt 해시와 5회 실패 잠금 로직을 직접 설계했습니다.\n\nKoyeb 무료 티어의 Scale-to-Zero 정책으로 인해 트래픽이 없을 때 서버가 슬립 모드로 전환되면서 내부 node-cron 스케줄러가 함께 멈추는 문제가 발생했습니다. 크롤링 트리거를 서버 내부에서 GitHub Actions 스케줄러로 외부화하여 서버 상태와 무관하게 정기적인 크롤링이 동작하도록 구조를 개선했습니다.",
      result:
        "Vercel(FE) + Koyeb(BE) + Supabase(DB) 조합으로 무료 클라우드 환경에 배포하여 운영 중입니다. GitHub Actions로 스케줄러를 외부화한 결과, 크롤링 주기를 기존 평일 3회에서 매일 09시~21시 30분 간격으로 8배 이상 정밀화하여 정보 업데이트의 실시간성을 확보했습니다.",
    },
    {
      id: "agreeee-leaderboard",
      name: "Agreeee-Leaderboard",
      desc: "치지직 스트리머 기록 시각화 리더보드",
      period: "2026.01 ~",
      url: "https://github.com/lirpa62/Agreeee-Leaderboard",
      image: "/images/projects/agreeee-leaderboard.png",
      imageType: "landscape" as const,
      tags: ["JavaScript", "Data Visualization"],
      live: "https://agreeee-leaderboard.netlify.app",
      problem:
        "치지직 스트리머들의 '이용약관에 동의하고 싶어' 기록이 커뮤니티에 흩어져 있어 한눈에 비교할 수 없다는 문제가 있었습니다.",
      solution:
        "해당 콘텐츠가 유행할 조짐을 포착하여 AI-assisted 방식으로 빠르게 HTML/JS 기반 MVP를 개발하고 즉시 배포했습니다. 런칭 직후 구글 검색(19,164회)·직접 유입(14,336회)을 포함해 에펨코리아, 네이버 팬카페, 나무위키 등 여러 커뮤니티에서 자연 바이럴이 발생했습니다.\n\n트래픽이 집중된 1월 29~30일 이틀 동안 일일 70GB 이상의 대역폭이 발생하여 Netlify 무료 티어 한도를 초과했고, 서비스 지속성을 위해 유료 플랜으로 즉시 전환하는 판단을 내려 다운타임 0%로 운영했습니다.\n\n운영 과정에서 시청자·스트리머로부터 기록 등록 요청을 받아 데이터를 추가하는 프로세스를 구축했고, 사용자들이 '숏컷', '스피드런', '재도전' 등의 분류 기준을 제안하여 기록 카테고리를 세분화했습니다.",
      result:
        "7일간 순 방문자 32,726명, 페이지뷰 68,107회, 총 대역폭 226GB를 소화했습니다. 트래픽 폭주 상황에서 유료 플랜 전환 판단을 내려 다운타임 0%로 운영했으며 사용자 피드백을 반영해 기록 카테고리를 세분화하는 운영 경험을 쌓았습니다.",
    },
  ],
  "Desktop App": [
    {
      id: "todays-library",
      name: "Todays-Library",
      desc: "도서관 방문자 집계 및 통계 프로그램",
      period: "2026.03 ~",
      url: "https://github.com/lirpa62/Todays-Library",
      image: "/images/projects/todays_library_splash.gif",
      imageType: "portrait" as const,
      tags: ["Dart", "Flutter"],
      problem:
        "도서관 인포메이션 데스크에서 방문자를 수동으로 집계하는 과정이 번거롭고 통계 확인이 어려웠습니다.",
      solution:
        "Flutter 기반 Windows 데스크톱 앱으로 직관적인 방문자 집계 UI와 통계 시각화 기능을 구현했습니다.",
      result:
        "1개 도서관에 실제 도입하여 운영 중이며 일일 방문자 집계와 통계 시각화 기능을 제공합니다.",
    },
  ],
};

export const skills = {
  Frontend: [
    { name: "JavaScript", color: "#E8D53A" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#71717a" },
    { name: "Tailwind CSS", color: "#06B6D4" },
  ],
  "Backend & Infra": [
    { name: "Node.js", color: "#339933" },
    { name: "Express", color: "#71717a" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "GitHub Actions", color: "#2088FF" },
    { name: "Vercel", color: "#71717a" },
    { name: "Koyeb", color: "#71717a" },
  ],
  Others: [
    { name: "Browser Extensions", color: "#4285F4" },
    { name: "Dart", color: "#0175C2" },
    { name: "Flutter", color: "#02569B" },
    { name: "Git", color: "#F05032" },
  ],
  "AI Workflow": [
    { name: "Claude", color: "#D97757" },
    { name: "ChatGPT", color: "#412991" },
    { name: "Gemini", color: "#8E75B2" },
  ],
};
