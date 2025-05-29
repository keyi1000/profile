document.addEventListener('DOMContentLoaded', function() {
  // タブ切り替え機能
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentSections = document.querySelectorAll('.content-section');

  navButtons.forEach(button => {
      button.addEventListener('click', function() {
          const targetTab = this.getAttribute('data-tab');
          
          // アクティブなボタンとセクションを削除
          navButtons.forEach(btn => btn.classList.remove('active'));
          contentSections.forEach(section => section.classList.remove('active'));
          
          // 新しいアクティブなボタンとセクションを設定
          this.classList.add('active');
          document.getElementById(targetTab).classList.add('active');
      });
  });

  // スキルタグのホバーアニメーション
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
      tag.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
      });
      
      tag.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
      });
  });

  // プロジェクトカードのアニメーション
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.borderColor = '#667eea';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.borderColor = '#e2e8f0';
      });
  });

  // プログレスバーのアニメーション
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

  // スキルセクションが表示されたときにプログレスバーをアニメーション
  const skillsNavBtn = document.querySelector('[data-tab="skills"]');
  skillsNavBtn.addEventListener('click', function() {
      setTimeout(animateProgressBars, 100);
  });

  // 現在の取り組みセクションが表示されたときにもプログレスバーをアニメーション
  const currentNavBtn = document.querySelector('[data-tab="current"]');
  currentNavBtn.addEventListener('click', function() {
      setTimeout(animateProgressBars, 100);
  });

  // フォーム送信処理
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // フォームデータを取得
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const company = formData.get('company');
      const message = formData.get('message');
      
      // 簡単なバリデーション
      if (!name || !email || !message) {
          alert('必須項目を入力してください。');
          return;
      }
      
      // メールアドレスの形式チェック
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('正しいメールアドレスを入力してください。');
          return;
      }
      
      // 送信ボタンを無効化
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '送信中...';
      submitBtn.disabled = true;
      
      // 実際の送信処理（ここではシミュレーション）
      setTimeout(() => {
          alert('お問い合わせありがとうございます。後日ご連絡いたします。');
          this.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
      }, 2000);
  });

  // スムーズスクロール効果
  function smoothScrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }

  // タブ切り替え時にページトップに移動
  navButtons.forEach(button => {
      button.addEventListener('click', smoothScrollToTop);
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
          
          // リップル効果のシミュレーション
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
              this.style.transform = 'scale(1)';
              // 実際のリンクは後で設定
              alert('リンクが設定されていません。実際のURLを設定してください。');
          }, 150);
      });
  });

  // 初期表示時のアニメーション
  function initializeAnimations() {
      // ヘッダーのフェードイン
      const header = document.querySelector('.header');
      header.style.opacity = '0';
      header.style.transform = 'translateY(-20px)';
      setTimeout(() => {
          header.style.transition = 'all 0.6s ease';
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
      }, 100);

      // ナビゲーションのフェードイン
      const navigation = document.querySelector('.navigation');
      navigation.style.opacity = '0';
      navigation.style.transform = 'translateY(-10px)';
      setTimeout(() => {
          navigation.style.transition = 'all 0.6s ease';
          navigation.style.opacity = '1';
          navigation.style.transform = 'translateY(0)';
      }, 300);

      // 最初のコンテンツセクションのフェードイン
      const activeSection = document.querySelector('.content-section.active');
      activeSection.style.opacity = '0';
      activeSection.style.transform = 'translateY(20px)';
      setTimeout(() => {
          activeSection.style.transition = 'all 0.6s ease';
          activeSection.style.opacity = '1';
          activeSection.style.transform = 'translateY(0)';
      }, 500);
  }

  // ページロード時のアニメーション実行
  initializeAnimations();

  // タイピング効果（プロフィールの自己紹介）
  function typeWriter(element, text, speed = 50) {
      let i = 0;
      element.innerHTML = '';
      
      function typing() {
          if (i < text.length) {
              element.innerHTML += text.charAt(i);
              i++;
              setTimeout(typing, speed);
          }
      }
      typing();
  }

  // プロフィールタブがクリックされたときのタイピング効果
  const profileNavBtn = document.querySelector('[data-tab="profile"]');
  let hasTyped = false;
  
  profileNavBtn.addEventListener('click', function() {
      if (!hasTyped) {
          setTimeout(() => {
              const firstParagraph = document.querySelector('#profile .card p');
              const originalText = firstParagraph.textContent;
              typeWriter(firstParagraph, originalText, 30);
              hasTyped = true;
          }, 200);
      }
  });

  // キーボードナビゲーション
  document.addEventListener('keydown', function(e) {
      const activeBtn = document.querySelector('.nav-btn.active');
      const allBtns = Array.from(document.querySelectorAll('.nav-btn'));
      const currentIndex = allBtns.indexOf(activeBtn);
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
          allBtns[currentIndex - 1].click();
      } else if (e.key === 'ArrowRight' && currentIndex < allBtns.length - 1) {
          allBtns[currentIndex + 1].click();
      }
  });

  // スクロール位置に基づくナビゲーションハイライト（オプション）
  window.addEventListener('scroll', function() {
      const navigation = document.querySelector('.navigation');
      if (window.scrollY > 100) {
          navigation.style.position = 'sticky';
          navigation.style.top = '20px';
          navigation.style.zIndex = '1000';
      } else {
          navigation.style.position = 'static';
      }
  });

  console.log('プロフィールサイトが正常に読み込まれました！');
});