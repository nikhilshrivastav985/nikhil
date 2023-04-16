const navBtn = document.querySelectorAll(".control");
const mainContainer = document.querySelector(".mainContent");
const allSection = document.querySelectorAll(".section");


function pageTransition(){

    // looping over all the buttons
    navBtn.forEach(button => {
        // listening to clicking event
        button.addEventListener("click", event =>{
            // storing element which contains active class
            const activeBtnEl = document.querySelector(".activeNavBtn");
            // remove active class from previous btn
            activeBtnEl.classList.remove("activeNavBtn")
            // adding active class to clicked btn
            button.classList.add("activeNavBtn")

            const buttonId = button.dataset.id;
            const activeSection = document.querySelector(".active");
            const divToShow = document.getElementById(buttonId)

            activeSection.classList.remove("active")

            divToShow.classList.add("active")

        })
    });
}

pageTransition();