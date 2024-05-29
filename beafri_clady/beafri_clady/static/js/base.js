document.addEventListener('DOMContentLoaded', function() {
    var sidebarOpen = true; // Variable to track sidebar state

    function toggleSidebar() {
        var sidebar = document.getElementById("sidebar");
        var mainContent = document.getElementById("main-content");

        if (sidebarOpen) {
            sidebar.style.left = "-250px";
            mainContent.style.marginLeft = "0";
            sidebarOpen = false; // Update sidebar state
        } else {
            sidebar.style.left = "0px";
            mainContent.style.marginLeft = "250px";
            sidebarOpen = true; // Update sidebar state
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
    document.getElementById('sidebar-toggle-btn').addEventListener('click', toggleSidebar);
});
