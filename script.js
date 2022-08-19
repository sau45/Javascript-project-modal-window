'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

//we are here using for loop because all button was selected by queryselectorall and get bined into array,and we are using one by one
const openModal = function () {
  // console.log('Button was clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);

  // btnsOpenModal[i].addEventListener('click',function(){
  //     // console.log('Button was clicked');
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');

  // })

  ///////////////or//////////////
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',function(d){
    // console.log(d);
    //here we are accessing property of addeventlistener method

    // console.log(d.key);

    if(d.key==='Escape' && !modal.classList.contains('hidden')){

        // if modal does not contains hidden file then call closeModal 
         
        // if(!modal.classList.contains('hidden')){
        //     closeModal();
        
        // }

        closeModal();
        
    }
})
