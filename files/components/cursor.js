export function cursor() {
  const learnMore = document.querySelector(".learn-more");
  const cursor = document.querySelector(".cursor");
  const cursorStyles = {
    normal: { background: "#ffffff", width: "24px", height: "24px" },
    active: { background: "#e5d2fd", width: "34px", height: "34px" },
  };
  const mouse = {
    mouseX: 0,
    mouseY: 0,
  };
  let previewX = 0;
  let previewY = 0;
  window.addEventListener("mousemove", (e) => {
    mouse.mouseX = e.clientX;
    mouse.mouseY = e.clientY;
  });
  const tick = () => {
    previewX += (mouse.mouseX - previewX) / 17;
    previewY += (mouse.mouseY - previewY) / 17;
    gsap.set(cursor, {
      x: previewX,
      y: previewY,
    });
    if (learnMore) {
      gsap.set(learnMore, {
        x: previewX,
        y: previewY,
      });
    }
    requestAnimationFrame(tick);
  };
  tick();
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        background: cursorStyles.active.background,
        width: cursorStyles.active.width,
        height: cursorStyles.active.height,
      });
    });
    textarea.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        background: cursorStyles.normal.background,
        width: cursorStyles.normal.width,
        height: cursorStyles.normal.height,
      });
    });
  }
  if (inputs) {
    inputs.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          background: cursorStyles.active.background,
          width: cursorStyles.active.width,
          height: cursorStyles.active.height,
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          background: cursorStyles.normal.background,
          width: cursorStyles.normal.width,
          height: cursorStyles.normal.height,
        });
      });
    });
  }
}
