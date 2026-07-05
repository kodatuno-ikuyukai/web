const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  const label = menuToggle.querySelector(".visually-hidden");

  // スマホ表示のハンバーガーメニューを開閉し、読み上げ用ラベルも合わせて更新する。
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);

    if (label) {
      label.textContent = isOpen ? "メニューを開く" : "メニューを閉じる";
    }
  });

  // メニュー項目を選んだ後は、次のページ表示に備えて閉じた状態へ戻す。
  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      if (label) {
        label.textContent = "メニューを開く";
      }
    }
  });
}
