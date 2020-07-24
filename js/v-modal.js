function openModal(element, preventClose) {

   $(element).removeAttr('class').addClass('modal-container').addClass('four');
   $('body').addClass('modal-active');

   $(element + ' .modal-close').on('click', function() {
      closeModal(element);
   });

   if(!preventClose) {
      $(element + ' .modal-close-area').on('click', function() {
         closeModal(element);
      })
   } else {
      $(element + ' .modal-close-area').off('click');
   }
}

function closeModal(element) {
   $(element).addClass('out');
   setTimeout(function() {
      $(element).removeClass('four').removeClass('out');
      $('body').removeClass('modal-active');
   }, 300) 
}
