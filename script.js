const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content-item');

function display(){
    tabItems.forEach(tab => {
        tab.classList.remove('tab-border');
    });
    tabContents.forEach(tab => {
        tab.classList.remove('show');
    });
    this.classList.toggle('tab-border');
    if(this === document.querySelector('#tab-1')){
        document.querySelector('#tab-1-content').classList.toggle('show');
    } else 
    if(this === document.querySelector('#tab-2')){
        document.querySelector('#tab-2-content').classList.toggle('show');
    } else 
    if(this === document.querySelector('#tab-3')){
        document.querySelector('#tab-3-content').classList.toggle('show');
    }
}

tabItems.forEach(tab => tab.addEventListener('click', display));