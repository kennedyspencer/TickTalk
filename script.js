let post = document.querySelector('#post')

post.addEventListener('click', () => {
    submitPost();
})

function submitPost() {
    let title = document.getElementById('title').value 
    let content = document.getElementById('text').value
    const timeline = document.querySelector('.center')
    const submission = document.createElement('div')
    let titleText = document.createElement('h1')
    let contentText = document.createElement('p')
    titleText.textContent = title
    contentText.textContent = content
    timeline.appendChild(submission)
    submission.appendChild(titleText)
    submission.appendChild(contentText)
    submission.classList.toggle('submission')
}
