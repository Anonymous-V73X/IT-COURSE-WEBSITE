////                                                                                       
//// Weekly Returns Popup For OCTOBER                                                      
////                                                                                       

document.addEventListener("DOMContentLoaded", () => {
  // Select the "Pending" button and the popup elements
  const pendingButton = document.querySelector(".descr-oct");
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close");
  const weeklyReturnsElement = document.getElementById("weekly-returns");

  // Get remuneration value and calculate weekly returns
  const remuneration = parseFloat(
    document.querySelector(".remuneration").nextElementSibling.textContent
  );
  const weeklyReturns = remuneration / 4;

  // Week start and end times based on Wednesday 3:00 EAT to next Wednesday 3:00 EAT
  const weekStartTimes = [
    new Date("2024-10-02T00:00:00Z"), // Week 1 start: Oct 2, 2024, 3:00 AM EAT
    new Date("2024-10-09T00:00:00Z"), // Week 2 start: Oct 9, 2024, 3:00 AM EAT
    new Date("2024-10-16T00:00:00Z"), // Week 3 start: Oct 16, 2024, 3:00 AM EAT
    new Date("2024-10-23T00:00:00Z"), // Week 4 start: Oct 23, 2024, 3:00 AM EAT
  ];
  const weekEndTimes = [
    new Date("2024-10-09T00:00:00Z"), // Week 1 end
    new Date("2024-10-16T00:00:00Z"), // Week 2 end
    new Date("2024-10-23T00:00:00Z"), // Week 3 end
    new Date("2024-10-30T00:00:00Z"), // Week 4 end
  ];

  // Check the current date and time
  const currentDate = new Date();

  // Generate the popup content when the pending button is clicked
  pendingButton.addEventListener("click", () => {
    let popupContent = `
        <table class="inner-table" style="width:100%; border-collapse: collapse; text-align: center;">
          <thead>
            <tr class="inner-tr" style=" background-color: rgb(249, 223, 189)!important;" >
              <th class="inner-tr" style="padding-left: 8px;" >Week</th>
              <th class="inner-tr" >Description</th>
              <th class="inner-tr" >Amount</th>
              <th class="inner-tr" >Status</th>
            </tr>
          </thead>
          <tbody>
      `;

    // Loop through each week and check if it has completed
    for (let i = 0; i < 4; i++) {
      let weekStatus = "";
      let weekDescription = "";
      let weekAmount = "";

      if (currentDate >= weekEndTimes[i]) {
        // Week is complete, show weekly returns
        weekDescription = "Completed";
        weekAmount = `${weeklyReturns}`;
        weekStatus = `<i class="fas fa-check-circle" style="color:green;"></i>`;
      } else if (
        currentDate >= weekStartTimes[i] &&
        currentDate < weekEndTimes[i]
      ) {
        // Week is in progress, show clock icon
        weekDescription = "In Progress";
        weekAmount = `${weeklyReturns}`;
        weekStatus = `<i class="fas fa-clock fa-clock-X" style="color:orange;"></i>`;
      } else {
        // Week has not started
        weekDescription = "Not Started";
        weekAmount = "---";
        weekStatus = `<i class="fas fa-clock fa-clock-X" style="color:gray;"></i>`;
      }

      // Add a row to the table
      popupContent += `
          <tr style="border-bottom: 1px solid #ccc;">
            <td>${i + 1}</td>
            <td>${weekDescription}</td>
            <td>${weekAmount}</td>
            <td>${weekStatus}</td>
          </tr>
        `;
    }

    // Close the table
    popupContent += `
          </tbody>
        </table>
      `;

    // Display the popup content
    weeklyReturnsElement.innerHTML = popupContent;
    popup.style.display = "block";
  });

  // Close popup on clicking the close button
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
});






