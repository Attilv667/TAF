// script.js

document.addEventListener("DOMContentLoaded", function() {
    const showServicesButton = document.getElementById("show-services");
    const servicesGrid = document.getElementById("services-grid");

    showServicesButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Clone existing service cards and append them to the grid
        for (let i = 0; i < 3; i++) { // Change the number to add more or less copies
            const clone1 = servicesGrid.children[0].cloneNode(true);
            const clone2 = servicesGrid.children[1].cloneNode(true);
            const clone3 = servicesGrid.children[2].cloneNode(true);
            servicesGrid.appendChild(clone1);
            servicesGrid.appendChild(clone2);
            servicesGrid.appendChild(clone3);
        }
        // Optionally, you can add a class to hide/show the grid if needed
        servicesGrid.classList.toggle("hidden");
    });
});
