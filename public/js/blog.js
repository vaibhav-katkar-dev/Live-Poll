document.addEventListener('DOMContentLoaded', () => {
    const addOptionBtn = document.getElementById('addOptionBtn');
    const pollForm = document.getElementById('pollForm');
    const optionContainer = document.getElementById('optionContainer');
    const pollsList = document.getElementById('pollsList');
    let pollId = 1;

    // Add new option fields to the poll
    addOptionBtn.addEventListener('click', () => {
        const newOption = document.createElement('input');
        newOption.type = 'text';
        newOption.className = 'option';
        newOption.placeholder = `Option ${optionContainer.children.length + 1}`;
        optionContainer.appendChild(newOption);
    });

    // Handle Poll Form submission
    pollForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const pollName = document.getElementById('pollName').value;
        const pollQuestion = document.getElementById('pollQuestion').value;
        const options = Array.from(optionContainer.children).map(input => input.value);

        // Create Poll Item and display on the dashboard
        const pollItem = document.createElement('div');
        pollItem.className = 'pollItem';

        const pollTitle = document.createElement('h3');
        pollTitle.innerText = pollName;
        pollItem.appendChild(pollTitle);

        const viewCount = document.createElement('p');
        viewCount.className = 'viewCount';
        viewCount.innerText = 'Views: 0';
        pollItem.appendChild(viewCount);

        const viewPollBtn = document.createElement('button');
        viewPollBtn.innerText = 'View Poll';
        pollItem.appendChild(viewPollBtn);

        // Increment poll view count every time it's clicked (real-time simulation)
        viewPollBtn.addEventListener('click', () => {
            const currentViewCount = parseInt(viewCount.innerText.split(': ')[1]);
            viewCount.innerText = `Views: ${currentViewCount + 1}`;
        });

        // Delete Poll Option
        const deletePollBtn = document.createElement('button');
        deletePollBtn.innerText = 'Delete Poll';
        deletePollBtn.addEventListener('click', () => {
            pollItem.remove();
        });
        pollItem.appendChild(deletePollBtn);

        // Add to polls list
        pollsList.appendChild(pollItem);

        // Reset form after submission
        pollForm.reset();
        optionContainer.innerHTML = '';
    });
});
