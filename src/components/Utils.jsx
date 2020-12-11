export function getCardWidth() {
  let width = window.screen.availWidth;
  console.log(width);
  if (width > 828) {
    return "60%";
  } else {
    return "100%";
  }
}
