function showTitle(element) {
    const title = element.querySelector(".project-title");
    title.style.transform = "translateY(0)";
  }
  
  function hideTitle(element) {
    const title = element.querySelector(".project-title");
    title.style.transform = "translateY(100%)";
  }
  
  function goToProject(url) {
    window.location.href = url;
  }
  document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var closePopupButton = document.getElementById("closePopup");
  
    submitButton.addEventListener("click", function() {
      sendEmail();
    });
  
    closePopupButton.addEventListener("click", function() {
      closePopup();
    });
  
    function sendEmail() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
  
      var mailtoLink = "mailto:edwardshallowis227@gmail.com.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
  
      window.location.href = mailtoLink;
    }
  
    function closePopup() {
      var popupBox = document.getElementById("popup-box");
      popupBox.style.display = "none";
    }
  });
  // Function to handle smooth scrolling
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Add event listeners to navigation links
  document.addEventListener('DOMContentLoaded', function() {
    const navigationLinks = document.querySelectorAll('.navigation a');
    navigationLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  });
 
   