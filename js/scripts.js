
document.getElementById("addBtn").onclick = function () {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;

    if (category == "Select")
    {
        console.log("Error");
    }
    else 
    {
        console.log(name, description, category);
    }
    
}