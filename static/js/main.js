// Vanilla JavaScript for preloader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.classList.add('hidden');
        });
    }
});

// jQuery for sidebar and navigation links
$(document).ready(function() {
    // Navigation links
    $('.nav-link').on('click', function() {
        var target = $(this).attr('href');
        $(target).addClass('show active').siblings().removeClass('show active');
        $(target + 'Nested').toggleClass('active');
    });

    // Sidebar toggle button
    $('#sidebarToggleBtn').click(function() {
        $('.sidebar, #overlay').toggleClass('show');
    });

    // Overlay click to close sidebar
    $('#overlay').click(function() {
        $('.sidebar, #overlay').removeClass('show');
    });
});
