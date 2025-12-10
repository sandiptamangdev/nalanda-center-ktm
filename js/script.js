function toggleMenu() {
    const hamburgerBtn = document.getElementById('hamburger_btn');
    const navPopup = document.getElementById('nav_popup');

    hamburgerBtn.addEventListener('click', () => {
        navPopup.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    const navPopupList = document.querySelectorAll('.nav_popup_lists');

    navPopupList.forEach(list => {
        list.addEventListener('click', () =>{
            navPopup.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

toggleMenu()