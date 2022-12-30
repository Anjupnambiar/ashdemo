var object;
var empId;
function onLoadFiled(object) {
    document.getElementById("createdBy").value = object.createdBy;
    document.getElementById("updatedBy").value = object.updatedBy;
    document.getElementById("firstName").value = object.firstName;
    document.getElementById("lastName").value = object.lastName;
    document.getElementById("employeeId").value = object.employeeId;
    document.getElementById("mobileNo").value = object.mobileNo;
    document.getElementById("jobTitle").value = object.jobTitle;
    document.getElementById("deptName").value = object.deptName;
    document.getElementById("companyId").value = object.companyId;
    document.getElementById("adress").value = object.adress;
}
getID();


function getID(){
    var currentUrl = window.location.href;
    console.log(currentUrl);
    var queryString = currentUrl.substring(currentUrl.indexOf('?') + 1);
    
    var queryParams = queryString.split('&');
    
    var id;
    queryParams.forEach(function(param) {
      var parts = param.split('=');
      if (parts[0] === 'id') {
        id = parts[1];
        empId=id;
        console.log(id);
        this.getData(id)
      }
    });
}

function getData(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        let emp = JSON.parse(this.response);
        object=emp.data[0];
        console.log(emp.data[0])
        onLoadFiled(emp.data[0]);
      }
    };
    xhttp.open("GET", "http://localhost:8000/contact/"+id, true);
    xhttp.send();
}

function onUpdate()
{
    this.upDateData();
    console.log(object);
    fetch('http://localhost:8000/contact/'+empId, {
    method: 'PUT',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response =>
       {
        console.log('Success:', JSON.stringify(response))
        window.location.assign('index.html')
      })
    .catch(error => console.error('Error:', error));
}

function upDateData() {
    var createdBy = document.getElementById("createdBy").value;
    var updatedBy = document.getElementById("updatedBy").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var employeeId = document.getElementById("employeeId").value;
    var mobileNo = document.getElementById("mobileNo").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var deptName = document.getElementById("deptName").value;
    var companyId = document.getElementById("companyId").value;
    var adress = document.getElementById("adress").value;
    var data={
      createdBy: createdBy, updatedBy: updatedBy, firstName: firstName, lastName: lastName,
      employeeId: employeeId, mobileNo: mobileNo, jobTitle: jobTitle, deptName: deptName, companyId: companyId
      , adress: adress
    }
    console.log(data);
    object=data;
  }

