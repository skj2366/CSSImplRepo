var btnFlag = false;

function btnClick() {
    var btn = document.getElementById('btn');
    // console.log(btn);
    // alert(btn);
    // if (btnFlag) {
    // }
    if (!btnFlag) {
        btn.classList.add('n_button_click');
        btnFlag = true;
    } else {
        btn.classList.remove('n_button_click');
        btnFlag = false;
    }
}
