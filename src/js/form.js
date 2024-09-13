document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const BASE_URL = 'https://cakes-backend.onrender.com'
    const data = {};
    console.log(data)
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Заказ успішно надіслано!');
        } else {
            alert('Сталася помилка при надсиланні заказу.');
        }
    } catch (error) {
        console.error('Помилка:', error);
        alert('Сталася помилка при надсиланні заказу.');
    }
});