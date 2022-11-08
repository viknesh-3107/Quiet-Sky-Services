
var selectedRow = null;
var id = 0;
// localStorage ['User_Count']=1;localStorage['textFile'] = '';
var text= localStorage.getItem('textFile');
var jsonfile = {};
function FormSubmit(){
    
    var formData = readFormData();
    if(localStorage ['User_Count'] == undefined) localStorage ['User_Count']=1;
    id = Number (localStorage.getItem('User_Count'));

    if(id === 1){
   
    jsonfile [id] = formData;
    text = JSON.stringify(jsonfile);
    localStorage['textFile'] = text;
    }
    else{
        jsonfile = JSON.parse(text);
        jsonfile [id] = formData;
        text = JSON.stringify(jsonfile);
        localStorage['textFile'] = text;
    }

    console.log(localStorage['textFile']);
    localStorage ['User_Count'] = 1 + (Number (localStorage.getItem('User_Count')));
    resetForm();
    }

function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Mobile"] = document.getElementById("Mobile").value;
    formData["Country"] = document.getElementById("Country").value;
    formData["About"] = document.getElementById("About").value;
    formData["Msg"] = document.getElementById("Msg").value;
    return formData;
}

function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Mobile').value = '';
    document.getElementById('Country').value = '';
    document.getElementById('About').value = '';
    document.getElementById('Msg').value = '';
    selectedRow = null;
}


