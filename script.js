
// 1. แสดงปีปัจจุบันอัตโนมัติ
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 2. ข้อความต้อนรับ
console.log("Welcome to NUENG Portfolio!");
console.log("Thank you for visiting my website.");

// 3. เอฟเฟกต์เมื่อเลื่อนหน้าเว็บไซต์
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach((section) => {
        const position = section.getBoundingClientRect();

        if (position.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// 4. เอฟเฟกต์เมื่อเลื่อนเมาส์ไปที่ผลงาน
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "translateY(-5px)";
    });

    project.addEventListener("mouseleave", () => {
        project.style.transform = "translateY(0)";
    });
});

// 5. แสดงข้อความใน Console
console.log("NUENG | My Personal Portfolio");
console.log("Created with HTML, CSS and JavaScript.");
