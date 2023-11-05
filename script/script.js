const loading = document.querySelector('.lds-ring');
const linktree = document.querySelector('.linktree');

    setTimeout( () => {
      linktree.style.display = "flex";
      loading.style.display = "none";
    }, 2000)