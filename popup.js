document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
  
    chrome.storage.sync.get('enabled', function(data) {
      if (data.enabled) {
        toggleButton.textContent = 'Turn Off';
      } else {
        toggleButton.textContent = 'Turn On';
      }
    });
  
    toggleButton.addEventListener('click', function() {
      chrome.storage.sync.get('enabled', function(data) {
        const enabled = !data.enabled;
        chrome.storage.sync.set({ enabled: enabled }, function() {
          if (enabled) {
            toggleButton.textContent = 'Turn Off';
          } else {
            toggleButton.textContent = 'Turn On';
          }
        });
      });
    });
  });
  