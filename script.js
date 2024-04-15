let currentStep = 1;
const maxSteps = 3;

function updateProgress(step) {
  const progress = document.getElementById("progress");
  progress.style.width = `${(step / maxSteps) * 100}%`;
}

function nextStep() {
  const current = document.getElementById(`step${currentStep}`);
  current.style.display = "none";
  currentStep++;
  const next = document.getElementById(`step${currentStep}`);
  next.style.display = "block";
  updateProgress(currentStep);
}

function prevStep() {
  const current = document.getElementById(`step${currentStep}`);
  current.style.display = "none";
  currentStep--;
  const prev = document.getElementById(`step${currentStep}`);
  prev.style.display = "block";
  updateProgress(currentStep);
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form Submitted!");
});

updateProgress(1);
