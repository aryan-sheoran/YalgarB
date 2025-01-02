const casinoBtn = document.getElementById("casinoBtn");
const sportsBtn = document.getElementById("sportsBtn");
const casinoContent = document.getElementById("casinoContent");
const sportsContent = document.getElementById("sportsContent");
const homeContent = document.getElementById("homeContent");
const toggleHighlight = document.getElementById("toggle-highlight");
const logoSlider = document.getElementById("logo-slider");
const bigContainer = document.getElementById("bigContainer");
const problemA = document.getElementById("problemA");
const problemB = document.getElementById("problemB");


sportsBtn.addEventListener('click', function () {
  sportsContent.classList.add('visible');
  sportsContent.classList.remove('hidden');
  casinoContent.classList.add('hidden');
  casinoContent.classList.remove('visible');
  homeContent.classList.add('hidden');
  homeContent.classList.remove('visible');

  logoSlider.classList.add('hidden');
  logoSlider.classList.remove('visible');

  problemA.classList.add('hidden');
  problemA.classList.remove('visible')

  problemB.classList.add('hidden');
  problemB.classList.remove('visible')
});

casinoBtn.addEventListener('click', function () {
  casinoContent.classList.add('visible');
  casinoContent.classList.remove('hidden');

  sportsContent.classList.remove('visible');
  sportsContent.classList.add('hidden');

  homeContent.classList.add('hidden');
  homeContent.classList.remove('visible');

  logoSlider.classList.add('hidden');
  logoSlider.classList.remove('visible');

  problemA.classList.add('hidden');
  problemA.classList.remove('visible')

  problemB.classList.add('hidden');
  problemB.classList.remove('visible')

});

// Toggle button
sportsBtn.addEventListener("click", () => {
  sidebarButtons.classList.remove("neutral");  // Remove neutral state
  toggleHighlight.style.left = "0"; // Move highlights to sports
  toggleHighlight.style.background = "#4caf50"; // Green for sports
  toggleHighlight.style.visibility = "visible"; // Ensure visibility
  toggleHighlight.style.borderRadius = "0px 25px 25px 0px"; // Maintain rounded edges
  sportsBtn.classList.add("active");
  casinoBtn.classList.remove("active");
});

casinoBtn.addEventListener("click", () => {
  sidebarButtons.classList.remove("neutral");  // Remove thr neutral state
  toggleHighlight.style.left = "50%"; // Move highlight to casino
  toggleHighlight.style.background = "#4caf50"; // Green for casino
  toggleHighlight.style.visibility = "visible"; //Ensure visibilty
  toggleHighlight.style.borderRadius = "25px 0px 0px 25px"; // Maintain rounded edges
  casinoBtn.classList.add("active");
  sportsBtn.classList.remove("active");
});

// Fliping the image
// Get the cards by their IDs or class names
const card1 = document.getElementById("flipcard1");
const card2 = document.getElementById("flipcard2");

// Function to add the 'flip' class when hovering over the card
const flipOnHover = (card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("flip"); // Add the 'flip' class when the mouse enters the card
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("flip"); // Remove the 'flip' class when the mouse leaves the card
  });
};

// Apply the hover effect on both cards
flipOnHover(card1);
flipOnHover(card2);




// Showing options in Sports and casino
const sportsOption = document.getElementById('sportsOption');
const casinoOption = document.getElementById('casinoOption');
const madeBy = document.getElementById('visible');

sportsBtn.addEventListener('click', () => {
  sportsOption.classList.add('visible');
  sportsOption.classList.remove('hidden');

  casinoOption.classList.add('hidden');
  casinoOption.classList.remove('visible');

  madeBy.classList.add('hidden');
  madeBy.classList.remove('visible');
})

casinoBtn.addEventListener('click', () => {
  casinoOption.classList.add('visible');
  casinoOption.classList.remove('hidden');

  sportsOption.classList.add('hidden');
  sportsOption.classList.remove('visible');

  madeBy.classList.add('hidden');
  madeBy.classList.remove('visible');
})


document.addEventListener("DOMContentLoaded" , () => {
    const homeContent = document.getElementById("homeContent");

    function loadContent(file){
        fetch(file)
        .then((response) => {
            if (!response.ok){
                throw new Error("Failed to load content");
            }
            return response.text();
        })
        .then((html) =>{
            homeContent.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }

    document.getElementById("sportsBtn").addEventListener("click" , () =>{
        loadContent("sports.html");
    });

    document.getElementById("casinoBtn").addEventListener("click" , () => {
     loadContent("casino.html");
    })
})