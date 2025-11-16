export function setupMenuModal() {
  const modal = document.getElementById("menu-modal");
  if (!modal) return;

  modal.style.display = "flex";
}

export function hideMenuModal() {
  const modal = document.getElementById("menu-modal");
  if (!modal) return;

  modal.style.display = "none";
}