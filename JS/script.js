const dataPath = 'Data/classes.json'; // there for use if needed

function searchByClassCode() {
    var classCodeInput = document.getElementById("class-code-input");
    var searchResult = document.getElementById("search-result");
  
    var classCode = classCodeInput.value;
  
    // Load the JSON file, so I have my data
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'Data/classes.json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var classes = data.classes;
  
        // searches json for matching CLASSCODE
        var matchingClass = classes.find(function(cls) {
          return cls.code === classCode;
        });
  
        // Display the search result
        if (matchingClass) {
          var resultHtml = "<div class='square'>";
          resultHtml += "<p>Room Number: " + matchingClass.room + "</p>";
          resultHtml += "<p>Professor: " + matchingClass.professor + "</p>";
          resultHtml += "<p>Class: " + matchingClass.name + "</p>";
          resultHtml += "<p>Class Code: " + matchingClass.code + "</p>";
          resultHtml += "</div>";
  
          searchResult.innerHTML = resultHtml;
        } else {
          searchResult.innerHTML = "No matching class found."; // will happen for bad searches
        }
      }
    };
    xhr.send();
  }
  
  // a seperate function so "enter" can also submit
  function handleSearch(event) {
    if (event.key === "Enter") {
      searchByClassCode();
      event.preventDefault(); // Prevent form submission
    }
  }
