document.addEventListener('DOMContentLoaded', () => {
  // 삭제 버튼 추가 함수 - 기존 li에 삭제 버튼 붙임
  function addDeleteButtons() {
    const allLis = document.querySelectorAll('.section-cards ul li');
    allLis.forEach((li) => {
      if (!li.querySelector('.delete-btn')) {
        const btn = document.createElement('button');
        btn.className = 'delete-btn';
        btn.setAttribute('aria-label', '삭제');
        btn.textContent = '🗑️';
        btn.addEventListener('click', () => {
          li.remove();
        });
        li.appendChild(btn);
      }
    });
  }

  // 초기 로드 시 기존 항목에 삭제 버튼 추가
  addDeleteButtons();

  const addButtons = document.querySelectorAll('.add-btn');

  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-type');
      const form = document.querySelector(`.add-form[data-type="${type}"]`);
      if (!form) return;

      form.classList.remove('hidden');
      form.querySelector('input').focus();
    });
  });

  const confirmButtons = document.querySelectorAll('.confirm-btn');

  confirmButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const form = btn.closest('.add-form');
      const input = form.querySelector('input');
      const value = input.value.trim();
      const type = form.getAttribute('data-type');
      const ul = document.querySelector(`ul[data-type="${type}"]`);

      if (value && ul) {
        const li = document.createElement('li');
        li.textContent = value;

        // 삭제 버튼 추가
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-btn';
        delBtn.setAttribute('aria-label', '삭제');
        delBtn.textContent = '🗑️';
        delBtn.addEventListener('click', () => {
          li.remove();
        });
        li.appendChild(delBtn);

        ul.appendChild(li);
        input.value = '';
      }
    });
  });
});
