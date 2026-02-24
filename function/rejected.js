document.getElementById("rejected").addEventListener("click", function () {
  const allButton = document.getElementById("all");
  allButton.classList.remove("bg-[#3B82F6]", "text-white");
  allButton.classList.add("btn", "btn-sm", "bg-white", "px-8");

  const interviewButton = document.getElementById("interview");
  interviewButton.classList.remove("bg-[#3B82F6]", "text-white");
  interviewButton.classList.add("btn", "btn-sm", "bg-white", "px-8");

  const rejectedButton = document.getElementById("rejected");
  rejectedButton.classList.remove("btn", "btn-sm", "bg-white", "px-8");
  rejectedButton.classList.add(
    "btn",
    "btn-sm",
    "text-white",
    "bg-[#3B82F6]",
    "px-8",
  );

// this code for show rejected length of all jobs 
  allJobs.innerText = `${rejected.length} of ${jobs.length}`;
//   show rejected items 
document.getElementById("rejected-preview").classList.remove("hidden");
// hide // hide interview and all jobs
document.getElementById("all-job-preview").classList.add("hidden")
document.getElementById("interview-preview").classList.add("hidden")
});
