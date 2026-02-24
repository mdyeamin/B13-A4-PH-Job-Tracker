const jobs = document.getElementsByClassName("job-card");
const totalJob = document.getElementById("total-jobs");
const allJobs = document.getElementById("all-jobs");

const interviewList = document.getElementById("interview-preview");
// const  totalinterview =
function updateJobCount() {
  totalJob.innerText = jobs.length;
  allJobs.innerText = jobs.length;
}

function interviewCount() {}

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

// when interview and rejected button clicked
// when interview button click
document
  .getElementById("all-job-preview")
  .addEventListener("click", function (e) {
    const interviewBtn = e.target.closest(".interview-button");
    const rejectBtn = e.target.closest(".reject-button");

    if (interviewBtn) {
      const card = interviewBtn.closest(".job-card");
      const statusBtn = card.querySelector(".status-button");

      statusBtn.innerText = "INTERVIEW";

      statusBtn.classList.remove("bg-primary/10");
      statusBtn.classList.add("bg-accent", "text-white");

      const jobTitle = card.querySelector("h5")?.innerText || "";
      const interviewContainer = document.getElementById("interview-preview");

      const alreadyAdded = Array.from(
        interviewContainer.querySelectorAll("h5"),
      ).some((t) => t.innerText === jobTitle);

      if (!alreadyAdded) {
        const clonedCard = card.cloneNode(true);

        clonedCard.classList.remove("job-card");
        clonedCard.classList.add("interview-card");

        const statusBtn = clonedCard.querySelector(".status-button");
        if (statusBtn) {
          statusBtn.innerText = "INTERVIEW";
          statusBtn.classList.remove("bg-primary/10", "bg-secondary");
          statusBtn.classList.add("bg-accent", "text-white");
        }

        interviewContainer.appendChild(clonedCard);
      }
    }

    if (rejectBtn) {
      const card = rejectBtn.closest(".job-card");
      const statusBtn = card.querySelector(".status-button");
      statusBtn.innerText = "REJECTED";
      statusBtn.classList.add("bg-secondary", "text-white");
      statusBtn.classList.remove("bg-accent", "bg-primary/10");
      const jobTitle = card.querySelector("h5")?.innerText || "";
      const rejectedContainer = document.getElementById("rejected-preview");

      const alreadyAdded = Array.from(
        rejectedContainer.querySelectorAll("h5"),
      ).some((t) => t.innerText === jobTitle);

      if (!alreadyAdded) {
        const clonedCard = card.cloneNode(true);

        clonedCard.classList.remove("job-card");
        clonedCard.classList.add("rejected-card");

        const statusBtn = clonedCard.querySelector(".status-button");
        if (statusBtn) {
          statusBtn.innerText = "REJECTED";
          statusBtn.classList.remove("bg-primary/10", "bg-accent");
          statusBtn.classList.add("bg-secondary", "text-white");
        }

        rejectedContainer.appendChild(clonedCard);
      }
    }
  });
