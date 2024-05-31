document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    
    if (name && email) {
        message.textContent = `Kedves ${name}, sikeresen feliratkoztál a hírlevelünkre!`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Kérjük, töltsd ki az összes mezőt!';
        message.style.color = 'red';
    }
});
