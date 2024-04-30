chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var url = details.url;
      if (url.startsWith("http://")) {
        var newUrl = url.replace("http://", "https://");
        return {redirectUrl: newUrl};
      }
    },
    {
      urls: ["http://*/*"],
      types: ["main_frame"]
    },
    ["blocking"]
  );
  