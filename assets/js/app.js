function handleScroll() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 110) {
      navbar.classList.add('scrolled');
      document.body.classList.add('sticky-nav');
    } else {
      navbar.classList.remove('scrolled');
      document.body.classList.remove('sticky-nav');
    }
  }
window.addEventListener('scroll', handleScroll);

// small menu
let Smenu = document.getElementById("s-menu");
let closeIcon = document.getElementById("fa-close");
Smenu.addEventListener("click" , function(){
  let sMenuNav = document.getElementById("small-menu-nav");
  let hasDnone = sMenuNav.classList;
  if( hasDnone ){
    sMenuNav.classList.remove("d-none");
  }
 else{
    sMenuNav.classList.add("d-none");
  }
});
closeIcon.addEventListener("click" , function(){
  let sMenuNav = document.getElementById("small-menu-nav");
  let doesntHavDnone = sMenuNav.classList;
  if( doesntHavDnone ){
    sMenuNav.classList.add("d-none");
  }
 else{
    sMenuNav.classList.remove("d-none");
  }
});



// enroll lessons
// document.addEventListener("DOMContentLoaded", function () {
//   const enrollButtons = document.querySelectorAll(".enroll-button");

//   enrollButtons.forEach(button => {
//     button.addEventListener("click", function () {
//       const subject = this.getAttribute("data-subject");
//       alert(`You have enrolled in ${subject} lessons!`);
//     });
//   });
// });

// Schedule and Availability:
// document.addEventListener("DOMContentLoaded", function () {
//   const scheduleTable = document.querySelector(".table");

  // Get the current day (0: Sunday, 1: Monday, ..., 6: Saturday)
  // const currentDay = new Date().getDay();

  // Highlight the row for the current day
//   if (currentDay > 0) {
//     const rows = scheduleTable.querySelectorAll("tbody tr");
//     rows[currentDay - 1].classList.add("highlighted");
//   }
// });



// document.addEventListener("DOMContentLoaded", function () {
//   const eventsContainer = document.getElementById("events-container");

//   const eventsData = [
//     {
//       title: "Piano Workshop: Mastering Techniques",
//       date: "2023-08-15",
//       description: "Join us for an intensive workshop on mastering piano techniques.",
//     },
//     {
//       title: "Music Theory Seminar: Exploring Harmony",
//       date: "2023-09-10",
//       description: "Learn about advanced music theory concepts and explore harmony in music.",
//     },
//     {
//       title: "Beginner's Piano Recital",
//       date: "2023-10-05",
//       description: "Celebrate the progress of our beginner students with their first piano recital.",
//     },
//     {
//       title: "Composition Workshop: Creating Original Music",
//       date: "2023-11-20",
//       description: "Discover the art of composing music and creating your own original pieces.",
//     },
//     {
//       title: "Holiday Piano Showcase",
//       date: "2023-12-15",
//       description: "Celebrate the holiday season with a special piano showcase featuring festive music.",
//     },
//     {
//       title: "Jazz Piano Masterclass",
//       date: "2024-01-25",
//       description: "Learn the intricacies of jazz piano playing from experienced jazz pianists.",
//     },
//   ];

//   eventsData.forEach(event => {
//     const eventCard = document.createElement("div");
//     eventCard.classList.add("col-md-6", "mb-4");
//     eventCard.innerHTML = `
//       <div class="card">
//         <div class="card-body">
//           <h3 class="card-title">${event.title}</h3>
//           <p class="card-text">${event.date}</p>
//           <p class="card-text">${event.description}</p>
//         </div>
//       </div>
//     `;
//     eventsContainer.appendChild(eventCard);
//   });
// });
