document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const question = document.getElementById('question').value;
    
    const questionList = document.getElementById('question-list');
    
    const listItem = document.createElement('li');
    listItem.classList.add('question-item');
    
    const questionContent = `
        <h3>${name} from ${location}</h3>
        <p>${question}</p>
        <div class="reply-form">
            <input type="text" placeholder="Your name" class="reply-name" required>
            <textarea placeholder="Your reply" class="reply-message" required></textarea>
            <button class="reply-button">Reply</button>
        </div>
        <ul class="reply-list"></ul>
    `;
    
    listItem.innerHTML = questionContent;
    questionList.appendChild(listItem);
    
    document.getElementById('form').reset();
    
    listItem.querySelector('.reply-button').addEventListener('click', function() {
        const replyName = listItem.querySelector('.reply-name').value;
        const replyMessage = listItem.querySelector('.reply-message').value;
        
        const replyList = listItem.querySelector('.reply-list');
        
        const replyItem = document.createElement('li');
        replyItem.classList.add('reply-item');
        replyItem.innerHTML = `<strong>${replyName}:</strong> ${replyMessage}`;
        
        replyList.appendChild(replyItem);
        
        listItem.querySelector('.reply-name').value = '';
        listItem.querySelector('.reply-message').value = '';
    });
});
