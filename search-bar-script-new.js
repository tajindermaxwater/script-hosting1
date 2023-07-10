function searchFAQs() {
        document.getElementById('category_header').style.display='None';
        document.getElementById('category_header1').style.display='None';
        document.getElementById('category_header2').style.display='None';
        document.getElementById('category_header3').style.display='None';
        document.getElementById('category_header4').style.display='None';
        var input = document.getElementById('search-input');
        var filter = input.value.toUpperCase();
        var faqList = document.getElementById('faq-list');
        var items = faqList.getElementsByClassName('accordion-item');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var button = item.querySelector('.accordion-button'); // Get the accordion button within the item
            var body = item.querySelector('.accordion-body'); // Get the accordion body within the item

            var buttonTxtValue = button.innerText || button.textContent;
            var bodyTxtValue = body.innerText || body.textContent;

            if (
                buttonTxtValue.toUpperCase().indexOf(filter) > -1 ||
                bodyTxtValue.toUpperCase().indexOf(filter) > -1
            ) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
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
    else if (currentColor === 'rgb(107, 180, 253)') {
    textElement.style.color = '#6BB4FD';
    textElement.style.backgroundColor = '#F6FBFF';

  }
  else {
    textElement.style.color = '#333333';
    textElement.style.backgroundColor = '#FFFFFF';
  }
}

function openaccordion(){
    var accordionElement = document.querySelector('#changeColorAccordion10');
    accordionElement.click();

}

    function filterQuestions(keyword) {
    var accordionItems = document.getElementsByClassName('accordion-item');

    // Loop through all accordion items
    for (var i = 0; i < accordionItems.length; i++) {
        var question = accordionItems[i].querySelector('h3.accordion-button');
        var questionText = question.textContent;

        // Check if the question contains the keyword
        if (questionText.includes(keyword)) {
            // Show the matching question
            accordionItems[i].style.display = 'block';
        } else {
            // Hide non-matching questions
            accordionItems[i].style.display = 'none';
        }
    }
}
