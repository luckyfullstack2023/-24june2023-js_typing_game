

let saveRegistrationInfo = () =>{
    console.log("Hii Lucky you pass");
            // object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;

    console.log(`My First Name is ${fn} and My Last Name is ${ln}`);

    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);

       // page reload
       window.location.reload();
}

let logout = () =>{
    window.localStorage.clear();

    // page reload
    window.location.reload();
}

// ()(); IIFE
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');


    console.log('Page loaded successfully');

    var modal = document.getElementById('regModel');

    var modalInstance = new bootstrap.Modal(modal);

    
    
    console.log(fn);
    if(fn === null ){
        // True
        modalInstance.show();
    }

    if(fn !== null){
        document.querySelector('.l_welcome').innerHTML='Welcome'+'  '+ fn+` `+ln+'<button class="btn btn-sm btn-danger ms-4 mt-2" onclick="logout()">Logout</button>'+'<button class="btn btn-sm btn-primary ms-4 mt-2" onclick="login()">Login</button>';
    }

})();