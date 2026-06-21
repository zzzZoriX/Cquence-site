const info_buttons = document.querySelectorAll('.info-buttons');
const info_blocks = document.querySelectorAll('.info-block');

info_buttons.forEach(button => change_active(button, info_blocks, info_buttons));

const main_buttons = document.querySelectorAll('.main-buttons');
const main_blocks = document.querySelectorAll('.main-block');

main_buttons.forEach(button => change_active(button, main_blocks, main_buttons));


function onAccountButtonClick(){
    document.getElementById('account-window').classList.add('active');
}
function onExitFromAccountWindow(){
    document.getElementById('account-window').classList.remove('active');
}

function change_active(button, blocks, buttons){
    button.addEventListener('click', () => {
        blocks.forEach(block => block.classList.remove('active'));

        buttons.forEach(btn => btn.classList.remove('active'));

        const targetId = button.getAttribute('data-target');

        const target = document.getElementById(targetId);
        if(target){
            target.classList.add('active');
            button.classList.add('active');
        }
    })
}