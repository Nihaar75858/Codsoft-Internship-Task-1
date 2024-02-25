document.addEventListener("DOMContentLoaded", function() {
    const headerlinks = document.querySelectorAll('.menu li a');

    headerlinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href');

            setTimeout(function() {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 1000);
        });
    });
});