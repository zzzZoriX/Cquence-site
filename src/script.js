const buttons = document.querySelectorAll('.info-buttons');
const blocks = document.querySelectorAll('.info-block');

buttons.forEach(button => {
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
})

function onAccountButtonClick(){
    document.getElementById('account-window').classList.add('active');
}
function onExitFromAccountWindow(){
    document.getElementById('account-window').classList.remove('active');
}