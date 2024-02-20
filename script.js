document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle 'open' class on the clicked question
            question.classList.toggle('open');

            // Toggle the visibility of the next sibling (answer) of the clicked question
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                // Close the answer
                answer.style.maxHeight = null;
            } else {
                // Open the answer
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }

            // Toggle the URL of the plus and minus icons
            const icons = question.querySelectorAll('.icons img');
            icons.forEach(icon => {
                const currentSrc = icon.getAttribute('src');
                if (currentSrc.includes('icon-plus.svg')) {
                    // Change plus icon to minus icon
                    icon.setAttribute('src', 'assets/images/icon-minus.svg');
                } else if (currentSrc.includes('icon-minus.svg')) {
                    // Change minus icon to plus icon
                    icon.setAttribute('src', 'assets/images/icon-plus.svg');
                }
            });
        });
    });
});