////                                                                                         
//// Weekly Returns Popup For November 2024
////                                                                                         
document.addEventListener("DOMContentLoaded", () => {
  // Select the "Pending" button and the popup elements
  const pendingButton = document.querySelector(".descr-nov");
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close");
  const weeklyReturnsElement = document.getElementById("weekly-returns");

  // Get remuneration value and calculate weekly returns
  const remuneration = parseFloat(
    document.querySelector(".remuneration").nextElementSibling.textContent
  );
  const weeklyReturns = remuneration / 4;

  // Week start and end times based on Wednesday 3:00 EAT to next Wednesday 3:00 EAT
  weekStartTimes = [
    new Date("2024-11-06T00:00:00Z"), // Week 1 start: Nov 6, 2024
    new Date("2024-11-13T00:00:00Z"), // Week 2 start
    new Date("2024-11-20T00:00:00Z"), // Week 3 start
    new Date("2024-11-27T00:00:00Z"), // Week 4 start
  ];
  weekEndTimes = [
    new Date("2024-11-13T00:00:00Z"), // Week 1 end
    new Date("2024-11-20T00:00:00Z"), // Week 2 end
    new Date("2024-11-27T00:00:00Z"), // Week 3 end
    new Date("2024-12-04T00:00:00Z"), // Week 4 end
  ];

  // Check the current date and time
  const currentDate = new Date();

  // Generate the popup content when the pending button is clicked
  pendingButton.addEventListener("click", () => {
    let popupContent = `
        <table class="inner-table" style="width:100%; border-collapse: collapse; text-align: center;">
          <thead>
            <tr class="inner-tr" style=" background-color: rgb(249, 223, 189)!important;" >
              <th class="inner-tr" style="padding-left: 8px;"  >Week</th>
              <th class="inner-tr" >Description</th>
              <th class="inner-tr" >Amount</th>
              <th class="inner-tr" >Status</th>
            </tr>
          </thead>
          <tbody>
      `;

    // Loop through each week and check if it has completed
    for (let i = 0; i < 4; i++) {
      let weekStatus = "";
      let weekDescription = "";
      let weekAmount = "";

      if (currentDate >= weekEndTimes[i]) {
        // Week is complete, show weekly returns
        weekDescription = "Completed";
        weekAmount = `${weeklyReturns}`;
        weekStatus = `<i class="fas fa-check-circle" style="color:green;"></i>`;
      } else if (
        currentDate >= weekStartTimes[i] &&
        currentDate < weekEndTimes[i]
      ) {
        // Week is in progress, show clock icon
        weekDescription = "In Progress";
        weekAmount = `${weeklyReturns}`;
        weekStatus = `<i class="fas fa-clock fa-clock-X" style="color:orange;"></i>`;
      } else {
        // Week has not started
        weekDescription = "Not Started";
        weekAmount = "---";
        weekStatus = `<i class="fas fa-clock fa-clock-X" style="color:gray;"></i>`;
      }

      // Add a row to the table
      popupContent += `
          <tr style="border-bottom: 1px solid #ccc;">
            <td>${i + 1}</td>
            <td>${weekDescription}</td>
            <td>${weekAmount}</td>
            <td>${weekStatus}</td>
          </tr>
        `;
    }

    // Close the table
    popupContent += `
          </tbody>
        </table>
      `;

    // Display the popup content
    weeklyReturnsElement.innerHTML = popupContent;
    popup.style.display = "block";
  });

  // Close popup on clicking the close button
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
});








////                                                                                         
//// Weekly Returns Popup For DECEMBER 2024
////                                                                                         
document.addEventListener("DOMContentLoaded", () => {
  // Select the "Pending" button and the popup elements
  const pendingButton = document.querySelector(".descr-dec");
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close");
  const weeklyReturnsElement = document.getElementById("weekly-returns");

  // Get remuneration value and calculate weekly returns
  const remuneration = parseFloat(
    document.querySelector(".remuneration").nextElementSibling.textContent
  );
  const weeklyReturns = 140 / 4;
  // Week start and end times based on Wednesday 3:00 AM EAT (00:00 UTC)
  const weekStartTimes = [
    new Date("2024-12-04T00:00:00Z"), // Week 1 start: Dec 4, 2024
    new Date("2024-12-11T00:00:00Z"), // Week 2 start
    new Date("2024-12-18T00:00:00Z"), // Week 3 start
    new Date("2024-12-25T00:00:00Z"), // Week 4 start
  ];

  const weekEndTimes = [
    new Date("2024-12-11T00:00:00Z"), // Week 1 end: Dec 11, 2024
    new Date("2024-12-18T00:00:00Z"), // Week 2 end
    new Date("2024-12-25T00:00:00Z"), // Week 3 end
    new Date("2025-01-01T00:00:00Z"), // Week 4 end (leading into January 1, 2025)
  ];

  // Check the current date and time
  const currentDate = new Date();

  // Generate the popup content when the pending button is clicked
  pendingButton.addEventListener("click", () => {
    let popupContent = `
        <table class="inner-table" style="width:100%; border-collapse: collapse; text-align: center;">
          <thead>
            <tr class="inner-tr" style=" background-color: rgb(249, 223, 189)!important;" >
              <th class="inner-tr" style="padding-left: 8px;"  >Week</th>
              <th class="inner-tr" >Description</th>
              <th class="inner-tr" >Amount</th>
              <th class="inner-tr" >Status</th>
            </tr>
          </thead>
          <tbody>
      `;

    // Loop through each week and check if it has completed
    for (let i = 0; i < 4; i++) {
      let weekStatus = "";
      let weekDescription = "";
      let weekAmount = "";

      if (currentDate >= weekEndTimes[i]) {
        // Week is complete, show weekly returns
        weekDescription = "Completed";
        weekAmount = `${weeklyReturns}`;
        weekStatus = `<i class="fas fa-check-circle" style="color:green;"></i>`;
      } else if (
        currentDate >= weekStartTimes[i] &&
        currentDate < weekEndTimes[i]
      ) {
        // Week is in progress, show clock icon
        weekDescription = "In Progress";
        weekAmount = `${weeklyReturns}`;
        weekStatus = `<i class="fas fa-clock fa-clock-X" style="color:orange;"></i>`;
      } else {
        // Week has not started
        weekDescription = "Not Started";
        weekAmount = "---";
        weekStatus = `<i class="fas fa-clock fa-clock-X" style="color:gray;"></i>`;
      }

      // Add a row to the table
      popupContent += `
          <tr style="border-bottom: 1px solid #ccc;">
            <td>${i + 1}</td>
            <td>${weekDescription}</td>
            <td>${weekAmount}</td>
            <td>${weekStatus}</td>
          </tr>
        `;
    }

    // Close the table
    popupContent += `
          </tbody>
        </table>
      `;

    // Display the popup content
    weeklyReturnsElement.innerHTML = popupContent;
    popup.style.display = "block";
  });

  // Close popup on clicking the close button
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
});








