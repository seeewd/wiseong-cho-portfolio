export type Trouble = {
  label: string;
  body: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  oneLiner: string;
  meta: string[];
  summary: string;
  points: string[];
  did: string[];
  whyStack?: string;
  trouble?: Trouble[];
  learned?: string;
  result?: string;
  links: { label: string; href: string }[];
  images?: { src: string; alt: string }[];
};

export const profile = {
  name: "조위성",
  nameEn: "Wiseong Cho",
  role: "성균관대학교 소프트웨어학과 학사 · 2024.02.23",
  highSchool: "부산과학고등학교 졸업",
  lead: "조위성",
  email: "dnltjd770@gmail.com",
  github: "https://github.com/seeewd",
  tags: ["AI 보안", "데이터 시각화", "Digital Twin", "Blockchain", "Dapp", "Solidity", "BIM"],
};

export const highlights = [
  {
    title: "SquareZero",
    when: "2026.07–진행중",
    body: "제품 SquareRB. Tekla 철근 자동배근 플러그인, Tekla Open API MCP.",
  },
  {
    title: "Xenterra",
    when: "2025.11–2026.07",
    body: "제조 업무 디지털 전환. 본사·해외지사 내부 앱. 사내 AI 서버.",
  },
  {
    title: "SquareZero",
    when: "2026.01–2026.04",
    body: "제품 BIBIM AI. AI agent, RAG. 글로벌 유료전환. 국내·해외 월 구독.",
  },
  {
    title: "The4thVector 개발자·개발 PM",
    when: "2024.07.19–2025.08.31",
    body: "패킷·API 보안 태깅, C++ 패킷, React 대시보드, ZAP, Docker, 학습용 더미데이터.",
  },
  {
    title: "Hashkey Seoul Taiyi 3등",
    when: "2025.03.28–30",
    body: "인보이스 → ERC-721 담보 대출. 스마트컨트랙트 담당.",
  },
  {
    title: "Waterprovf 개발자·대표",
    when: "2022.03–2023.11",
    body: "대학생 6명. ERC-721 민팅·OpenSea 런칭. Klaytn은 레퍼런스. 판매 6개월 약 1억 2천만 원.",
  },
];

