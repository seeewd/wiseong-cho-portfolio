import { highlights, nav, profile, projects, skills, type Project } from "@/data/portfolio";

const MAIN_IDS = [
  "squarerb",
  "tips",
  "xenterra",
  "bibim",
  "the4thvector",
  "hashkey",
  "i2max",
  "qr",
  "waterprovf",
];

function MailLine() {
  return (
    <p className="text-sm">
      <span className="font-semibold">Email. </span>
      <a className="underline decoration-line underline-offset-4" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </p>
  );
}

function SideLabel({ children }: { children: string }) {
  return <h4 className="mt-5 text-sm font-semibold first:mt-0">{children}</h4>;
}

function HashkeyFlow() {
  const steps = [
    { name: "InvoiceNFT", note: "ERC-721 민팅 · 승인" },
    { name: "Lottery", note: "머클 루트 · proof" },
    { name: "Queue", note: "맨 앞만 실행 · 1일 유예" },
    { name: "Vault", note: "EIP-712 서명 출금" },
    { name: "Repay", note: "원금 + 5% + 1%" },
  ];

  return (
    <figure className="mt-8 border border-line p-4 sm:p-5">
      <figcaption className="text-sm font-semibold">컨트랙트 흐름</figcaption>
      <ol className="mt-4 grid gap-2 sm:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.name} className="border border-line px-3 py-2 text-sm">
            <p className="font-semibold">
              <span className="text-muted">{index + 1}</span> {step.name}
            </p>
            <p className="mt-1 text-muted">{step.note}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function BibimAgentStack() {
  const layers = [
    {
      name: "플래너",
      note: "JSON만 반환. 인사·설명·실패 원인은 chat. Revit 조회·생성·수정·내보내기는 task. 읽기는 정보가 차면 자동 실행. 모델 변경과 PDF·DWG·IFC 쓰기는 확인 후에만 실행. 화면과 벤치가 같은 빌더를 사용.",
    },
    {
      name: "되묻기",
      note: "중요한 값이 빠지면 questions를 채우고 자동 실행은 끔. 선택지 2–5개, 하나만 또는 여러 개, 직접 입력도 가능. 같은 과제를 고치면 update, 다른 작업이면 new, 애매하면 한 줄로 다시 확인. “알아서 해”, “default로”는 남은 질문을 닫고 기본값으로 진행.",
    },
    {
      name: "체크리스트",
      note: "범위(뷰/층/모델, 링크 포함 여부), 이름 충돌 시 건너뛰기·덮어쓰기·에러, 배치 위치·패밀리·회전, 이동 방향, 배열, 파라미터 종류, 시트 타이틀블록, 내보내기 폴더.",
    },
    {
      name: "실행",
      note: "과제 요약, 사용자가 답한 항목, 최근 실패 로그를 넣어 코드를 작성.",
    },
    {
      name: "RAG",
      note: "1차. 2022–2026 API 문서를 버전별로 크롤링해 RAG를 구축. 다른 버전 함수 이름을 가져오는 경우를 줄임. Gemini File Search는 문서를 스토어에 넣고 질의로 관련 구간을 찾음. search_revit_api는 설치된 RevitAPI.xml을 로컬 BM25로 찾고 요청당 최대 2회. 문서와 모델 지식이 다르면 문서를 우선.",
      wide: true,
    },
    {
      name: "컴파일 · 분석기",
      note: "2차. 어느 버전에도 없는 함수 이름을 지어내면 컴파일과 분석기로 걸러 내고 고침. 뷰, 선택 요소, 파라미터 이름, 패밀리 타입, 프로젝트 레벨은 과제에 해당할 때만 염. Roslyn을 통과한 뒤에만 결과를 돌려줌.",
      wide: true,
    },
    {
      name: "오류 에이전트",
      note: "남은 오류는 동의한 사용자만 프롬프트 사용 내역을 수집. 자주 나는 문제는 별도 에이전트 확인 공간에서 다시 봄.",
      wide: true,
    },
  ];

  return (
    <figure className="mt-8 border border-line p-4 sm:p-5">
      <figcaption className="text-sm font-semibold">BIBIM 에이전트</figcaption>
      <p className="mt-1 text-sm text-muted">
        플래너 → 되묻기 → 체크리스트 → 실행 → RAG → 컴파일 · 분석기 → 오류 에이전트
      </p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {layers.map((layer, index) => (
          <li
            key={layer.name}
            className={`border border-line px-3 py-2 text-sm ${"wide" in layer && layer.wide ? "sm:col-span-2" : ""}`}
          >
            <p className="font-semibold">
              <span className="text-muted">{index + 1}</span> {layer.name}
            </p>
            <p className="mt-1 leading-relaxed">{layer.note}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function SquareRbAgents() {
  const fixStages = [
    { name: "이슈파악", note: "만든 로직으로 Tekla에 철근을 배근하고 문제점을 찾음" },
    { name: "이슈분석", note: "어느 부분이 잘못됐는지 확인" },
    { name: "대응", note: "코드를 고치고 빌드" },
    { name: "대응검토", note: "다시 배근해서 문제가 남았는지 확인" },
  ];
  const stStages = [
    { name: "tester lite", note: "시나리오와 Fixed check를 고정" },
    { name: "poc", note: "그 기준의 최소 구현" },
    { name: "tester full", note: "구현에 시나리오를 다시 실행하고 아키텍처 산출을 남김" },
    { name: "verify", note: "기존 run을 감사" },
  ];

  return (
    <>
      <figure className="mt-8 border border-line p-4 sm:p-5">
        <figcaption className="text-sm font-semibold">로직 수정 에이전트</figcaption>
        <p className="mt-1 text-sm text-muted">이슈파악 → 이슈분석 → 대응 → 대응검토</p>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {fixStages.map((stage, index) => (
            <li key={stage.name} className="border border-line px-3 py-2 text-sm">
              <p className="font-semibold">
                <span className="text-muted">{index + 1}</span> {stage.name}
              </p>
              <p className="mt-1 leading-relaxed">{stage.note}</p>
            </li>
          ))}
        </ol>
        <div className="mt-3 border border-line p-3">
          <p className="text-sm font-semibold">대응검토 안</p>
          <p className="mt-1 text-sm text-muted">fail → 같은 모델 · ok → 다음 모델 · 모두 ok면 pass → 다음 기능</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            <li>문제가 남으면 fail. 그 trial을 기록하고 trial 수를 늘린 뒤 다시 검토.</li>
            <li>문제가 없으면 그 모델을 ok로 적고 다음 모델로 넘어감.</li>
            <li>검토 모델이 모두 ok면 pass. 매뉴얼을 작성하고 다음 기능으로 넘어감. 다음 기능은 다시 이슈파악부터.</li>
          </ul>
        </div>
        <p className="mt-3 text-sm leading-relaxed">배근 로직 검증을 자동화.</p>
        <p className="mt-2 text-sm leading-relaxed">기록용 토큰, 문서를 읽는 토큰, 루프가 도는 시간을 줄임.</p>
      </figure>
      <figure className="mt-4 border border-line p-4 sm:p-5">
        <figcaption className="text-sm font-semibold">ST-agent</figcaption>
        <p className="mt-1 text-sm text-muted">tester lite → poc → tester full → verify</p>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {stStages.map((stage, index) => (
            <li key={stage.name} className="border border-line px-3 py-2 text-sm">
              <p className="font-semibold">
                <span className="text-muted">{index + 1}</span> {stage.name}
              </p>
              <p className="mt-1 leading-relaxed">{stage.note}</p>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm leading-relaxed">로직 전체와 백엔드 검증을 자동화.</p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed">
          <li>stage 안은 재시도. 상한이 있음.</li>
          <li>바깥 루프는 unjustified 이탈만 같은 경로에 덮어 다시 실행. 기본 2라운드.</li>
          <li>justified는 유지. needs_human은 사람 확인. 그 둘은 재실행에서 빼 둠.</li>
        </ul>
      </figure>
    </>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <article id={project.id} className="scroll-mt-24 border-t border-line py-12">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.75fr]">
        <div>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 leading-relaxed">{project.oneLiner}</p>
          <p className="mt-3 leading-relaxed text-fg">{project.summary}</p>
          {project.images ? (
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {project.images.map((image) => (
                <li key={image.src} className="overflow-hidden border border-line bg-surface">
                  <img src={image.src} alt={image.alt} className="aspect-square w-full object-cover" />
                </li>
              ))}
            </ul>
          ) : null}
          <h4 className="mt-6 text-sm font-semibold">담당 업무</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            {project.did.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.result ? (
            <>
              <h4 className="mt-6 text-sm font-semibold">결과</h4>
              <p className="mt-2 text-sm leading-relaxed">{project.result}</p>
            </>
          ) : null}
          {project.links.length > 0 ? (
            <ul className="mt-4 space-y-1 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <aside>
          <SideLabel>기간 / 역할</SideLabel>
          <ul className="mt-1 space-y-1 text-sm text-fg">
            {project.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.whyStack ? (
            <>
              <SideLabel>기술 선택</SideLabel>
              <p className="mt-1 text-sm leading-relaxed">{project.whyStack}</p>
            </>
          ) : null}
          {project.trouble ? (
            <>
              <SideLabel>Trouble Shooting</SideLabel>
              <ul className="mt-1 space-y-3 text-sm leading-relaxed">
                {project.trouble.map((row) => (
                  <li key={row.label}>
                    <span className="font-semibold">{row.label}. </span>
                    {row.body}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {project.learned ? (
            <p className="mt-4 text-sm leading-relaxed">{project.learned}</p>
          ) : null}
        </aside>
      </div>
      {project.id === "hashkey" ? <HashkeyFlow /> : null}
      {project.id === "squarerb" ? <SquareRbAgents /> : null}
      {project.id === "bibim" ? <BibimAgentStack /> : null}
    </article>
  );
}

export function PortfolioPage() {
  const main = MAIN_IDS.map((id) => projects.find((project) => project.id === id)).filter(
    (project): project is Project => Boolean(project),
  );
  const rest = projects.filter((project) => !MAIN_IDS.includes(project.id));

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-line bg-bg">
        <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-6 py-3">
          <a href="#top" className="shrink-0 text-sm font-semibold">
            조위성
          </a>
          <nav className="flex shrink-0 items-center" aria-label="본문">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center px-3 text-sm">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6 pb-24">
        <section id="intro" className="scroll-mt-24 py-24">
          <h1 className="text-4xl font-semibold sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-lg text-muted">{profile.nameEn}</p>
          <div className="mt-10 space-y-2">
            <MailLine />
            <p className="text-sm">
              <span className="font-semibold">GitHub. </span>
              <a className="underline decoration-line underline-offset-4" href={profile.github}>
                github.com/seeewd
              </a>
            </p>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">Skills.</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <li key={skill.name} className="bg-surface p-4">
                <h3 className="text-sm font-semibold">{skill.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold">Career</h2>
            <ul className="mt-4 space-y-5">
              {highlights.map((item) => (
                <li key={`${item.title}-${item.when}`}>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.when}</p>
                  <p className="mt-1 text-sm leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Education.</h2>
            <ul className="mt-4 list-disc space-y-3 pl-4 text-sm leading-relaxed">
              <li>{profile.role}</li>
              <li>{profile.highSchool}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Awards.</h2>
            <p className="mt-4 text-sm font-semibold">Hashkey Seoul Taiyi 3등</p>
            <p className="mt-1 text-sm text-muted">2025.03.28 – 03.30</p>
            <p className="mt-2 text-sm leading-relaxed">Invoice Pay. 인보이스를 NFT 담보로 한 대출. 스마트컨트랙트 담당.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Links.</h2>
            <p className="mt-4 text-sm">
              <a className="underline decoration-line underline-offset-4" href={profile.github}>
                github.com/seeewd
              </a>
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <li key={tag} className="bg-surface px-2 py-1 text-xs">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 pt-20">
          <h2 className="text-3xl font-semibold">Project</h2>
          {main.map((project) => (
            <ProjectBody key={project.id} project={project} />
          ))}
        </section>

        <section id="other" className="scroll-mt-24 pt-8">
          <h2 className="text-3xl font-semibold">Other Projects</h2>
          <ul className="mt-8 grid gap-10 sm:grid-cols-2">
            {rest.map((project) => (
              <li key={project.id} id={project.id} className="scroll-mt-24 border-t border-line pt-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>
                <p className="mt-3 text-sm font-semibold">기간 / 역할</p>
                <p className="text-sm text-muted">{project.meta.join(" · ")}</p>
                <p className="mt-3 text-sm font-semibold">담당 업무</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {project.did.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.result ? (
                  <>
                    <p className="mt-3 text-sm font-semibold">결과</p>
                    <p className="mt-2 text-sm leading-relaxed">{project.result}</p>
                  </>
                ) : null}
                {project.links.length > 0 ? (
                  <ul className="mt-3 space-y-1 text-sm">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-line underline-offset-4"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-24">
          <h2 className="text-4xl font-semibold">연락</h2>
          <div className="mt-8">
            <MailLine />
          </div>
        </section>
      </main>
    </div>
  );
}
