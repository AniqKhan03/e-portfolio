let isModalOpen = false;

function contact(event){
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_hrggpui',
            'template_kefduor',
            event.target,
            'ZDqiuEytyFn6MWNaJ'
    ).then( () => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList += " .modal__overlay--visible"
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at aniqahmedkhan123@gmail.com"
        );
    });
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal__open")
    }

    isModalOpen = true;
    document.body.classList += " modal__open"
}