export const projects: Project[] = [
  {
    id: "the4thvector",
    index: "01",
    title: "The4thVector",
    oneLiner: "패킷·API 보안 태깅과 대시보드",
    meta: ["2024.07.19 – 2025.08.31", "개발자 및 개발 PM", "C++ · React · Docker · OWASP · ZAP"],
    summary:
      "사이트나 API 위험을 로그 대신 대시보드 등급으로 보는 도구. 개발과 함께 일정·모듈 경계도 정리.",
    points: [
      "LLM 프롬프트·업무 사용 팁 강의 6개",
      "OWASP Top 10 API 보안 위험 기반 태깅 시스템",
      "실시간 패킷 발견·처리 모듈 (C++)",
      "React 기반 API 위험도 분석 대시보드",
      "ZAP Proxy 연동 자동화 보안 스캔",
      "네트워크 패킷 포워딩 및 스니핑",
      "Docker로 전체 모듈 패키징",
      "네트워크 시뮬레이션으로 AI 학습용 더미데이터 생성 (Pcap → CSV / JSON)",
    ],
    did: [
      "개발과 PM을 13개월 겸함. 일정과 모듈 경계를 같이 정리",
      "OWASP API Top 10 기준으로 API 위험 태깅 체계를 구성",
      "실시간 패킷 발견·처리, 포워딩, 스니핑 모듈은 C++로 작성",
      "태깅 결과를 등급으로 보는 React 대시보드 구현",
      "ZAP Proxy를 붙여 보안 스캔을 자동화",
      "학습용 실트래픽이 없어 테스트베드에서 더미 트래픽을 만들고, Pcap을 CSV·JSON으로 변환해 태깅과 대시보드 학습 입력으로 연결",
      "시뮬레이션부터 대시보드까지 Docker 한 패키지로 묶음",
      "LLM 프롬프트와 업무용 사용 팁 강의를 6개 진행",
    ],
    whyStack:
      "패킷 경로는 지연을 줄이려고 C++. 화면은 React로 분리. 스캔은 ZAP으로 검증 가능한 결과부터 받고, 모듈이 늘어 배포 단위를 Docker로 묶음.",
    trouble: [
      {
        label: "문제",
        body: "스캔·패킷·화면이 분리되면 학습 데이터와 배포가 갈라짐. AI가 배울 실트래픽도 부족.",
      },
      {
        label: "시도",
        body: "네트워크 테스트베드에서 더미 트래픽을 만들고 Pcap을 CSV/JSON으로 변환.",
      },
      {
        label: "해결",
        body: "시뮬레이션, 패킷 파이프라인, OWASP 태깅, ZAP 스캔, React 대시보드를 Docker 하나로 패키징.",
      },
      {
        label: "결과",
        body: "13개월간 개발과 PM을 겸하며 시뮬레이션부터 대시보드까지 한 배포 단위로 유지.",
      },
    ],
    links: [],
  },
  {
    id: "hashkey",
    index: "03",
    title: "Hashkey Invoice Pay",
    oneLiner: "인보이스 NFT를 담보로 한 대출",
    meta: ["2025.03.28 – 2025.03.30", "Smart Contract", "3등"],
    summary:
      "차입자가 올린 인보이스를 ERC-721로 민팅하면 그 토큰이 대출 담보가 되는 Vault. 추첨, 서명 출금, 상환까지 컨트랙트가 잇음. Hashkey Seoul Taiyi 3등.",
    points: [
      "InvoiceNFT · LoanExecutor · LoanQueueManager",
      "VaultWithSignature (EIP-712) · TokenScore · LotteryEngine · Repayment",
      "Solidity, OpenZeppelin, Hardhat",
      "저장소: Amazon S3, Couchbase",
    ],
    did: [
      "스마트컨트랙트 담당",
      "InvoiceNFT는 ERC-721URIStorage. 이름 RealWorldInvoice. 발행자, 수취, 금액, 만기, 메타데이터 URI를 담고 상태만 바꿈. Draft부터 Pending, Approved, LoanStarted, Paid, Rejected까지",
      "대출자 Vault는 예치금과 토큰 점수를 가짐. 시작 점수는 1000. 대출이 나가면 예치가 클수록 덜 깎임. 시간은 시간당 10점, 예치와 대출 횟수로 다시 회복. 상한 1000",
      "오프체인에서 고른 결과를 머클 루트로 올리고, Vault가 proof로 본인 당첨을 증명",
      "당첨 Vault는 큐에 줄 섬. 맨 앞만 실행하거나 거절할 수 있고, 거절하면 뒤로 밀림. 1일이 지나도 응답이 없으면 그 Vault로 자동 실행",
      "실행은 인보이스가 Approved이고, 금액·차입자가 맞을 때만. Vault 주인 EIP-712 서명(nonce, deadline)으로 차입자에게 출금. 상태가 LoanStarted로 바뀜",
      "상환은 차입자가 원금에 이자 5%, 수수료 1%를 더해 보냄. 당첨 Vault에 균등 분배하고 인보이스 상태를 Paid로 닫음",
      "Hardhat으로 민팅, 승인, 머클 등록, 큐, 서명 출금, 상환까지 한 흐름을 테스트. 48시간이라 토큰·권한은 OpenZeppelin",
      "Hashkey Seoul Taiyi 3등",
    ],
    whyStack:
      "48시간이라 토큰·서명은 OpenZeppelin, 테스트는 Hardhat. 인보이스 1장 = NFT 1개. 추첨 계산은 오프체인 머클 루트로 올려 가스와 범위를 줄임.",
    trouble: [
      {
        label: "문제",
        body: "실물 인보이스는 담보로 쓰기 어렵고, 승인·실행·상환이 사람 손에 남음.",
      },
      {
        label: "시도",
        body: "파일만 저장하면 담보 권한이 온체인에 없어 렌딩과 연결되지 않음.",
      },
      {
        label: "해결",
        body: "인보이스를 ERC-721로 민팅하고, 머클 당첨 큐와 EIP-712 서명 출금으로 대출이 실행되게 구성. 상환은 원금+이자+수수료를 당첨 Vault에 나눔.",
      },
      {
        label: "결과",
        body: "Hashkey Seoul Taiyi 3등.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/seeewd/2025-Hackathon-Taiyi-Seoul" },
      { label: "데모 영상", href: "https://youtu.be/vK2FAhMu3yo" },
      {
        label: "덱",
        href: "https://docs.google.com/presentation/d/1gZPlVuZxTLjqCtdCUjVYBLQqFECKryjI_RI_c2GnNJg/edit?usp=sharing",
      },
    ],
  },
  {
    id: "bibim",
    index: "04",
    title: "BIBIM AI",
    oneLiner: "AI agent · RAG",
    meta: ["2026.01 – 2026.04", "회사 SquareZero", "Open Source Collaborator", "C# · Roslyn · React · WebView2"],
    summary:
      "AI agent, RAG. 문장으로 Revit 작업을 시키면 C#을 만들어 검증한 뒤 모델에 적용. 글로벌 유료전환. 월 구독으로 국내와 해외에서 결제가 들어옴.",
    points: [
      "AI agent",
      "RAG. Gemini File Search, 버전별 API 문서",
      "글로벌 유료전환. 국내·해외 월 구독",
      "Roslyn 컴파일과 커스텀 분석기",
      "React + WebView2 도킹 패널",
      "Revit 2022–2027. 2026년 4월 KO·EN 베타 인스톨러",
    ],
    did: [
      "AI agent. 플래너, 과제 실행, 코드 생성으로 나눔. 빈 값은 질문으로 받고, 버전별 API는 RAG와 Roslyn으로 맞춘 뒤 실행",
      "RAG. 2022–2026 API 문서를 버전별로 크롤링. 다른 버전 함수를 가져오거나 없는 이름을 지어내는 경우를 걸러 냄",
      "2022–2025 사용자도 많았고, 버전마다 API 문서와 함수 이름이 달랐음",
      "남은 오류는 동의한 사용자만 사용 내역을 모아, 자주 나는 문제를 별도 에이전트가 확인",
      "화면은 React + WebView2 도킹 패널. 모델은 PC 안, API 키는 사용자 키만 사용. Revit 2022–2027",
    ],
    result:
      "글로벌 유료전환. 처음 만든 판매 형태는 월 구독. 국내 구독과 해외 구독이 둘 다 결제됨. 현재는 오픈소스로 전환.",
    learned: "AEC 도구는 호스트 프로세스 안에서 동작. 코드 생성과 호스트 API 실행은 별개.",
    links: [
      { label: "bibim.app", href: "https://bibim.app" },
      { label: "sqzr.team", href: "https://sqzr.team/" },
    ],
  },
  {
    id: "xenterra",
    index: "11",
    title: "Xenterra",
    oneLiner: "제조 업무 디지털 전환과 사내 AI",
    meta: ["2025.11 – 2026.07", "Xenterra"],
    summary:
      "전통 제조 업무를 디지털로 옮기고, 한국 본사와 해외 지사가 같이 쓰는 내부 앱을 만듦. 사내 AI 서버에서 번역, 담당자 검색, 일반 질문 응답을 돌림.",
    points: [
      "제조 업무 프로세스 디지털화",
      "엑셀 제조 툴을 내부 앱으로 전환",
      "한국 본사 · 해외 지사 공용",
      "사내 AI 서버",
      "메신저 번역. 업무 용어, 피드백 반영",
      "직원 담당 업무 검색",
      "외부 검색 연결",
    ],
    did: [
      "2025년 11월부터 2026년 7월까지 Xenterra에서 제조 디지털 전환과 사내 AI를 담당",
      "제조 업무가 사람마다 엑셀과 구두 전달로 나뉘어 있던 순서를 단계로 정리. 입력, 확인, 다음 공정 전달이 한 흐름으로 남게 함",
      "제조할 때 쓰던 엑셀 양식, 수량 집계, 작업 지시를 같은 기능의 내부 앱으로 옮김. 파일로 주고받던 수치를 앱 기록으로 바꿈",
      "한국 본사와 해외 지사가 같은 앱, 같은 데이터를 쓰게 함. 지사에서 올린 작업과 본사에서 보는 현황이 따로 놀지 않게 맞춤",
      "번역, 담당자 검색, 일반 질문을 돌릴 AI용 서버 컴퓨터를 사내에 구성",
      "사내 메신저에 번역을 붙임. 현장에서 쓰는 부품명과 공정 용어를 사전에 넣음. 사용자가 고친 번역은 다음 번역에 자동으로 다시 반영",
      "직원별 담당 업무를 항목으로 나눠 데이터베이스에 넣음. 질문하면 그 일을 맡은 사람을 찾음",
      "사내 데이터에 없는 일반 질문은 외부 검색 도구를 연결해 답하게 함",
    ],
    links: [],
  },
  {
    id: "squarerb",
    index: "05",
    title: "SquareRB",
    oneLiner: "Tekla 철근 자동배근 플러그인",
    meta: ["2026.07 – 진행중", "회사 SquareZero", "제품 SquareRB", "C# · WPF · .NET 8 · Tekla Open API"],
    summary:
      "SquareZero의 제품. Tekla Structures 철근을 부재별로 자동 배근하고, LLM이 Tekla Open API를 부르도록 .NET 8 MCP 서버를 붙임. 로직 수정 에이전트와 ST-agent는 루프로 검증을 자동화.",
    points: [
      "보 배근",
      "기둥 배근",
      "벽 수직 / 수평",
      "플랫 슬래브 / 라멘 슬래브",
      "표면근",
      "Tekla 2024 · 2026 설치 패키지",
      "MCP: 모델 선택·속성, 보·기둥·플레이트 생성, 도면 열기",
      "실행 조건: Tekla가 열린 Windows. 리눅스 CI는 빌드·테스트만",
    ],
    did: [
      "회사 SquareZero에서 제품 SquareRB를 개발 중. 보, 기둥, 벽 수직·수평, 플랫 슬래브, 라멘 슬래브, 표면근을 부재별로 배근",
      "Tekla 2024·2026 설치 패키지 작성",
      "LLM이 Tekla Open API를 부르도록 .NET 8 MCP 서버를 붙임. Tekla가 켜져 있고 모델이 열린 Windows에서만 DLL을 런타임에 로드",
      "연결 상태와 선택 부재, 속성, 좌표, 사용자 속성을 읽고, 보·기둥·플레이트·그리드를 만들거나 옮기고 지움. 도면을 열고 프로파일·재질을 찾으며, 로드된 API도 호출",
      "Tekla가 없는 PC에서도 빌드와 테스트는 됨. 모델 조작은 Tekla가 열린 Windows에서만 가능. 2026 이후 설치 경로는 따로 찾고, 없는 함수는 오류로 돌려줌",
      "로직 수정 에이전트는 이슈파악부터 대응검토까지 루프로 돌려 배근 로직 검증을 자동화. ST-agent는 tester lite부터 verify까지 루프로 돌려 로직 전체와 백엔드 검증을 자동화",
    ],
    whyStack:
      "Tekla Open API는 C#. 컴파일 타임 참조는 Tekla 없는 환경에서 빌드가 깨져 Assembly.LoadFrom으로 런타임에만 로드. MCP는 로컬 stdio.",
    trouble: [
      {
        label: "문제",
        body: "Tekla DLL은 .NET Framework이고 로컬 프로세스에 붙음. 리눅스에서 참조 빌드가 깨짐.",
      },
      {
        label: "시도",
        body: "컴파일 타임 참조는 Tekla가 없는 PC에서 빌드 자체가 실패.",
      },
      {
        label: "해결",
        body: "Tekla가 켜져 있을 때만 런타임 로드.",
      },
      {
        label: "결과",
        body: "에이전트는 Tekla가 열린 Windows에서만 모델을 조작.",
      },
    ],
    links: [],
  },
  {
    id: "waterprovf",
    index: "06",
    title: "Waterprovf",
    oneLiner: "ERC-721 민팅과 OpenSea",
    meta: ["2022.03 – 2023.11", "개발자 & 대표", "대학생 6명", "민팅 · OpenSea EVM"],
    summary:
      "시니어 없이 대학생 6명이 만든 ERC-721 민팅 제품. 외부 업체와 개발 협력으로 런칭하고, 판매 6개월 동안 약 1억 2천만 원.",
    points: [
      "컨트랙트, 프론트·백엔드 2명, PM, 기획, 디자이너",
      "Klaytn 민팅 데모와 데모 페이지 시연",
      "ERC-721 민팅. 이더리움과 자체 ERC-20 결제",
      "외부 업체 미팅 대응",
    ],
    did: [
      "개발과 대표를 겸함. 시니어 직급 없이 대학생 6명으로 팀을 구성. 컨트랙트, 프론트·백엔드 2명, PM, 기획, 디자이너",
      "외부 업체 미팅에 나가 요구를 받아 팀에 나누고, 범위가 바뀔 때마다 애자일로 일정을 다시 짬",
      "레퍼런스가 적어 Klaytn 민팅 컨트랙트 데모와 데모 페이지를 만들어 시연",
      "민팅용 컨트랙트와 OpenSea용 EVM을 같이 사용. Klaytn은 레퍼런스 데모. NFT는 ERC-721",
      "처음 결제는 이더리움만 잡았고, 미팅에서 자체 토큰 결제 요청이 들어와 이더리움과 자체 ERC-20을 둘 다 받게 수정",
      "마이페이지에서 메타마스크 보유 NFT를 컨트랙트 주소로 조회. Approve와 디지털 서명 포함",
      "런칭 후 6개월 매출 약 1억 2천만 원",
    ],
    whyStack:
      "레퍼런스 시연은 Klaytn. 실제로는 민팅 컨트랙트와 OpenSea용 EVM을 둘 다 사용. NFT는 ERC-721. 결제는 업체 요청에 맞춰 이더리움과 자체 ERC-20.",
    trouble: [
      {
        label: "문제",
        body: "민팅 일주일 전 OpenSea 로직이 바뀜. 창작자 보호로, 코드에서 거래대금의 일부를 창작자에게 지급하도록 넣지 않으면 OpenSea에서 2차 거래가 되지 않음. 안내 글은 OpenSea 블로그에만 올라와 있음.",
      },
      {
        label: "시도",
        body: "업체와 민팅 일정을 맞추는 중이어서, 블로그에 적힌 지급 조건을 컨트랙트 코드와 대조하며 거래가 막히는 지점을 확인.",
      },
      {
        label: "해결",
        body: "창작자 지급이 코드에 들어가는 ERC-721을 다시 배포하고, 변경 내용을 업체 미팅에서 공유.",
      },
      {
        label: "결과",
        body: "민팅을 열고 판매를 진행.",
      },
    ],
    links: [],
  },
  {
    id: "tips",
    index: "07",
    title: "TIPS 연구",
    oneLiner: "공사일보와 현장 데이터로 공사 기간을 예측",
    meta: ["2025.11 – 진행중", "OCR · 파서 · 날씨 · 예측"],
    summary:
      "건설 현장 근로자 생산성으로 공사 기간을 예측하는 연구. 공사일보를 OCR로 읽고, 날씨·기상특보와 근로자 데이터에 붙여 학습용으로 정제.",
    points: ["공사일보 OCR", "파서", "날씨·특보", "시간축 연결", "품질 점검", "생산성 예측"],
    did: [
      "2019.03–2021.05 공사일보 PDF 27개월분을 OCR로 읽음. Google Cloud Vision, PaddleOCR, Surya를 비교하고 표 구조로 정리",
      "읽은 표를 날짜, 공종, 인원, 수량 레코드로 파싱. 형식이 맞지 않아 스키마에 맞게 전처리",
      "공사일보와 근로자 데이터(2023–2024)의 기간이 달라, 같은 달·일 위치의 과거 공사일보를 기준값으로 연결",
      "현장 일별 날씨와 기상특보를 모아 같은 날짜에 붙임",
      "공종 빈도, 인원, 작업량을 피처로 만들고, 결측·이상치 규칙과 품질 점검으로 학습 세트를 고정",
      "공정·생산성 예측까지 이어서, 입력과 결과 형식을 정리",
      "평가는 expanding-window rolling-origin",
      "naive lag, ridge, XGBoost, LightGBM, CatBoost, Transformer를 비교",
      "CatBoost와 Transformer를 사용. 작업량과 인원은 타깃별로 나눠 학습",
      "예측값에는 분위수 구간과 conformal 보정을 붙임",
    ],
    links: [],
  },
  {
    id: "dxf",
    index: "12",
    title: "DXF → IFC 구조 인식",
    oneLiner: "평면도 DXF에서 기둥·벽을 읽어 IFC4로 쓰는 변환",
    meta: ["2026.06", "Python · IFC4"],
    summary:
      "DXF 평면도를 읽어 기둥·벽을 인식하고 IFC4로 내보냄. 중간 표현(model_ir.json)으로 층을 복제하고, Bonsai와 Revit에서 결과를 확인.",
    points: [
      "Stage0 로드·평탄화·층/노이즈 필터",
      "Stage1 기둥 추출·중복 제거. 사각/원 프로파일",
      "Stage2 층",
      "Stage4 IR 빌드·층 복제",
      "Stage5 IFC4 writer. Bonsai/Revit로 검증",
      "Stage6 검증 리포트",
      "같은 평면이 여러 벌이면 이동불변 서명으로 1벌로 병합",
      "부재 소스는 layer, block, path로 지정",
      "벽은 선분에서 두께를 읽어 생성. L형 기둥·보·슬래브·문·창은 이후 범위",
    ],
    did: [
      "DXF를 읽어 평탄화하고, 층·노이즈를 거른 뒤 기둥과 벽을 추출하는 단계를 작성",
      "기둥은 사각·원 프로파일로 잡고 중복을 제거. 같은 평면이 여러 벌이면 이동불변 서명으로 한 벌로 병합",
      "model_ir.json 기준으로 층을 복제하고 IFC4로 기록. Bonsai·Revit에서 확인",
      "부재 위치는 layer, block, path로 지정. 벽은 선분 두께로 생성",
      "L형 기둥, 보, 슬래브, 문, 창은 이번 범위에서 제외",
    ],
    links: [{ label: "dxftoifc_sqzr", href: "https://github.com/seeewd/dxftoifc_sqzr" }],
  },
  {
    id: "qr",
    index: "08",
    title: "Diffusion QR Code",
    oneLiner: "Stable Diffusion 이미지 QR",
    meta: ["2023.10", "Design Korea 2023", "Generative AI"],
    summary:
      "Stable Diffusion에 LoRA를 적용하고 프롬프트를 조정해, 그림처럼 보이면서 QR로 읽는 이미지를 제작. Design Korea 2023 출품. 아래 네 장이 당시 샘플.",
    points: ["Stable Diffusion", "LoRA 적용", "프롬프트 엔지니어링", "Design Korea 2023 출품"],
    did: [
      "Stable Diffusion으로 스캔되는 이미지 QR을 제작",
      "LoRA를 적용해 샘플마다 그림 톤을 맞춤. QR 점과 파인더가 그림에 묻히지 않게 적용 강도를 조절",
      "프롬프트에 장면과 패턴이 남는 조건을 같이 적어, 생성 이미지가 QR로 읽히게 맞춤",
      "2023년 10월 Design Korea 2023에 출품. 아래 네 장은 당시 출력 샘플",
    ],
    images: [
      { src: `${import.meta.env.BASE_URL}samples/qr-abstract.png`, alt: "색 번짐과 파인더 패턴이 섞인 Diffusion QR 샘플" },
      { src: `${import.meta.env.BASE_URL}samples/qr-autumn.png`, alt: "노란 가로수 길을 그린 Diffusion QR 샘플" },
      { src: `${import.meta.env.BASE_URL}samples/qr-garden.png`, alt: "담쟁이 정원 아치를 그린 Diffusion QR 샘플" },
      { src: `${import.meta.env.BASE_URL}samples/qr-machine.png`, alt: "네온 기계를 그린 Diffusion QR 샘플" },
    ],
    links: [],
  },
  {
    id: "gympt",
    index: "11",
    title: "gympt",
    oneLiner: "PT 대화를 운동·컨디션 기록으로 남기는 앱",
    meta: ["2025.06", "React Native · Express · PostgreSQL"],
    summary:
      "트레이너와 회원 대화를 STT로 남기는 운동 기록 앱. 화면은 React Native, 백엔드는 Express, DB는 PostgreSQL. 운동 대화와 일상 대화를 나눠, 종목·횟수와 컨디션을 회원 관리에 씀.",
    points: ["React Native", "Express", "PostgreSQL", "STT 대화 분리", "운동 횟수", "컨디션 기록"],
    did: [
      "화면은 React Native로 구성",
      "로그인과 회원 관리용 백엔드는 Express로 구성",
      "회원, 대화, 운동 기록을 넣는 DB는 PostgreSQL로 구성",
      "STT로 트레이너와 회원의 대화를 기록",
      "일상 대화와 운동 대화를 분리. PT 중 어떤 운동을 몇 회 했는지 남김",
      "“요새 어깨가 좀 아픈 것 같아요” 같은 말은 AI가 분석해 회원 관리 기록으로 남김",
    ],
    links: [],
  },
  {
    id: "poem",
    index: "09",
    title: "Poem Diffusion",
    oneLiner: "시에서 삽화를 만드는 모델. KoBART, Diffusion",
    meta: ["Generative AI", "KoBART"],
    summary: "KoBART로 시를 다루고 Diffusion으로 삽화를 그림. 학습 데이터는 정제해서 사용.",
    points: ["KoBART", "Diffusion", "데이터 정제"],
    did: [
      "KoBART로 시 텍스트를 처리",
      "Diffusion 모델을 붙여 삽화 이미지를 생성",
      "학습에 쓰기 전에 데이터를 정제",
    ],
    links: [],
  },
  {
    id: "seoul",
    index: "10",
    title: "서울시 유동인구 시각화",
    oneLiner: "서울 유동인구를 시간축으로 보는 웹",
    meta: ["시각화"],
    summary:
      "서울시 유동인구를 시간대별로 지도에서 보는 웹. 상권 후보의 출퇴근·저녁·주말 피크를 비교하는 데 사용.",
    points: ["시간대별 유동인구", "상권 후보 비교"],
    did: [
      "시간대별 서울 유동인구를 지도에서 보는 웹을 제작",
      "부동산 입지 검토에서 후보 상권의 출퇴근 시간과 주말 저녁 피크를 나란히 비교",
    ],
    links: [{ label: "GitHub", href: "https://github.com/seeewd/floatingpopulation_seoul" }],
  },
  {
    id: "i2max",
    index: "14",
    title: "I2Max 협업",
    oneLiner: "ESG·탄소 회계 Salesforce 교육, 리포트, 데모 시연",
    meta: ["2024.02.28 – 2024.10", "Tableau · Salesforce · NetZero Cloud"],
    summary: "I2Max와 ESG·NetZero Cloud 교육, 대학·기업 ESG 리포트, 데모 시연, 사업기획 일부 작성.",
    points: [
      "2024.02.28 Tableau 기초",
      "2024.04 – 2024.09 Salesforce NetZero Cloud 교육·미팅",
      "국제·국내 ESG 제도. CBAM(탄소국경조정제도) 포함",
      "대학별·기업별 ESG 리포트",
      "사업기획서 일부 작성",
      "Salesforce CRM 교육",
      "2024.07.01 – 07.05 ADX201 수료",
      "2024.09.10 NetZero Cloud 데모 시연",
      "CRMA 데모 시연",
    ],
    did: [
      "2024.02.28 Tableau 기초 교육 이수",
      "2024.04–09 Salesforce NetZero Cloud 교육·미팅 참여",
      "국제·국내 ESG 제도와 CBAM을 정리하고, 대학·기업 ESG 리포트를 작성",
      "사업기획서 일부 작성. Salesforce CRM 교육. 2024.07.01–07.05 ADX201 수료",
      "2024.09.10 NetZero Cloud 데모 시연, CRMA 데모 시연",
    ],
    links: [],
  },
];

