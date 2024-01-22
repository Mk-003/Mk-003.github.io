// weather data 
function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    // Fetch weather data from the goweather API
    const apiUrl = `https://goweather.herokuapp.com/weather/${cityName}`;
  
    // Fetch weather data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the weather data and update the weather-info section
        const weatherInfoSection = document.getElementById('weatherInfo');
        weatherInfoSection.innerHTML = `
          <h2>${cityName}</h2>
          <p>Temperature: ${data.temperature}</p>
          <p>Wind: ${data.wind}</p>
          <p>Humidity: ${data.humidity}</p>
          <p>Forecast: ${data.description}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  //dispaly message on home section on click
// weather.js

// Function to toggle the visibility of the home content
function toggleHomeContent() {
    var homeSection = document.getElementById('home');
    var welcomeHeading = document.getElementById('welcomeHeading');
    var welcomeText = document.getElementById('welcomeText');
  
    // Check if the home section is currently visible
    var isVisible = homeSection.style.display !== 'none';
  
    // Toggle visibility
    homeSection.style.display = isVisible ? 'none' : 'block';
    welcomeHeading.style.display = isVisible ? 'none' : 'block';
    welcomeText.style.display = isVisible ? 'none' : 'block';
  }
  
  // Event listener for the "Home" link or button click
  document.getElementById('homeLink').addEventListener('click', function () {
    toggleHomeContent();
  });
  
 
 //like btn handler
  function toggleLike() {
      var likeButton = document.getElementById('likeButton');
    
      // Toggle the like button state
      if (likeButton.classList.contains('liked')) {
        likeButton.classList.remove('liked');
        likeButton.textContent = 'Like';
      } else {
        likeButton.classList.add('liked');
        likeButton.textContent = 'Liked!';
      }
    }
    toggleLike();
    // comment section
    function addComment() {
        var commentInput = document.getElementById('commentInput');
        var commentList = document.getElementById('commentList');
      
        var commentText = commentInput.value.trim();
    
        if (commentText !== '') {
    
            var newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
      }
      addComment();
    //fxn show/hide content in nav section
    function showContent(sectionName) {
        var homeSection = document.getElementById('home');
        var aboutSection = document.getElementById('about');
      
        // Hide all sections
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
      
        // Show the selected section
        if (sectionName === 'home') {
          homeSection.style.display = 'block';
        } else if (sectionName === 'about') {
          aboutSection.style.display = 'block';
        }
      }
      showContent('home');
    
    
      //About
      function showContent(section) {
        var homeSection = document.getElementById('home');
        var aboutSection = document.getElementById('about');
      
        if (section === 'home') {
          homeSection.style.display = 'block';
          aboutSection.style.display = 'none';
        } else if (section === 'about') {
          homeSection.style.display = 'none';
          aboutSection.style.display = 'block';
          updateAboutContent();
        }
      }
      function updateAboutContent() {
        var aboutSection = document.getElementById('about');
        aboutSection.innerHTML = '<h2>About Us</h2>' +
          '<p>Reach us at our Twitter handle <a href="https://twitter.com/weathertl" target="_blank">@weathertl</a></p>' +
          '<p>and on Facebook at <a href="https://facebook.com/weatherkl" target="_blank">@weatherkl</a>.</p>';
      }
      function toggleLike() {}
      function getWeather() {}
      function addComment() {}
    //home btn information
      function toggleHomeContent() {
        var homeContent = document.getElementById('homeContent');
        homeContent.innerHTML = "Welcome to the Home Page.We are committed to notifying the weather in your country and globally.";
    }
    
    window.onload = function() {
        // Event listener for the "Home" link or button click
        document.getElementById('homeLink').addEventListener('click', function () {
          toggleHomeContent();
        });
      
        // Like button handler
        function toggleLike() {
          var likeButton = document.getElementById('likeButton');
          
          // Toggle the like button state
          if (likeButton.classList.contains('liked')) {
            likeButton.classList.remove('liked');
            likeButton.textContent = 'Like';
          } else {
            likeButton.classList.add('liked');
            likeButton.textContent = 'Liked!';
          }
        }
      };