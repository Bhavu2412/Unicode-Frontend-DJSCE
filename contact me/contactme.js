function Check()
     { 
          var name=document.getElementById("name").value;
          var number=document.getElementById("contact").value;
               if (name==null || name==""){  
                    alert("Name can't be blank");   
                  }
                  else{
                    alert("Name has been accepted successfully.");   
                  }
               if(1000000000>=number || number<=9999999999){
                    alert('Your number has been accepted');
                         console.log(number);
                    }
               else{
          alert('Please input numerical characters only');
          console.log(number);
          }
      }   

    
    

