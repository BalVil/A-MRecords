(() => {
  document.querySelector('.form')?.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const queryString = new URLSearchParams(formData).toString();

    const nextURL = window.location.href + '?' + queryString;
    const nextTitle = 'My new page title';
    const nextState = { additionalInformation: 'Updated the URL with JS' };

    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
  });
})();
