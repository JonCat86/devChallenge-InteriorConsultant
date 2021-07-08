document.addEventListener("DOMContentLoaded", () => {
  const $hamBtn = document.querySelector(".ham-btn");
  document.addEventListener("click", (e) => {
    if (e.target.matches(".ham-btn") || e.target.matches(".ham-btn-in")) {
      if ($hamBtn.classList.contains("open")) {
        $hamBtn.classList.remove("open");
        document.querySelector("nav").style.transform = "translateX(-100%)";
      } else {
        $hamBtn.classList.add("open");
        document.querySelector("nav").style.transform = "translateX(0)";
      }
    }
    if (e.target.matches(".nav-list li")) {
      if ($hamBtn.classList.contains("open")) {
        $hamBtn.classList.remove("open");
        document.querySelector("nav").style.transform = "translateX(-100%)";
      }
    }
  });
});
