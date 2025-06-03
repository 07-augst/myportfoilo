document.addEventListener('DOMContentLoaded', () => {
  // --- 테마 토글 관련 코드 ---
  const toggleBtn = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // 초기 테마 적용
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark.matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // --- 인트로 메시지 자동 출력 ---
  const messages = [
    '안녕하세요!',
    '데이터와 코드로 표현하는 김은민입니다!',
    '저의 포트폴리오를 구경해보세요🙋🏻‍♀️',
  ];

  const introSection = document.querySelector('.intro-message');
  let index = 0;

  function showMessage() {
    if (index < messages.length) {
      const p = document.createElement('p');
      p.textContent = messages[index];
      p.classList.add('fade-in');
      introSection.appendChild(p);
      index++;
      setTimeout(showMessage, 1500);
    } else {
      // 메시지 출력 완료 후 다시 보기 버튼 추가
      const retryBtn = document.createElement('button');
      retryBtn.textContent = '다시 보기 🔁';
      retryBtn.classList.add('retry-btn');
      retryBtn.setAttribute('aria-label', '인트로 메시지 다시 보기');
      retryBtn.addEventListener('click', () => {
        introSection.innerHTML = '';
        index = 0;
        showMessage();
      });
      introSection.appendChild(retryBtn);
    }
  }

  showMessage();

  // --- 부드러운 스크롤 ---
  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.getElementById('btnAbout').addEventListener('click', () => {
    window.location.href = 'about.html';
  });

  document.getElementById('btnProjects').addEventListener('click', () => {
    window.location.href = 'projects.html';
  });

  document.getElementById('btnResume').addEventListener('click', () => {
    window.location.href = 'resume.html';
    // alert('이력서 페이지 준비 중입니다.');
  });

  // --- 연락처 폼 관련 ---
  const contactBtn = document.getElementById('contactBtn');
  const contactForm = document.getElementById('contactForm');
  const cancelContact = document.getElementById('cancelContact');

  // 접근성: aria-label 추가
  contactBtn.setAttribute('aria-label', '연락처 입력 폼 열기 또는 닫기');

  contactBtn.addEventListener('click', () => {
    contactForm.classList.toggle('hidden');
    contactBtn.textContent = contactForm.classList.contains('hidden')
      ? '📞 연락하기'
      : '✖ 닫기';
  });

  cancelContact.addEventListener('click', () => {
    contactForm.classList.add('hidden');
    contactBtn.textContent = '📞 연락하기';
  });

  contactForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (confirm('내용을 보내시겠습니까?')) {
      contactForm.classList.add('hidden');
      contactBtn.textContent = '📞 연락하기';
      e.target.reset();

      // 시각적 피드백 메시지 출력
      showFeedbackMessage('정상적으로 내용을 보냈습니다. 감사합니다! 😊');
    }
  });

  // 시각적 피드백 메시지 함수
  function showFeedbackMessage(message) {
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.classList.add('feedback-message');
    document.body.appendChild(msg);
    setTimeout(() => {
      msg.remove();
    }, 4000);
  }
});
