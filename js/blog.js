document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = './index.html'
})
// dropdown questions
// question 1
document.getElementById('question1')
    .addEventListener('click', function () {
        const answer = document.getElementById("answer1");
            answer.classList.toggle("hidden");
    });
    // question 2
document.getElementById('question2')
.addEventListener('click', function () {
    const answer = document.getElementById("answer2");
        answer.classList.toggle("hidden");
});
// question 3
document.getElementById('question3')
    .addEventListener('click', function () {
        const answer = document.getElementById("answer3");
            answer.classList.toggle("hidden");
    });
    // question 4
document.getElementById('question4')
.addEventListener('click', function () {
    const answer = document.getElementById("answer4");
        answer.classList.toggle("hidden");
});