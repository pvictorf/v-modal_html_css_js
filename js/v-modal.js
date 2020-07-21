function openModal(element, preventClose) {

   $(element).removeAttr('class').addClass('four');
   $('body').addClass('modal-active');

   //Evento para fechar o modal
   $(element + ' .modal-close').on('click', function() {
      closeModal(element);
   });

   //Previne fechar modal quando clicar background
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