export const skills = [
  {
    name: "Solidity / Klaytn",
    body: "Waterprovf ERC-721 민팅, 이더리움·자체 ERC-20 결제, OpenSea 창작자 지급 반영. 판매 6개월 약 1억 2천만 원. Hashkey Vault는 OpenZeppelin + Hardhat, 48시간.",
  },
  {
    name: "C++ / 패킷 / ZAP",
    body: "The4thVector 실시간 패킷 발견·처리, 포워딩/스니핑. Pcap→CSV/JSON. ZAP 자동 스캔. OWASP API Top 10 태깅.",
  },
  {
    name: "C# / Tekla / Revit",
    body: "회사 SquareZero. 제품 SquareRB는 Tekla 배근 플러그인·MCP. 제품 BIBIM AI는 AI agent, RAG. 글로벌 유료전환.",
  },
  {
    name: "React / Next.js",
    body: "The4thVector 위험도 대시보드.",
  },
  {
    name: "데이터 시각화",
    body: "서울 유동인구 시각화. 상권 후보의 시간대 피크 비교. Tableau 기초(2024.02.28).",
  },
  {
    name: "Salesforce / ESG",
    body: "ADX201 수료. NetZero Cloud·CRMA 데모. ESG 리포트와 CBAM 교육.",
  },
  {
    name: "사내 시스템",
    body: "Xenterra. 제조 엑셀 업무의 내부 앱화. 본사·해외지사 공용. 사내 AI 서버, 메신저 번역, 담당 업무 검색.",
  },
  {
    name: "Docker / AWS",
    body: "The4thVector 모듈을 Docker로 패키징. Hashkey 저장소는 Amazon S3, Couchbase.",
  },
];

export const nav = [
  { href: "#intro", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#skills", label: "기술" },
];
