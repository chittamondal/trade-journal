

 /* const table = document.querySelector("#table");
const AddBtn = document.querySelector("#btn");
 

// Helper function to generate row HTML with a Delete button
function createRowHTML(item, index) {
  return `
    <tr class="tr" data-index="${index}">
      <td>${item.date}</td>
      <td>${item.day}</td>
      <td>${item.time}</td>
      <td>${item.entrytime}</td>
      <td>${item.band}</td>
      <td>${item.rsi}</td>
      <td>${item.sl}</td>
      <td>${item.targetUnreached}</td>
      <td>${item.target}</td>

      <td>

        <button class="delete-btn" style="background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">
          Delete
        </button>
      </td>
    </tr>
    
  `;
}

// 1. Page load-e LocalStorage theke data load and render
function loadSavedData() {
  const savedData = JSON.parse(localStorage.getItem("tradeList")) || [];
  table.innerHTML = ""; // Clear existing rows
  
  savedData.forEach((item, index) => {
    table.insertAdjacentHTML("beforeend", createRowHTML(item, index));
  });
}

// Initial load
loadSavedData();

// 2. Add button-e click korle new trade save baseline
AddBtn.addEventListener("click", () => {
  const inputDate = date.value.trim();
  const inputDay = day.value.trim();
  const inputTime = time.value.trim();
  const inputEntryTime = entrytime.value.trim();
  const inputBand = band.value.trim();
  const inputRsi = band.value.trim();
  const inputSl = sl.value.trim();
  const inputTarget = Target.value.trim();
  const inputTargetUnreached = TargetUnreached.value.trim();

  if (!inputDate || !inputTime) {
    alert("Please fill in at least Date and Time!");
    return;
  }

  const tradeData = {
    date: inputDate,
    day: inputDay,
    time: inputTime,
    entrytime: inputEntryTime,
    band:inputBand,
    rsi:inputRsi,
    sl: inputSl,
    targetUnreached: inputTargetUnreached,
    target: inputTarget
  };

  const existingData = JSON.parse(localStorage.getItem("tradeList")) || [];
  existingData.push(tradeData);
  localStorage.setItem("tradeList", JSON.stringify(existingData));

  // Clear inputs and reload table to keep indices synced
  date.value = "";
  day.value = "";
  time.value = "";
  entrytime.value = "";
  band.value = "";
  rsi.value = "";
  sl.value = "";
  Target.value = "";
  TargetUnreached.value = "";

  loadSavedData();
});

// 3. Delete functionality using Event Delegation
table.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const row = event.target.closest("tr");
    const indexToRemove = parseInt(row.getAttribute("data-index"), 10);

    let savedData = JSON.parse(localStorage.getItem("tradeList")) || [];
    
    // Remove selected item from array
    savedData.splice(indexToRemove, 1);

    // Save updated array back to LocalStorage
    localStorage.setItem("tradeList", JSON.stringify(savedData));

    // Refresh table view to sync data-index attributes
    loadSavedData();
  }
}); */


// table-এর বদলে tableBody সিলেক্ট করুন
const tableBody = document.querySelector("#tableBody"); 
const AddBtn = document.querySelector("#btn");

function createRowHTML(item, index) {
  return `
    <tr class="tr" data-index="${index}">
      <td>${item.date}</td>
      <td>${item.day}</td>
      <td>${item.time}</td>
      <td>${item.entrytime}</td>
      <td>${item.band}</td>
      <td>${item.rsi}</td>
      <td>${item.sl}</td>
      <td>${item.targetUnreached}</td>
      <td>${item.target}</td>
      <td>
        <button class="delete-btn" style="background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">
          Delete
        </button>
      </td>
    </tr>
  `;
}

// 1. Load saved data
function loadSavedData() {
  const savedData = JSON.parse(localStorage.getItem("tradeList")) || [];
  tableBody.innerHTML = ""; // শুধু tbody Clear হবে, হেডার মুছে যাবে না

  savedData.forEach((item, index) => {
    tableBody.insertAdjacentHTML("beforeend", createRowHTML(item, index));
  });
}

// Initial load
loadSavedData();

// ... বাকি সব JS কোড আগের মতোই থাকবে (শুধু table-এর জায়গায় tableBody ইভেন্ট লিসেনার ব্যবহার করতে পারেন)
tableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const row = event.target.closest("tr");
    const indexToRemove = parseInt(row.getAttribute("data-index"), 10);

    let savedData = JSON.parse(localStorage.getItem("tradeList")) || [];
    savedData.splice(indexToRemove, 1);
    localStorage.setItem("tradeList", JSON.stringify(savedData));

    loadSavedData();
  }
});