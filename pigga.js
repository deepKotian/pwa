/*!
=========================================================
* Pigga Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

window.addEventListener('load', e => {
  
    registerSW(); 
  });
  
  async function registerSW() { 
    if ('serviceWorker' in navigator) { 
      try {
        await navigator.serviceWorker.register('./sw.js'); 
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.'); 
      }
    } else {
      document.querySelector('.alert').removeAttribute('hidden'); 
    }
  }
