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

  const rejectedButton = document.getElementById("rejected");

  rejectedButton.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedButton.classList.add("btn", "btn-sm", "bg-white", "px-8");

  // show interview preview
  document.getElementById("interview-preview").classList.remove("hidden");

  // hidden all jobs and rejected
  document.getElementById("all-job-preview").classList.add("hidden");
  document.getElementById("rejected-preview").classList.add("hidden");
});

// when interview button clicked
document
  .getElementById("all-job-preview")
  .addEventListener("click", function (e) {
    const interViewButton = e.target.closest(".interview-button");
    if (interViewButton) {
      const card = interViewButton.closest(".job-card");
      const statusBtn = card.querySelector(".status-button");

      statusBtn.innerText = "INTERVIEW";

      statusBtn.classList.remove("bg-primary/10");
      statusBtn.classList.add("bg-accent", "text-white");
    }

    const rejectButton = e.target.closest(".reject-button");
    if (rejectButton) {
      const card = rejectButton.closest(".job-card");
      const statusBtn = card.querySelector(".status-button");
      statusBtn.innerText = "REJECTED";
      statusBtn.classList.add("bg-secondary", "text-white");
      
      statusBtn.classList.remove("bg-accent","bg-primary/10");
    }
  });
