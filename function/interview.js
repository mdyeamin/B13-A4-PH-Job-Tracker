document.getElementById("interview").addEventListener("click", function () {
  const allButton = document.getElementById("all");
  allButton.classList.remove("btn", "btn-sm", "bg-white", "px-8");
  allButton.classList.add(
    "btn",
    "btn-sm",
    "text-white",
    "bg-[#3B82F6]",
    "px-8",
  );

  allButton.classList.remove("bg-[#3B82F6]", "text-white");
  allButton.classList.add("btn", "btn-sm", "bg-white", "px-8");

  const interviewButton = document.getElementById("interview");
  interviewButton.classList.remove("btn", "btn-sm", "bg-white", "px-8");
  interviewButton.classList.add(
    "btn",
    "btn-sm",
    "text-white",
    "bg-[#3B82F6]",
    "px-8",
  );
// this code for show interview length of all jobs 
  allJobs.innerText = `${interview.length} of ${jobs.length}`;
  
  const rejectedButton = document.getElementById("rejected");

  rejectedButton.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedButton.classList.add("btn", "btn-sm", "bg-white", "px-8");

  // show interview preview
  document.getElementById("interview-preview").classList.remove("hidden");

  // hidden all jobs and rejected
  document.getElementById("all-job-preview").classList.add("hidden");
  document.getElementById("rejected-preview").classList.add("hidden");

});
