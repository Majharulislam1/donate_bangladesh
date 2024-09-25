

const my_amount =document.getElementById('my_amount');
const donation = document.getElementById('donation');
const history = document.getElementById('history');




function donate_amount(id,set_id,title){
      let input_value = document.getElementById(id);
    
      if (isNaN(input_value.value) || !isFinite(input_value.value)){
          return alert("Invalid Donation Amount");
      }
      else if(parseInt(input_value.value)<0){
        return alert("Invalid Donation Amount");
      }
      else{
           
        const set_donate = document.getElementById(set_id);
        set_donate.innerText = parseInt(set_donate.innerText) + parseInt(input_value.value);

        my_amount.innerText = parseInt(my_amount.innerText) - parseInt(input_value.value);
        document.getElementById('my_modal_5').showModal();
        

        const history_title =document.getElementById(title);
        
        const history_container = document.querySelector('.history_container');
        history_container.innerHTML += `
                <div class="border border-[#1111111a] rounded-2xl mt-4 p-[2rem]">
                         <h2 class="lg:text-[1.25rem] sm:text-[1rem] font-semibold">${input_value.value} Taka is ${history_title.innerText}</h2>
                         <h3 class="lg:text-[1rem] sm:text-[0.875rem] text-[#111111b3]">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</h3>
                    </div>
        `;
        
        input_value.value='';

      }
           
}



donation.addEventListener('click',function(){

  donation.classList.add('bg-[#B4F461]');
  donation.classList.add('text-[#000000]');
  donation.classList.add('hover:bg-[#B4F461]');
  donation.classList.add('hover:border-none');
  donation.classList.add('hover:text-[#000000]');

  history.classList.remove('bg-[#B4F461]');
  history.classList.remove('text-[#000000]');
  history.classList.remove('hover:bg-[#B4F461]');
  history.classList.remove('hover:border-none');
  history.classList.remove('hover:text-[#000000]');


     const history_container = document.querySelector('.history_container');
     history_container.classList.add('hidden');
     const donation_container = document.querySelector('.donation_container');
  donation_container.classList.remove('hidden');
});


history.addEventListener('click',function(){
  history.classList.add('bg-[#B4F461]');
  history.classList.add('text-[#000000]');
  history.classList.add('hover:bg-[#B4F461]');
  history.classList.add('hover:border-none');
  history.classList.add('hover:text-[#000000]');

  donation.classList.remove('bg-[#B4F461]');
  donation.classList.remove('text-[#000000]');
  donation.classList.remove('hover:bg-[#B4F461]');
  donation.classList.remove('hover:border-none');
  donation.classList.remove('hover:text-[#000000]');

  


  const history_container = document.querySelector('.history_container');
  history_container.classList.remove('hidden');

  const donation_container = document.querySelector('.donation_container');
  donation_container.classList.add('hidden');
     
});
