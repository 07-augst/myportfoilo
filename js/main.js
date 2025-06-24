document.addEventListener('DOMContentLoaded', () => {
  // 테마 토글 관련
  const toggleBtn = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggleBtn) toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || (prefersDark.matches ? 'dark' : 'light'));

  toggleBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // 인트로 메시지 자동 출력
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

  if (introSection) showMessage();

  // 버튼 클릭 시 부드러운 페이지 이동
  const goToPage = (btnId, targetUrl) => {
    const btn = document.getElementById(btnId);
    btn?.addEventListener('click', () => {
      window.location.href = targetUrl;
    });
  };

  goToPage('btnAbout', 'about.html');
  goToPage('btnProjects', 'projects.html');
  goToPage('btnResume', 'resume.html');

  // 연락처 폼 토글 및 제출 처리
  const contactBtn = document.getElementById('contactBtn');
  const contactForm = document.getElementById('contactForm');
  const cancelContact = document.getElementById('cancelContact');

  if (contactBtn && contactForm && cancelContact) {
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
        showFeedbackMessage('정상적으로 내용을 보냈습니다. 감사합니다! 😊');
      }
    });
  }

  // 시각적 피드백 메시지 함수
  function showFeedbackMessage(message) {
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.classList.add('feedback-message');
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
  }
});
