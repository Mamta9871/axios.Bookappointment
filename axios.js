const btn = document.getElementsByClassName("btn");
const dataContainer = document.getElementsByClassName("container")

    btn.addEventListener("submit", () => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        let userDetails = {
            name: name,
            email: email,
            phone: phone
        };

        axios.post("https://crudcrud.com/api/f86c53958b2b48bf86ade7bfbb240062/appointmentdata", userDetails)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });

        // localStorage.setItem("Userdetails", JSON.stringify(userDetails));
        // Assuming you want to delete an item with the key "myData"
        // localStorage.removeItem("myData");

    });

window.addEventListener('load', () => {
    axios.get("https://crudcrud.com/api/f86c53958b2b48bf86ade7bfbb240062/appointmentdata")
        .then((result) => {
            dataContainer.innerHTML = '';
            result.data.forEach((appointment) => {
                const appointmentDiv = document.createElement('div');
                appointmentDiv.innerHTML = `
                    <p>Name: ${appointment.name}</p>
                    <p>Email: ${appointment.email}</p>
                    <p>Number: ${appointment.phone}</p>
                    <hr>
                `;
                dataContainer.appendChild(appointmentDiv);
            });
        })
        .catch((error) => {
            console.log(error);
        });
});


  
  
