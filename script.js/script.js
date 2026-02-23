let totalJob = document.getElementById('total');
let appliedJob = document.getElementById('Interview');
let rejectedJob = document.getElementById('Rejected');
let cardSection = document.querySelector('#card')
let allJobs = document.getElementById('jobCount')
console.log(cardSection.children.length);
// update total jobs
 function updatedJobs(){
     let total = document.getElementById('card').children.length;
     totalJob.innerText = total;
     allJobs.innerText = total+" "+"Jobs";
 }
updatedJobs()
// interview 
// delte card 
document.getElementById('card').addEventListener('click',function(e){
    if(e.target.closest('.delete')){
        e.target.closest('.card1').remove();
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
function alljobs(status){
    let cards = document.querySelectorAll('.card1');
    for (const card of cards) { 
        if(status==='All'){
            card.style.display='block';
        }else if(status==='Interview'){
            if(card.querySelector('.apply-status').innerText==='Interview'){
                card.style.display='block';
            }else{
                card.style.display='none';
            }
        }else if(status==='Rejected'){
            if(card.querySelector('.apply-status').innerText==='Rejected'){
                card.style.display='block';
            }else{
                card.style.display='none';
            }
        }
    }

}
document.getElementById('allFilter').addEventListener('click',function(){
    alljobs('All');
});
document.getElementById('interviewFilter').addEventListener('click',function(){
    alljobs('Interview');
});
document.getElementById('rejectedFilter').addEventListener('click',function(){
    alljobs('Rejected');
});







