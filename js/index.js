// Register A service worker
console.log("index.js");
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      const prefix = location.pathname.replace(/\/(index\.html)?$/, '');
      console.error(prefix);
      console.warn(`${prefix}/sw.js`);

      navigator.serviceWorker.register(`${prefix}/sw.js`)
        .then(function(registration) {
          // Registration was successful
          console.log('[success] scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('[fail]: ', err);
        });
    });
  }
  
  console.log('index.js modified');