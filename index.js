const Questions = document.querySelectorAll(".Questions");

Questions.forEach((Question) => {
    Question.addEventListener("click", () => {
        const answer = Question.nextElementSibling;
        const answerParagraph = answer.querySelector("p"); // Find the <p> element inside the answer

        // Toggle the "show" class for the answer
        answer.classList.toggle("show");

        // Toggle the "active" class for the clicked question
        Question.classList.toggle("active");

        // Toggle the display of the <p> element inside the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
