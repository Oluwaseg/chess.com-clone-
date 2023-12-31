//Sidebar

function openNav() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  if (sidebar.style.width === "250px") {
    // Close the sidebar if it's already open
    sidebar.style.width = "0";
    content.style.marginLeft = "0";
  } else {
    // Open the sidebar
    sidebar.style.width = "250px";
    content.style.marginLeft = "250px";
  }

  document.body.addEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
  // Close the sidebar if the click is outside the sidebar and not on the "open" button
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  if (
    !event.target.closest("#sidebar") &&
    !event.target.classList.contains("btn-primary")
  ) {
    sidebar.style.width = "0";
    content.style.marginLeft = "0";
    document.body.removeEventListener("click", closeNavOutside);
  }
}
