function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    var toggleIcon = document.getElementById("toggle-icon");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        mainContent.style.marginLeft = "0";
    } else {
        sidebar.style.left = "0px";
        mainContent.style.marginLeft = "250px";
    }
}

window.onclick = function(event) {
    var sidebar = document.getElementById("sidebar");
    var openBtn = document.querySelector(".open-btn");
    if (event.target != sidebar && !event.target.closest('.open-btn')) {
        sidebar.style.left = "-250px";
        document.getElementById("main-content").style.marginLeft = "0";
        openBtn.style.opacity = "0";
        sidebar.addEventListener('transitionend', function() {
            openBtn.style.opacity = "1";
        });
    }
}

function adjustSidebarHeight() {
    const sidebarContent = document.getElementById('sidebar-content');
    const authLinks = document.querySelector('.auth-links');
    const sidebar = document.querySelector('.sidebar');

    const authLinksHeight = authLinks.offsetHeight;
    const sidebarHeight = window.innerHeight;

    sidebarContent.style.height = `${sidebarHeight - authLinksHeight - 60}px`;
    sidebarContent.style.overflowY = 'auto';
}

window.addEventListener('resize', adjustSidebarHeight);
window.addEventListener('load', adjustSidebarHeight);
document.addEventListener('DOMContentLoaded', adjustSidebarHeight);
