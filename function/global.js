
const jobs = document.getElementsByClassName("job-card");
const totalJob = document.getElementById("total-jobs");
const allJobs = document.getElementById("all-jobs");
totalJob.innerText = jobs.length
allJobs.innerText = jobs.length


// delete card 
document.getElementById("all-job-preview").addEventListener("click",function(e){
    (e.target.classList.contains("delete-card"))
        e.target.closest(".job-card").remove();

    
    console.log(222);
    
})