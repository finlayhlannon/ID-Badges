var usedCodes = ["example","finlay"]; // array to hold used codes

function handleSubmit(event) {
  event.preventDefault();
  var input = document.querySelector('.search-input');
  var id = input.value.trim();
  var url = 'https://mybadges.vercel.app/badges/' + id + '.html';
  
  // check if the code is in the usedCodes array
  if (usedCodes.includes(id)) {
    window.location.href = url;
  } else {
    alert('Invalid code!');
  }
}

var submitButton = document.querySelector('.search-button');
submitButton.addEventListener('click', handleSubmit);

var inputField = document.querySelector('.search-input');
inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleSubmit(event);
  }
});
