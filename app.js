// Place your code here

// Function untuk mengambil data dari API secara asinkronus
async function fetchData() {
  const request = new Request(
    "https://module3-api-is2m.onrender.com/random-todos"
  );
  const response = await fetch(request);
  return await response.json();
}

// Function untuk membuat elemen tugas baru
function createTaskElement(task) {
  const taskElement = document.createElement("li");

  // Text untuk tugas
  const taskText = document.createElement("span");
  taskText.textContent = task;

  // Tombol untuk menandai tugas sebagai selesai
  const completeButton = document.createElement("button");
  completeButton.textContent = "Selesai";
  completeButton.addEventListener("click", function () {
    taskText.style.textDecoration = "line-through";
  });

  // Tombol untuk menghapus tugas
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.addEventListener("click", function () {
    taskElement.remove();
  });

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonDiv"; // Menambahkan class

  buttonDiv.appendChild(completeButton);
  buttonDiv.appendChild(deleteButton);

  // Menyisipkan elemen-elemen ke dalam elemen tugas
  taskElement.appendChild(taskText);
  taskElement.appendChild(buttonDiv);

  return taskElement;
}

// Function untuk menambahkan tugas baru ke dalam daftar
async function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    const taskListElement = document.getElementById("taskList");
    const taskElement = createTaskElement(newTaskText);
    taskListElement.appendChild(taskElement);
    newTaskInput.value = ""; // Mengosongkan input field setelah menambahkan tugas
  } else {
    alert("Tugas tidak boleh kosong!"); // Menampilkan alert jika input kosong
  }
}

// Function utama untuk mengambil data, membuat tugas, dan menambahkan event listener
async function main() {
  const json = await fetchData();
  const taskListElement = document.getElementById("taskList");

  // Looping untuk setiap tugas dan menambahkannya ke dalam daftar
  json.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskListElement.appendChild(taskElement);
  });

  // Event listener untuk tombol "Tambah Tugas"
  const addTaskButton = document.getElementById("addTaskBtn");
  addTaskButton.addEventListener("click", addTask);
}

// Memanggil fungsi main
main();

// Add any additional code necessary to fulfill the requirements of the assignment
