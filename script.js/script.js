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

 cardSection.addEventListener('click',function(e){
     if(e.target.closest('#interview')){
        e.target.closest('.card1').querySelector('.apply-status').innerText ="Interview";
        e.target.closest('.card1').querySelector('.apply-status').classList.remove('bg-gray-300','text-gray');
        e.target.closest('.card1').querySelector('.apply-status').classList.add('bg-green-300','text-green');
     }else if(e.target.closest('#Rejected')){
        e.target.closest(".card1").querySelector('.apply-status').innerText ="Rejected";
        e.target.closest('.card1').querySelector('.apply-status').classList.remove('bg-gray-300','text-gray');
        e.target.closest('.card1').querySelector('.apply-status').classList.add('bg-red-300','text-red');
     }
     

 })
