function searchFAQs() {
        var input = document.getElementById('search-input');
        var filter = input.value.toUpperCase();
        var faqList = document.getElementById('faq-list');
        var questions = faqList.getElementsByClassName('accordion-button');

        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var txtValue = question.innerText || question.textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                question.closest('.accordion-item').style.display = '';
            } else {
                question.closest('.accordion-item').style.display = 'none';
            }
        }
    }
function changeColor(elementId){
    
  var textElement = document.getElementById(elementId);   
  var currentColor = textElement.style.color;
  console.log(currentColor);
  if (currentColor === 'rgb(51, 51, 51)') {
    textElement.style.color = '#6BB4FD';
    textElement.style.backgroundColor = '#F6FBFF';
  } 
  else {
    textElement.style.color = '#333333';
    textElement.style.backgroundColor = '#FFFFFF';
  }
}
