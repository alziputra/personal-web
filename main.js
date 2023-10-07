// Navbar==============================================================
document.getElementById("menu-icon").addEventListener("click", function () {
    var navList = document.querySelector(".navlist");
    navList.classList.toggle("active");
});

// Skills==============================================================
// Dapatkan semua elemen dengan class "progress-bar"
const skillBars = document.querySelectorAll(".progress");

// Lakukan iterasi melalui setiap elemen "progress-bar" dan atur lebarnya berdasarkan atribut "data-percent"
skillBars.forEach(skillBar => {
    const percent = skillBar.getAttribute("data-percent");
    skillBar.style.width = percent;
});

//Experience=========================================================
// Objek pengalaman kerja
const experiences = [{
        title: "Cloud Computing",
        company: "Bangkit Academy 2023 batch 1 - Graduate",
        duration: "Feb 2023 - Jul 2023",
        description: "Building an application to help cocoa farmers carry out early diagnosis of the condition of their cocoa plants by uploading photos of their cocoa plants. The system will then classify cocoa diseases based on the uploaded photos, and provide information on how to prevent and treat the identified diseases. Developed by the C23-PC638 team which consists of 6 people who contribute in their respective fields. The machine learning team is tasked with creating an algorithm that is used to predict types of disease in cocoa plants. The cloud computing team is responsible for building relationships between the machine learning team and the mobile development team. Meanwhile, mobile development is responsible for creating interfaces and interactions with users. This project is part of our final Capstone Project at Bangkit Academy 2023 led by Google, GoTo, and Traveloka"
    },
    {
        title: "Software Engineer",
        company: "XYZ Corporation",
        duration: "2016 - 2018",
        description: "building an application to help cocoa farmers carry out early diagnosis of the condition of their cocoa plants by uploading photos of their cocoa plants. The system will then classify cocoa diseases based on the uploaded photos, and provide information on how to prevent and treat the identified diseases. Developed by the C23-PC638 team which consists of 6 people who contribute in their respective fields. The machine learning team is tasked with creating an algorithm that is used to predict types of disease in cocoa plants. The cloud computing team is responsible for building relationships between the machine learning team and the mobile development team. Meanwhile, mobile development is responsible for creating interfaces and interactions with users. This project is part of our final Capstone Project at Bangkit Academy 2023 led by Google, GoTo, and Traveloka"
    }
];

// Fungsi untuk menambahkan pengalaman kerja ke dalam DOM
function renderExperience() {
    const experienceList = document.getElementById("experience-list");

    experiences.forEach((experience) => {
        const experienceItem = document.createElement("div");
        experienceItem.classList.add("experience-item");

        const title = document.createElement("h3");
        title.textContent = experience.title;

        const company = document.createElement("span");
        company.textContent = experience.company;

        const duration = document.createElement("p");
        duration.textContent = experience.duration;

        const description = document.createElement("p");
        description.textContent = experience.description;

        experienceItem.appendChild(title);
        experienceItem.appendChild(company);
        experienceItem.appendChild(duration);
        experienceItem.appendChild(description);
        experienceList.appendChild(experienceItem);
    });
}

// Panggil fungsi untuk menghasilkan pengalaman kerja
renderExperience();


// Contact==============================================================
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai dari formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Lakukan apa pun yang diperlukan dengan data formulir (misalnya, kirim ke server atau tampilkan pesan)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Tampilkan popup
    document.getElementById("successPopup").style.display = "block";

    // Clear formulir jika perlu
    document.getElementById("contactForm").reset();
});

// Menyembunyikan popup saat tombol Tutup diklik
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "none";
});