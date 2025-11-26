// 스크롤 시 메뉴바
let lastScrollTop = 0;
  const menuBar = document.querySelector('.menu-bar');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 아래로 스크롤 시 메뉴 숨기기
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      menuBar.classList.add('hidden');
    } 
    // 위로 스크롤 시 메뉴 다시 보이기
    else {
      menuBar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 음수 방지
  });