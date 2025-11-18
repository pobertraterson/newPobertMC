const alertLevelAcknowledged = localStorage.getItem('alertLevelAcknowledged') || 0;

document.addEventListener("DOMContentLoaded", () => {
    const jsonUrl = "https://raw.githubusercontent.com/pobertraterson/public-jsons-and-more/refs/heads/main/robPatDotNetAlert.json";

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const alertBox = document.getElementById("alertBox");
            const alertHeader = document.getElementById("alertHeader");
            const alertText = document.getElementById("alertText");
            const closeAlert = document.getElementById("closeAlert");
            console.log("JSON loaded from GitHub successfully.");
            console.log(data);
            console.log(alertLevelAcknowledged);

            const currentMoment = new Date();
            const expiry = new Date(data.expiry);
            console.log(currentMoment);
            if (currentMoment < expiry) {
                alertBox.style.display = "block";
                alertHeader.innerHTML = data.title;
                alertText.innerHTML = data.mainMsg;
            }
            if (currentMoment >= expiry) {
                alertBox.style.display = "none";
            }
            if (alertLevelAcknowledged >= data.id) {
                alertBox.style.display = "none";
            }
            closeAlert.addEventListener("click", () => {
                localStorage.setItem('alertLevelAcknowledged', 1);
                alertBox.style.display = "none";
            });
        })
});