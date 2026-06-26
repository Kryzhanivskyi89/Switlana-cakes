const form = document.getElementById('contactForm');
const BASE_URL = 'https://cakes-backend.onrender.com';

if (form) {
  const submitButton = form.querySelector('.form-submit');
  const status = document.getElementById('formStatus');
  const submitContent = submitButton?.innerHTML || submitButton?.dataset.submitText || 'Надіслати заявку';

  const setStatus = (message, type = '') => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('is-success', 'is-error');
    if (type) status.classList.add(`is-${type}`);
  };

  const getErrorElement = field => {
    const fieldWrap = field.closest('.form-field');
    if (!fieldWrap) return null;

    let error = fieldWrap.querySelector('.form-error');
    if (!error) {
      error = document.createElement('p');
      error.className = 'form-error';
      error.id = `${field.id || field.name}-error`;
      fieldWrap.appendChild(error);
    }

    return error;
  };

  const setFieldError = (field, message = '') => {
    const error = getErrorElement(field);
    if (!error) return;

    error.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');

    if (message) {
      field.setAttribute('aria-describedby', error.id);
    } else if (field.getAttribute('aria-describedby') === error.id) {
      field.removeAttribute('aria-describedby');
    }
  };

  const normalizePhone = value => value.replace(/[^\d+]/g, '');

  const validateForm = () => {
    let isValid = true;
    const name = form.elements.name;
    const phone = form.elements.phone;

    if (name) {
      const value = name.value.trim();
      if (value.length < 2) {
        setFieldError(name, 'Вкажіть, будь ласка, імʼя — мінімум 2 символи.');
        isValid = false;
      } else {
        setFieldError(name);
      }
    }

    if (phone) {
      const phoneValue = normalizePhone(phone.value.trim());
      const digitsOnly = phoneValue.replace(/\D/g, '');

      if (digitsOnly.length < 10 || digitsOnly.length > 13) {
        setFieldError(phone, 'Вкажіть коректний номер телефону, щоб я могла з вами звʼязатися.');
        isValid = false;
      } else {
        setFieldError(phone);
      }
    }

    return isValid;
  };

  form.addEventListener('input', event => {
    const field = event.target;
    if (field.matches('input, textarea')) {
      setFieldError(field);
      setStatus('');
    }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    setStatus('');

    if (!validateForm()) {
      setStatus('Будь ласка, перевірте поля з підказками вище.', 'error');
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add('is-loading');
        submitButton.textContent = 'Надсилаємо…';
      }

      const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      setStatus('Замовлення успішно надіслано! Я звʼяжусь з вами найближчим часом.', 'success');
    } catch (error) {
      console.error('Помилка:', error);
      setStatus('Не вдалося надіслати форму. Спробуйте ще раз або напишіть у соцмережі.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.classList.remove('is-loading');
        submitButton.innerHTML = submitContent;
      }
    }
  });
}
