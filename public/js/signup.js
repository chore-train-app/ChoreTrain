  // class: signup-form ||  #signup-username & signup-password  signup-email  & signup-zip
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-password').value.trim();
    const password = document.querySelector('#signup-email').value.trim();
    const zip = document.querySelector('#signup-zip')

    if (username && email && password && zip) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);