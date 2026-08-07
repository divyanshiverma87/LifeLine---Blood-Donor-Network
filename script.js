// ================= DONOR DATA =================
const donors = [
    { name: "Amit Sharma", bloodGroup: "A+", location: "Civil Lines", phone: "9876543210" },
    { name: "Neha Verma", bloodGroup: "B+", location: "Kakadeo", phone: "9123456780" },
    { name: "Rahul Singh", bloodGroup: "O+", location: "Kidwai Nagar", phone: "9988776655" },
    { name: "Priya Gupta", bloodGroup: "AB+", location: "Swaroop Nagar", phone: "9090909090" }
];

// ================= HOSPITAL DATA =================
const hospitals = [
    {
        name: "Kanpur City Hospital",
        distance: "1.5 km",
        address: "Civil Lines, Kanpur",
        phone: "+91 512-123-4567",
        map: "https://www.google.com/maps/search/?api=1&query=Kanpur+City+Hospital"
    },
    {
        name: "Fortune Hospital",
        distance: "2.8 km",
        address: "Awas Vikas, Kanpur",
        phone: "+91 512-234-5678",
        map: "https://www.google.com/maps/search/?api=1&query=Fortune+Hospital+Kanpur"
    },
    {
        name: "Apollo Spectra Hospital",
        distance: "3.2 km",
        address: "Swaroop Nagar, Kanpur",
        phone: "+91 512-345-6789",
        map: "https://www.google.com/maps/search/?api=1&query=Apollo+Spectra+Hospital+Kanpur"
    },
    {
        name: "Kanishk Super Speciality Hospital",
        distance: "4.1 km",
        address: "Kidwai Nagar, Kanpur",
        phone: "+91 512-456-7890",
        map: "https://www.google.com/maps/search/?api=1&query=Kanishk+Hospital+Kanpur"
    }
];

// ================= DISPLAY DONORS =================
const donorList = document.getElementById("donorList");
const searchInput = document.getElementById("searchName");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayDonors(list) {
    donorList.innerHTML = "";

    if (list.length === 0) {
        donorList.innerHTML = "<p>No donors found.</p>";
        return;
    }

    list.forEach(donor => {
        const card = document.createElement("div");
        card.className = "donor-card";
        card.innerHTML = `
            <div>
                <h3>${donor.name}</h3>
                <p>Blood Group: <strong>${donor.bloodGroup}</strong></p>
                <p>Location: ${donor.location}</p>
            </div>
            <a href="tel:${donor.phone}" class="btn primary">
                <i class="fa-solid fa-phone"></i> Call
            </a>
        `;
        donorList.appendChild(card);
    });
}

// Initial donor display
displayDonors(donors);

// Search functionality
searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const filtered = donors.filter(donor =>
        donor.name.toLowerCase().includes(searchText)
    );
    displayDonors(filtered);
});

// Blood group filter
filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const group = this.getAttribute("data-group");
        if (group === "all") {
            displayDonors(donors);
        } else {
            const filtered = donors.filter(donor => donor.bloodGroup === group);
            displayDonors(filtered);
        }
    });
});

// ================= DISPLAY HOSPITALS =================
function displayHospitals() {
    const grid = document.getElementById("hospitalGrid");
    hospitals.forEach(hospital => {
        const card = document.createElement("div");
        card.className = "hospital-card";
        card.innerHTML = `
            <h3>${hospital.name} <span>${hospital.distance}</span></h3>
            <p><i class="fa-solid fa-location-dot"></i> ${hospital.address}</p>
            <p><i class="fa-solid fa-phone"></i> ${hospital.phone}</p>
            <a href="${hospital.map}" target="_blank">Open in Maps</a>
        `;
        grid.appendChild(card);
    });
}

// ================= COUNTER ANIMATION =================
function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const update = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

// ================= SOS FUNCTION =================
function showSOS() {
    alert("🚨 Emergency! Please call the national helpline number: 112");
}

// ================= FORM SUBMISSION =================
document.getElementById("requestForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your emergency request has been submitted successfully.");
    this.reset();
});

// Run functions when page loads
window.addEventListener("DOMContentLoaded", () => {
    displayHospitals();
    animateCounters();
});
// ================= DARK MODE =================

const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else{
        localStorage.setItem("theme","light");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});