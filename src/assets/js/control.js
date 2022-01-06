function refresh_input() {
    let inputs = document.querySelectorAll('.auth-form__input');
    for(let input of inputs) {
        input.value = null;
    }
}

function open_login(e) {
    refresh_input();
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    let forms = modal.querySelectorAll('.auth-form');
    if(e === 1) {
        forms[0].style.display = 'none';
        forms[1].style.display = 'block';
    }
    else {
        forms[0].style.display = 'block';
        forms[1].style.display = 'none';
    }
}

function login() {
    let logins = document.querySelectorAll('.header__navbar-item.header__navbar-item--strong');
    logins[0].onclick = function() { open_login(0); }
    logins[1].onclick = function() { open_login(1); }

    let swap = document.querySelectorAll('.auth-form__btn');
    swap[0].onclick = function() { open_login(1); }
    swap[1].onclick = function() { open_login(0); }

    let re = document.querySelectorAll('.auth-form__controls-back');
    re[0].onclick = re[1].onclick = function() {
        let modal = document.querySelector('.modal');
        refresh_input();
        modal.style.display = 'none';
    }
}

function add_notify() {
    let notify = document.querySelector('.header__notify-list');
    for(let i=1; i<=5; i++) {
        let addNotify = '<li class="header__notify-item header__notify-item--viewed">';
        addNotify += '<img src="https://cf.shopee.vn/file/46c1513cc7f5a3cc445987034d8be938_tn" alt="ảnh thông báo" class="header__notify-img">';
        addNotify += '<div class="header__notify-info">';
        addNotify += '<span class="header__notify-name">Mỹ phẩm Ohui chính hãng</span>';
        addNotify += '<span class="header__notify-descriotion">Mô tả sản phẩm Ohui chính hãng</span>';
        addNotify += '</div></a></li>';
        notify.innerHTML += addNotify;
    }
}


login();
add_notify();