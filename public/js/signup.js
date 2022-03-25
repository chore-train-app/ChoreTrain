  // class: signup-form ||  #signup-username & signup-password  signup-email  & signup-zip
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const zip_code = document.querySelector('#signup-zip').value.trim();

    if (username && email && password && zip_code) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, zip_code, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);