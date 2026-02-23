document.getElementById("all").addEventListener("click", function () {
  const allButton = document.getElementById("interview");
  allButton.classList.remove("bg-[#3B82F6]", "text-white");
  allButton.classList.add("btn", "btn-sm", "bg-white", "px-8");

  const interviewButton = document.getElementById("all");
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
});
