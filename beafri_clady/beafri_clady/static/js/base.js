function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    var toggleIcon = document.getElementById("toggle-icon");
    var openBtn = document.querySelector(".open-btn");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        mainContent.style.marginLeft = "0";
        openBtn.style.opacity = "0"; 
        sidebar.addEventListener('transitionend', function() {
            openBtn.style.opacity = "1"; 
        });
    } else {
        sidebar.style.left = "0px";
        mainContent.style.marginLeft = "250px";
        openBtn.style.opacity = "1"; 
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