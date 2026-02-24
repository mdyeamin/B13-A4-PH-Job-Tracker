// show all jobs length
const jobs = document.getElementsByClassName("job-card");
const totalJob = document.getElementById("total-jobs");
const allJobs = document.getElementById("all-jobs");

const interviewList = document.getElementById("interview-preview");
// const  total interview length
const interview = document.getElementsByClassName("interview-card");
const totalInterview = document.getElementById("total-interview");
// total rejected count
const rejected = document.getElementsByClassName("rejected-card");
const totalRejected = document.getElementById("total-Rejected");

function updateInterviewCount() {
  totalInterview.innerText = interview.length;
}
function updateRejectedCount() {
  totalRejected.innerText = rejected.length;
}

// remove no jobs card by conditionally

function updateJobCount() {
  totalJob.innerText = jobs.length;

  const allPreview = document.getElementById("all-job-preview");
  const interviewPreview = document.getElementById("interview-preview");
  const rejectedPreview = document.getElementById("rejected-preview");

  if (!interviewPreview.classList.contains("hidden")) {
    allJobs.innerText = `${interview.length} of ${jobs.length}`;
    return;
  }

  if (!rejectedPreview.classList.contains("hidden")) {
    allJobs.innerText = `${rejected.length} of ${jobs.length}`;
    return;
  }

  if (!allPreview.classList.contains("hidden")) {
    allJobs.innerText = `${jobs.length}`;
  }
}

function updateTopRightJobsText() {
  const interviewPreview = document.getElementById("interview-preview");
  const rejectedPreview = document.getElementById("rejected-preview");

  if (!interviewPreview.classList.contains("hidden")) {
    allJobs.innerText = `${interview.length} of ${jobs.length}`;
    return;
  }

  if (!rejectedPreview.classList.contains("hidden")) {
    allJobs.innerText = `${rejected.length} of ${jobs.length}`;
    return;
  }

  allJobs.innerText = `${jobs.length}`;
}

function updateInterviewEmptyState() {
  const container = document.getElementById("interview-preview");
  const emptyCard = document.getElementById("no-interview");
  const count = container.querySelectorAll(".interview-card").length;

  if (count > 0) emptyCard.classList.add("hidden");
  else emptyCard.classList.remove("hidden");
}

function updateRejectedEmptyState() {
  const container = document.getElementById("rejected-preview");
  const emptyCard = container.querySelector(".no-rejected");
  const count = container.querySelectorAll(".rejected-card").length;

  if (count > 0) emptyCard.classList.add("hidden");
  else emptyCard.classList.remove("hidden");
}

function updateEmptyStates() {
  updateInterviewEmptyState();
  updateRejectedEmptyState();
}

// delete card
document.addEventListener("click", function (e) {
  const deleteBtn = e.target.closest(".delete-card");
  if (!deleteBtn) return;

  const card = deleteBtn.closest(".job-card, .interview-card, .rejected-card");
  if (!card) return;

  const jobTitle = card.querySelector("h5")?.innerText || "";

  document.querySelectorAll("#all-job-preview .job-card").forEach((c) => {
    const t = c.querySelector("h5")?.innerText || "";
    if (t === jobTitle) c.remove();
  });

  document
    .querySelectorAll("#interview-preview .interview-card")
    .forEach((c) => {
      const t = c.querySelector("h5")?.innerText || "";
      if (t === jobTitle) c.remove();
    });

  document.querySelectorAll("#rejected-preview .rejected-card").forEach((c) => {
    const t = c.querySelector("h5")?.innerText || "";
    if (t === jobTitle) c.remove();
  });

  updateJobCount();
  updateInterviewCount();
  updateRejectedCount();
  updateEmptyStates();
});

updateJobCount();
updateInterviewCount();
updateRejectedCount();
updateInterviewEmptyState();
updateRejectedEmptyState();

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

      const rejectedContainer = document.getElementById("rejected-preview", "");
      rejectedContainer.querySelectorAll(".rejected-card").forEach((c) => {
        const t = c.querySelector("h5")?.innerText || "";
        if (t === jobTitle) c.remove();
      });

      updateInterviewCount();
      updateRejectedCount();
      updateEmptyStates();
      updateJobCount();
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

      const interviewContainer = document.getElementById("interview-preview");
      interviewContainer.querySelectorAll(".interview-card").forEach((c) => {
        const t = c.querySelector("h5")?.innerText || "";
        if (t === jobTitle) c.remove();
      });

      updateRejectedCount();
      updateInterviewCount();
      updateJobCount();
      updateEmptyStates();
    }
  });

document.addEventListener("click", function (e) {
  const interviewBtn = e.target.closest(".interview-button");
  const rejectBtn = e.target.closest(".reject-button");
  if (!interviewBtn && !rejectBtn) return;

  const card = e.target.closest(".interview-card, .rejected-card");
  if (!card) return;

  const jobTitle = card.querySelector("h5")?.innerText || "";
  const interviewContainer = document.getElementById("interview-preview");
  const rejectedContainer = document.getElementById("rejected-preview");

  if (rejectBtn && card.classList.contains("interview-card")) {
    rejectedContainer.querySelectorAll(".rejected-card").forEach((c) => {
      const t = c.querySelector("h5")?.innerText || "";
      if (t === jobTitle) c.remove();
    });

    card.classList.remove("interview-card");
    card.classList.add("rejected-card");

    const statusBtn = card.querySelector(".status-button");
    if (statusBtn) {
      statusBtn.innerText = "REJECTED";
      statusBtn.classList.remove("bg-primary/10", "bg-accent");
      statusBtn.classList.add("bg-secondary", "text-white");
    }

    rejectedContainer.appendChild(card);
  }

  if (interviewBtn && card.classList.contains("rejected-card")) {
    interviewContainer.querySelectorAll(".interview-card").forEach((c) => {
      const t = c.querySelector("h5")?.innerText || "";
      if (t === jobTitle) c.remove();
    });

    card.classList.remove("rejected-card");
    card.classList.add("interview-card");

    const statusBtn = card.querySelector(".status-button");
    if (statusBtn) {
      statusBtn.innerText = "INTERVIEW";
      statusBtn.classList.remove("bg-primary/10", "bg-secondary");
      statusBtn.classList.add("bg-accent", "text-white");
    }

    interviewContainer.appendChild(card);
  }

  updateInterviewCount();
  updateRejectedCount();
  updateJobCount();
  updateEmptyStates();
});
