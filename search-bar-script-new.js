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
