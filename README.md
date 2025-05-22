# 📂 MyPortfolio
포트폴리오 사이트 제작 프로젝트
</br>
자기소개, 기술 스택, 프로젝트 경험, 이력서 등을 한눈에 보여주는 웹사이트를 만들고자 시작한 개인 프로젝트
</br>

## 💡만든 이유
프론트엔드 기술을 실제 프로젝트에 적용하며 실력을 키우고 경험과 역량을 한눈에 보여줄 수 있는 포트폴리오 웹사이트를 직접 만들고 싶어 시작함
</br>
이 프로젝트를 통해 컴포넌트 구조화, 상태 관리, 사용자 인터랙션 설계 등을 경험하고 개인 브랜딩과 기술 홍보의 장으로도 활용할 예정

## ✨ 주요 기능
**홈(Home)**  
  - 대화창 스타일 인트로 문구 애니메이션  
  - About / Projects / Resume 버튼 → 해당 페이지 이동  
  - 우측 하단 연락처 버튼 → 입력 폼 팝업  
  - 고정 사이드바 내비게이션 (Home / About / Skills / Project / Contact)

**자기소개(About)**  
  - 개인정보, 학력, 자격증, 어학, 수상내역 등 표시  
  - 동적 추가 / 수정 / 삭제 기능 제공  
  - 인라인 편집 or 모달 방식 지원

**기술 스택(Skills)**  
  - 코딩 기술 및 소프트 스킬 시각화 (그래프 및 상세 설명)  
  - 경험 기반의 기술 활용 사례 기입 가능  
  - 기술 추가 / 수정 기능

**프로젝트(Project)**  
  - 카드형 프로젝트 목록 + 타임라인 뷰  
  - 상세 정보 보기 / 추가 / 수정 / 삭제 기능  
  - 필터링으로 프로젝트 분류

**연락(Contact)**  
  - 이메일, GitHub, 블로그(티스토리), 이력서(PDF), 메시지 폼  
  - “24시간 내 답변드립니다” 문구  
  - 연락처 항목 편집 기능

## 🛠 사용한 기술 스택

- **Frontend**  
  - HTML / CSS / JavaScript  
  - React  
  - TailwindCSS

- **버전 관리 & 협업**  
  - Git & GitHub  

- **기타 예정 기술**  
  - 이메일 처리용 Backend (예: Firebase, EmailJS 등)  
  - 배포 플랫폼: GitHub Pages 또는 Vercel

---

## 📁 폴더 구조 (예상)
```plaintext
myportfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/         # 공통 UI 컴포넌트
│   ├── pages/              # 각 화면 구성 (Home, About, Skills, etc.)
│   ├── assets/             # 이미지, 아이콘 등 정적 리소스
│   ├── styles/             # 전역 스타일 파일
│   └── App.jsx
├── README.md
└── package.json
