window.onload = function() {
    let subMenu = document.getElementsByClassName("openSubMenu"); 
    for (let i = 0; i<subMenu.length; i++) {
        let subList = subMenu[i].nextElementSibling;
        subMenu[i].addEventListener("click", function(){
            subList.classList.toggle("open");
        });
    }
}