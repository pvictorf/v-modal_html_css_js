function openModal(element, preventClose) {

   const modalEl = document.querySelector(element);
   const body = document.querySelector('body');

   if(!modalEl) {
      console.warn("[v-modal] "+modalEl +" not found.");
      return;
   }

   body.classList.add('modal-active'); 
   modalEl.classList.add('modal-container');
   modalEl.classList.add('four');

   addEventCloseModal(modalEl, element, preventClose);     
}

function addEventCloseModal(modalEl, element, preventClose) {
   const closers = modalEl.parentNode.querySelectorAll('.modal-close');
   if(closers.length) {
      for(let i in closers) {
         closers[i].addEventListener("click", function() {closeModal(element);});
      }
   }

   if(!preventClose) {
      const modalOverlay = modalEl.parentNode.querySelector('.modal');
      
      modalOverlay.addEventListener("click", function(e) {
         if(modalOverlay === e.target) {
            closeModal(element)
         }
      });
   }
}

function closeModal(element) {
   const modalEl = document.querySelector(element);
   const body = document.querySelector('body');

   modalEl.classList.add('out');

   setTimeout(function() {
      body.classList.remove('modal-active');
      modalEl.classList.remove('four')
      modalEl.classList.remove('out');
   }, 300);
}
