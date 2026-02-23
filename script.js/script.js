let totalJob = document.getElementById('total');
let appliedJob = document.getElementById('Interview');
let rejectedJob = document.getElementById('Rejected');
let cardSection = document.querySelector('#card')
let jobCount = document.getElementById('jobCount')
console.log(cardSection.children.length);
// update total jobs
 function updatedJobs(){
     let total = document.getElementById('card').children.length;
     totalJob.innerText = total;
    jobCount.innerText = total+" "+"Jobs";
 }
updatedJobs()
// interview 
// delte card 
document.getElementById('card').addEventListener('click',function(e){
    if(e.target.closest('.delete')){
        e.target.closest('.card1').remove();
        if(document.querySelector('#card').children.length===0){
            document.querySelector('#nojobs').style.display='block'
        }
        updatedJobs()
    }
})
// toggle style
let allFilter = document.getElementById('allFilter');
let interviewFilter = document.getElementById('interviewFilter');
let rejectedFilter = document.getElementById('rejectedFilter')
function toggleStyle(id){
    // remove bg-info and text-white
    allFilter.classList.remove('bg-info', 'text-white');
    interviewFilter.classList.remove('bg-info','text-white');
    rejectedFilter.classList.remove('bg-info','text-white');
//    ad bg-white-300 and text-grey
    allFilter.classList.add('bg-white-300', 'text-gray');
    interviewFilter.classList.add('bg-white-300','text-gray');
    rejectedFilter.classList.add('bg-white-300','text-gray');
    // toggle sected button
    const selectedButton = document.getElementById(id);
    console.log(selectedButton);
    selectedButton.classList.remove('bg-white-300','text-gray')
    selectedButton.classList.add('bg-info','text-white');
}
// toggle style for all filter

// badge status toggle
 cardSection.addEventListener('click',function(e){
     if(e.target.closest('.interview')){
        e.target.closest('.card1').querySelector('.apply-status').innerText ="Interview";
        e.target.closest('.card1').querySelector('.apply-status').classList.remove('badge-outline' ,'badge-secondary','text-red-500');
        e.target.closest('.card1').querySelector('.apply-status').classList.add('cursor-pointer','badge-outline', 'badge-accent','text-green-500');
     }else if(e.target.closest('.Rejected')){
        e.target.closest(".card1").querySelector('.apply-status').innerText ="Rejected";
        e.target.closest('.card1').querySelector('.apply-status').classList.remove('badge-outline', 'badge-accent','text-green-500');
        e.target.closest('.card1').querySelector('.apply-status').classList.add('cursor-pointer','badge-outline', 'badge-secondary','text-red-500');
     }
  updateCount();
 })
;
//  update count 
function updateCount() {
     let cards = document.querySelectorAll('.card1');
    let interviwCount= 0;
    let rejectedCount= 0;
    
    for (const card of cards) {
        
        if(card.querySelector('.apply-status').innerText==='Interview'){
            interviwCount++;
          
            
            
        }else if(card.querySelector('.apply-status').innerText==='Rejected'){
            rejectedCount++;
            

        }
        
}

    appliedJob.innerText = interviwCount;
    rejectedJob.innerText = rejectedCount;
}
// function for all filter
function allJobs(status){
    let cards = document.querySelectorAll('.card1');
    let count =0
    for (const card of cards) { 
        if(status==='All'){
            card.style.display='block';
            count++;
        }else if(status==='Interview'){
            if(card.querySelector('.apply-status').innerText==='Interview'){
                card.style.display='block';
                count++;
            }else{
                card.style.display='none';
            }
        }else if(status==='Rejected'){
            if(card.querySelector('.apply-status').innerText==='Rejected'){
                card.style.display='block';
                count++;
            }else{
                card.style.display='none';
            }
        }
       
    }
     if (count===0) {
            document.getElementById('nojobs').style.display='block'
           
        }
         else {
               document.getElementById('nojobs').style.display='none' 
            }
updatedJobs();
updateCount();
}
document.getElementById('allFilter').addEventListener('click',function(){
    allJobs('All');
    toggleStyle('allFilter')
});
document.getElementById('interviewFilter').addEventListener('click',function(){
    allJobs('Interview');
    toggleStyle('interviewFilter');
});
document.getElementById('rejectedFilter').addEventListener('click',function(){
    allJobs('Rejected');
    toggleStyle('rejectedFilter');
});







