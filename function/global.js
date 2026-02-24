const jobs = document.getElementsByClassName("job-card");
const totalJob = document.getElementById("total-jobs");
const allJobs = document.getElementById("all-jobs");
function updateJobCount() {
  totalJob.innerText = jobs.length;
  allJobs.innerText = jobs.length;
}
updateJobCount();
// delete card
document
  .getElementById("all-job-preview")
  .addEventListener("click", function (e) {
    const deleteBtn = e.target.closest(".delete-card");
    if (deleteBtn) {
      deleteBtn.closest(".job-card").remove();
      updateJobCount();
    }
  });
