const ToggleBtn = document.querySelector('.toggle_btn')
const ToggleBtnIcon = document.querySelector('.toggle_btn i')
const DropDownMenu = document.querySelector('.dropdown_menu')

ToggleBtn.onclick = function (){
    DropDownMenu.classList.toggle('open')
    const isOpen = DropDownMenu.classList.contains('open')

    ToggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

