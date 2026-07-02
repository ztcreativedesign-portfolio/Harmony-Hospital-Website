document.addEventListener("DOMContentLoaded", function () {
    let faqButtons = document.querySelectorAll(".faq .card-header button");

    faqButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Close all open panels except the one being clicked
            faqButtons.forEach((otherBtn) => {
                if (otherBtn !== btn && otherBtn.getAttribute("aria-expanded") === "true") {
                    otherBtn.click();
                }
            });
        });
    });
});



  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the class to trigger animation
        entry.target.classList.add('visible');
        // Stop observing once the element has become visible
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

  // Observe the h1 element
  const h1Element = document.querySelector('h1');
  observer.observe(h1Element);




  
  window.addEventListener('load', function() {
    // Select the section title container and paragraph
    const sectionTitle = document.querySelector('.section-title');
    const sectionParagraph = document.querySelector('.section-title p');
    
    // Add the 'visible' class to trigger the fade-in for both
    if (sectionTitle) {
      sectionTitle.classList.add('visible');
    }
    
    if (sectionParagraph) {
      sectionParagraph.classList.add('visible'); // Trigger fade-in for the paragraph
    }
  });
  




  document.addEventListener("DOMContentLoaded", function () {
    const serviceSection = document.querySelector(".service-section");
  
    function handleScroll() {
      const sectionPosition = serviceSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (sectionPosition < screenHeight * 0.8) {
        serviceSection.classList.add("visible");
        window.removeEventListener("scroll", handleScroll); // Run animation only once
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on page load
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const faqSection = document.querySelector(".faq");
  
    function handleScroll() {
      const sectionPosition = faqSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (sectionPosition < screenHeight * 0.8) {
        faqSection.classList.add("visible");
        window.removeEventListener("scroll", handleScroll); // Run animation only once
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on page load
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const appointmentTitle = document.querySelector(".appointment .section-title");
  
    function handleScroll() {
      if (!appointmentTitle) return; // Ensure the element exists
  
      const sectionPosition = appointmentTitle.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (sectionPosition < screenHeight * 0.8) {
        appointmentTitle.classList.add("visible");
        window.removeEventListener("scroll", handleScroll); // Run animation only once
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on page load
  });
  

  