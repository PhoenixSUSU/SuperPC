let message = document.querySelector ('.subscription__message');
let form = document.querySelector('.intro__subscription');
let email = document.querySelector('.subscription__email');

form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  message.textContent = 'Ваш адрес ' + email.value + ' был успешно внесен в базу!';
};

