let applications=JSON.parse(localStorage.getItem("applications"))||[];
        function applyjobs(jobTitle) {
            const application={
            title: jobTitle,
            status: "Applied"
        };
        applications.push(application);
        localStorage.setItem("applications",JSON.stringify(application));
        displayApplications();
        }
        function displayApplications() {
            const applist=
            document.getElementById("appList");
            applist.innerHTML=" ";
            applications.forEach((app,index)=> {
                appList.innerHTML+=`
                <div class="app.card">
                    <strong>${app.title}</strong><br>
                    Status: ${app.status}
                    <button onclick="removeApplication(${index})">Remove</button>
                    </div>
                    `;
            });
        }
        function removeApplication(index) {
            applications.splice(index,1);
            localStorage.setItem("applications",JSON.stringify(applications));
            displayApplications();
        }
        displayApplications();