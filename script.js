function generateTable(array) { 
    var tableBody = document.getElementById("table-body");
   
    tableBody.innerHTML = "";
    console.log(array);

    for (var i = 0; i < array.length; i++) {
      var object = array[i];
      console.log(object);
      var row = document.createElement("tr");
  
      var idCell = document.createElement("td");
      idCell.innerHTML = object.empId;
      row.appendChild(idCell);
  
      var nameCell = document.createElement("td");
      nameCell.innerHTML = object.firstName;
      row.appendChild(nameCell);
  
      
      var emailCell = document.createElement("td");
      emailCell.innerHTML = object.lastName;
      row.appendChild(emailCell);
  
      
      var emailCell = document.createElement("td");
      emailCell.innerHTML = object.mobileNo;
      row.appendChild(emailCell);
  
      
      var emailCell = document.createElement("td");
      emailCell.innerHTML = '<button class="btn btn-warning"><a href="put.html?id='+`${object.empId}`+'"><i class="fa fa-edit"></i></a></button>';
      row.appendChild(emailCell);
  
      
      var emailCell = document.createElement("td");
      emailCell.innerHTML = '<button class="btn btn-danger" type="button" onclick="onDelete(' + `${object.empId}` + ')"><i class="fa fa-trash"></i></button>';
      row.appendChild(emailCell);
  
      
      tableBody.appendChild(row);
    }
  }
  
  window.onload = getData;

  function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        let emp = JSON.parse(this.response);
        console.log(emp.data)
        generateTable(emp.data);
      }
    };


    xhttp.open("GET", "http://localhost:8000/contacts", true);
    xhttp.send();
  }
  
  async function onDelete(id) {
    console.log('deleting ' + id)
    fetch(`http://localhost:8000/contact/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.getData();
      })
      .catch(error => console.error(error))
  }