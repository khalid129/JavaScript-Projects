// Search Bar

document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;
  getJobs().then(jobs =>{
    let filteredJobs  = filterJobs(jobs,text);
    showJobs(filteredJobs);
    let number = filteredJobs.length;
    document.getElementById("numberOfJobs").textContent = number
  })
});

// Fetch Job

function getJobs() {
  return fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function filterJobs(jobs, serachText){
  if(serachText){
    let filteredJobs = jobs.filter(job =>{
      if(job.roleName.toLowerCase().includes(serachText)
      || job.type.toLowerCase().includes(serachText)
      || job.company.toLowerCase().includes(serachText)
      || job.requirements.content.toLowerCase().includes(serachText)) {
        return true;
      }
      else{
        return false;
      }
    })
    return filteredJobs;
  }
  else{
    return jobs;
  }
}


function showJobs(jobs) {
  let jobsContainer = document.querySelector(".jobs-container");
  let jobsHTML = "";
  jobs.forEach((job) => {
    jobsHTML += `<div class="job-tile">
      <div class="top">
        <img src="${job.logo}"/>
        <span class="material-icons more_horiz">more_horiz</span>
      </div>
      <div class="rolename">
        <span>${job.roleName}</span>
      </div>
      <div class="description">
        <span>${job.requirements.content}</span>
      </div>
      <div class="buttons">
        <div class="button apply-now">Apply Now</div>
        <div class="button">Message</div>
      </div>
    </div>`;
    document.getElementById("numberOfJobs").textContent = jobs.length;
    jobsContainer.innerHTML = jobsHTML;
  });
}

getJobs().then((data) => {
  showJobs(data);
});
