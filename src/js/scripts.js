        /* dropdown*/
        document.addEventListener("DOMContentLoaded", function() {
            const menuToggle = document.getElementById("menuToggle");
            const dropdownMenu = document.getElementById("dropdownMenu");

            menuToggle.addEventListener("click", function() {
                dropdownMenu.classList.toggle("show");
            });

            // Fecha o dropdown se clicar fora dele
            window.addEventListener("click", function(event) {
                if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.classList.remove("show");
                }
            });
        });

        /*dropdown fim*/