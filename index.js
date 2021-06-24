const taskContainer = document.querySelector(".task__container");

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}` ,
        imageUrl: document.getElementById("Imageurl").value ,
        taskTitle: document.getElementById("Tasktitle").value ,
        taskType: document.getElementById("Tasktype").value ,
        taskDescription: document.getElementById("Taskdescription").value
    };

 const newCard = `
 <div class="col-md-6 col-lg-4" id=${taskData.id}>
 <div class="card text-center">
   <div class="card-header d-flex justify-content-end gap-2">
     <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i>
     </button>
<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i>
</button>
   </div>
   <img src=${taskData.imageUrl}
   <div class="card-body">
     <h5 class="card-title">${taskData.taskTitle}</h5>
     <p class="card-text">${taskData.taskDescription}</p>
     <a href="#" class="btn btn-primary">${taskData.taskType}</a>
   </div>
   <div class="card-footer text-muted">
     <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
   </div>
  </div>  
</div>
 
 `;

taskContainer.insertAdjacentHTML("beforeend",newCard);

};