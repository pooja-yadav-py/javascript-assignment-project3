function showPreview(event){
			//get file
          let file = document.getElementById('myfile').files;
          //check user selected any file
          if(file.length > 0){
          	//creat new file object =it is use to read the file and save the js variable
          	let fileReader = new FileReader();
          	//attech an event which will be called when the image fully loaded
          	fileReader.onload = function (event){
          		//set the source of the img
            document.getElementById("myfile-preview").style.display = "block";
             document.getElementById("myfile-preview").setAttribute("src",event.target.result);
          	};
          	//readAsDataURL will return the URLthe content of file as URL and pass selected file
          	fileReader.readAsDataURL(file[0]);

          }
		}
    
  //get button
   const button =document.getElementById("button");
   //addeventlistener
    button.addEventListener("click",preview);
    button.addEventListener("click",imageshow);

    function preview(){
     //get user name,collage name,location
     const StudentName = document.getElementById("StudentName").value; 
     const CollegeName =document.getElementById("CollegeName").value;
     const Location =document.getElementById("Location").value;

     const name =document.getElementById("name");
     const ColName =document.getElementById("ColName");
     const location =document.getElementById("location");

     name.innerHTML =StudentName;
     ColName.innerHTML=CollegeName;
     location.innerHTML=Location;
    }
    function imageshow(event){
      
          let imgPath= document.getElementById("myfile-preview").getAttribute("src");

           document.getElementById("imgDisplayed").setAttribute("src",imgPath);
           document.getElementById("right-div").style.display = "block";
           document.getElementById("myfile-preview").style.display = "block";
           }
           

   