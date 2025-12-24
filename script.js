let card = document.getElementById("profile-card");
const btn = document.getElementById("theme-btn");


function toggleDark() {
    document.body.classList.toggle("dark-theme");
}

btn.addEventListener("click", toggleDark);

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function() {
    const name = document.getElementById("user-name").value;
    const message = document.getElementById("user-message").value;

    // Feedback for use
    document.getElementById("form-status").innerText = `Thanks, ${name}! I'll read your message soon.`;
    document.getElementById("form-status").classList.add("show-status");
});

//Creating JSON Objects for dynamic website cards
const team = [
    {name: "Samuel", role: "Developer", tech: "React"},
    {name: "Cole", role: "Designer", tech: "Figma"},
    {name: "Faith", role: "Manager", tech: "Agile"},
    {name: "Linet", role: "DevOps", tech: "AWS"}
];

const searchBar = document.getElementById("search-bar");
const container = document.getElementById("team-container");

function renderTeam(filterText="") {
    // Clear the container
    container.innerHTML = "";

    // Filter the list of team members
    const filtered = team.filter(member => member.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));

    // Build the cards
    if(filtered.length === 0){
        container.innerHTML = `<p class="error-msg">No team members for your search.</p>`;
    }else{
        filtered.forEach(member => {
        container.innerHTML += `
            <div class="profile-card">
                <h2>${member.name}</h2>
                <p>${member.role}</p>
                <span>${member.tech}</span>
            </div>
        ` ;
    });
    }
}

// listen for typing
searchBar.addEventListener("input", (e) => {
    renderTeam(e.target.value);
})

// Initial loading
renderTeam();


// let team = ["Anna", "Samuel", "Charles", "Joseph"];

// for (let member of team) {
//    let card = `
//    <div class='profile-card'>
//     <h1>${member}</h1>
//     <p>Team Member</p>
//    </div>
//    `
// }

// let container = document.getElementById("team-container");

// for(let member of team) {
//     container.innerHTML += `
//     <div>
//         <h1>${member}</h1>
//         <h2>Developer</h2>
//     </div>
//     `;
// }