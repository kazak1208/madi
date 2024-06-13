document.querySelectorAll('.toast-btn').forEach(button => {
    button.addEventListener('click', () => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
});

document.querySelector('.join-btn').addEventListener('click', () => {
    const toast = document.getElementById('toast');
    toast.textContent = 'Вы успешно вступили в наш клуб';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
});

document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.news-card');
        const modal = document.getElementById('news-modal');
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalText = document.getElementById('modal-text');

        const newsImg = card.querySelector('img').src;
        const newsTitle = card.querySelector('h3').textContent;
        const newsText = card.querySelector('p').textContent;

        modalImg.src = newsImg;
        modalTitle.textContent = newsTitle;
        modalText.textContent = newsText;

        modal.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('news-modal');
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('news-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('active');
});

document.getElementById('chatbot-toggle').addEventListener('click', () => {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const iframe = chatbotContainer.querySelector('iframe');

    if (chatbotContainer.classList.contains('minimized')) {
        chatbotContainer.classList.remove('minimized');
        iframe.style.height = '430px'; // Ensure iframe has height when expanded
        iframe.style.opacity = '1';
        iframe.style.pointerEvents = 'auto';
    } else {
        iframe.style.opacity = '0';
        iframe.style.height = '0';
        iframe.style.pointerEvents = 'none';
        setTimeout(() => {
            chatbotContainer.classList.add('minimized');
        }, 300); // Wait for the transition to complete before minimizing
    }
});
