function menuAtivo(index) {
    setTimeout(() => {
        let itemMenu = location.href.split("#")[1];
        let menu = document.getElementById('menu-' + itemMenu);
        menu.classList.add('selecionado');
        let menus = document.getElementsByClassName('menu-lateral');
        for (const item of menus) {
            item.classList.remove('selecionado')
        }
        menu.classList.add('selecionado');
    }, 2)

}