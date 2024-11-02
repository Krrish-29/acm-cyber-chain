console.log("Fetch function:")
fetch("https://api.github.com/users/Krrish-29")
    .then(request=>{
        if(!request.ok){
            console.log("Error");
        }
        return request.json();
    })
    .then(data=>console.log("Login:",data.login,"\nId:",data.id,"\nNode id:",data.node_id,"\nUrl:",data.url,"\nUser Account Type",data.user_view_type))
    .catch(error=>console.log(error))