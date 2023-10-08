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
        title: "Basic Training Sistem Information Geographic (GIS)",
        company: "Pustral UGM",
        duration: "Des 2019 - Jan 2020",
        description: "I took GIS training which included Arc Catalog, ArcMap, data structures, map layout, tabular data, data query, and spatial data processing from drones and GPS. This training allows me to manage geographic data, design map displays, extract information from tabular data, and utilize spatial data from drones and GPS for various GIS applications. This training helped me to become more competent in analyzing and understanding geographic data, as well as providing a strong foundation in understanding and using GIS technology for various applications, including mapping, environmental monitoring, and location-based decision making."
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

//portfolio=========================================================
// Data portofolio
const portfolioData = [{
        imageSrc: "https://ik.imagekit.io/alzirahmana/Asset-personalWeb/asset-BMI.png?updatedAt=1696750452151",
        altText: "BMI Calculator",
        title: "BMI Calculator",
        description: "BMI (Body Mass Index) calculator is a tool used to measure a person's body mass index. This index provides an idea of the proportion of a person's weight in relation to their height. It is often used in the health field to identify whether a person is within a healthy weight range or may be experiencing a weight problem such as obesity or being underweight.",
        buttonLink: "https://alziputra.github.io/BMI-calculator/",
    },
    {
        imageSrc: "https://ik.imagekit.io/alzirahmana/Asset-personalWeb/asset-gwa-cover.png?updatedAt=1696750452131",
        altText: "GWA prototype",
        title: "GREENWORLDAWARE",
        description: "The FS-13 team and I designed a website to contribute to this problem. GreenWorldWare is a website that contains articles, educational videos, quizzes about the impact of environmental pollution and a place for website users to contribute to share their activities about caring for the environment, such as what steps can be taken by society and the government to overcome waste problems and others.",
        buttonLink: "https://www.figma.com/proto/5xhDzASnStYkveeJZDkOmb/Assignment---Mockup-UI-Design-%26-Prototype?type=design&node-id=298-34154&t=bagGfeNr3SNssC7X-1&scaling=scale-down&page-id=1%3A4&starting-point-node-id=298%3A34154&show-proto-sidebar=1&mode=design",
    },
    {
        imageSrc: "https://ik.imagekit.io/alzirahmana/Asset-personalWeb/asset-BMI.png?updatedAt=1696750452151",
        altText: "BMI Calculator",
        title: "BMI Calculator",
        description: "BMI (Body Mass Index) calculator adalah alat yang digunakan untuk mengukur indeks massa tubuh seseorang. Indeks ini memberikan gambaran tentang proporsi berat badan seseorang dalam hubungannya dengan tinggi badan mereka. Ini sering digunakan dalam bidang kesehatan untuk mengidentifikasi apakah seseorang berada dalam kisaran berat badan yang sehat atau mungkin mengalami masalah berat badan seperti obesitas atau kekurangan berat badan.",
        buttonLink: "https://alziputra.github.io/BMI-calculator/",
    },
];

// Loop melalui data portofolio dan tambahkan elemen HTML ke dalam div "portfolio-content"
const Content = document.getElementById("portfolio-content");

portfolioData.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "image-wrapper";

    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = item.altText;

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const button = document.createElement("button");
    const buttonLink = document.createElement("a");
    buttonLink.href = item.buttonLink;
    buttonLink.textContent = "View";
    buttonLink.target = "_blank";
    button.appendChild(buttonLink);

    overlay.appendChild(title);
    overlay.appendChild(description);
    overlay.appendChild(button);

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(overlay);

    portfolioItem.appendChild(imageWrapper);

    Content.appendChild(portfolioItem);
});


// Portfolio Slider
const portfolioContent = document.querySelector('.portfolio-content');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePortfolio();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
        updatePortfolio();
    }
});

function updatePortfolio() {
    const translateXValue = currentIndex * -100;
    portfolioContent.style.transform = `translateX(${translateXValue}%)`;
}


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