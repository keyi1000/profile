document.addEventListener('DOMContentLoaded', function() {
  // ===== タブで各セクションにスクロール =====
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      tabLinks.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const target = document.querySelector(this.getAttribute('data-scroll'));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 90,
          behavior: 'smooth'
        });
      }
    });
  });

  // スキルタグのホバーアニメーション
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
      tag.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.07)';
      });
      tag.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
      });
  });

  // プロジェクトカードのアニメーション
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.borderColor = '#5a4fef';
      });
      card.addEventListener('mouseleave', function() {
          this.style.borderColor = '#2d235c';
      });
  });

  // プログレスバーのアニメーション（ページロード時のみ）
  function animateProgressBars() {
      const progressFills = document.querySelectorAll('.progress-fill');
      progressFills.forEach(fill => {
          const width = fill.style.width;
          fill.style.width = '0%';
          setTimeout(() => {
              fill.style.width = width;
          }, 300);
      });
  }
  animateProgressBars();

  // フォーム送信処理
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const company = formData.get('company');
      const message = formData.get('message');
      if (!name || !email || !message) {
          alert('必須項目を入力してください。');
          return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('正しいメールアドレスを入力してください。');
          return;
      }
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '送信中...';
      submitBtn.disabled = true;
      setTimeout(() => {
          alert('お問い合わせありがとうございます。後日ご連絡いたします。');
          this.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
      }, 2000);
  });

  // 入力フィールドのフォーカス効果
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.parentElement.style.transform = 'scale(1.02)';
          this.parentElement.style.transition = 'transform 0.2s ease';
      });
      input.addEventListener('blur', function() {
          this.parentElement.style.transform = 'scale(1)';
      });
  });

  // リンクボタンのクリック効果
  const linkBtns = document.querySelectorAll('.link-btn');
  linkBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
              this.style.transform = 'scale(1)';
              alert('リンクが設定されていません。実際のURLを設定してください。');
          }, 150);
      });
  });

  // 初期表示時アニメーション
  function initializeAnimations() {
      const header = document.querySelector('.header');
      header.style.opacity = '0';
      header.style.transform = 'translateY(-20px)';
      setTimeout(() => {
          header.style.transition = 'all 0.6s ease';
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
      }, 100);
      const mainSections = document.querySelectorAll('.main-content .content-section');
      mainSections.forEach((section, idx) => {
          section.style.opacity = '0';
          section.style.transform = 'translateY(20px)';
          setTimeout(() => {
              section.style.transition = 'all 0.6s ease';
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
          }, 300 + idx * 100);
      });
  }
  initializeAnimations();

  console.log('プロフィールサイトが正常に読み込まれました！');
});