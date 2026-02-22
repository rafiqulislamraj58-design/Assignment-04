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
    if(e.target.closest('#delete')){
        e.target.closest('.card').remove();
        updatedJobs()
    }
})