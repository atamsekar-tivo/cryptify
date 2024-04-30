// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'modifyDOM') {
    modifyDOM(message.data);
  }
});

// Function to modify the DOM of the page
function modifyDOM(data) {
  // Example: Change the background color of all paragraphs
  var paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(function(paragraph) {
    paragraph.style.backgroundColor = data.backgroundColor;
    paragraph.style.color = data.textColor;
  });
}

// Listen for changes in the URL and redirect HTTP to HTTPS
window.addEventListener('load', function() {
  if (window.location.protocol === 'http:') {
    var newUrl = window.location.href.replace(/^http:/, 'https:');
    window.location.replace(newUrl);
  }
});

// Example: Add a listener for clicks on a specific element
document.addEventListener('click', function(event) {
  // Example: Send a message to the background script when a specific element is clicked
  if (event.target.id === 'myButton') {
    chrome.runtime.sendMessage({action: 'buttonClicked'});
  }
});

// Example: Modify the DOM when a specific event occurs
document.addEventListener('DOMContentLoaded', function() {
  // Example: Send a message to the background script requesting data
  chrome.runtime.sendMessage({action: 'requestData'}, function(response) {
    // Example: Modify the DOM based on the response from the background script
    modifyDOM(response.data);
  });
});
