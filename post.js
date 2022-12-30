function addData() {
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
    this.uploadData(data)
  }
  
  function uploadData(data)
  {
    fetch('http://localhost:8000/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response =>
         {
          console.log('Added Successfully', JSON.stringify(response))
          window.location.assign('index.html')
        })
      .catch(error => console.error('Error', error));
  
  }


  $(document).ready(function(){
    console.log("validating")
    
    $("#firstName").keyup(function(){
      if(validateFirstName()){
        
        $("#firstName").css("border","2px solid green");
        
        $("#firstNameMsg").html("Added Successfully");
      }else{
        
        $("#firstName").css("border","2px solid red");
        $("#firstNameMsg").html("<p class='text-danger'>Enter your name please</p>");
      }
      buttonState();
    });
    
    $("#mobileNo").keyup(function(){
      
      if(validateNumber()){
        
        $("#mobileNo").css("border","2px solid green");
        
        $("#numberMsg").html("<p class='text-danger'>Added successfully</p>");
      }else{
         
        $("#mobileNo").css("border","2px solid red");
        
        $("#numberMsg").html("<p class='text-danger'>Number not valid</p>");
      }
      buttonState();
    });
    $("#createdBy").keyup(function(){
      
      if(validateCreatedBy()){
        
        $("#createdBy").css("border","2px solid green");
        
        $("#createdByMsg").html("<p class='text-danger'>Success</p>");
      }else{
          // set input password border red
        $("#createdBy").css("border","2px solid red");
        //set passMsg 
        $("#numberMsg").html("<p class='text-danger'>Number not valid</p>");
      }
    buttonState();
  });
  });
  
  function buttonState(){
    if(validateFirstName() && validateNumber() && validateCreatedBy()){
      // if the both email and password are validate
      // then button should show visible
      $("#addBtn").show();
    }else{
      // if both email and pasword are not validated
      // button state should hidden
      $("#addBtn").hide();
    }
  }
  function validateFirstName(){
    //get input password value
    var pass=$("#firstName").val();
    // check it s length
    if(pass.length > 2){
      return true;
    }else{
      return false;
    }
  
  }
  function validateNumber(){
    //get input password value
    var pass=$("#mobileNo").val();
    // check it s length
    if(pass.length < 10){
      return true;
    }else{
      return false;
    }
  }
  
  