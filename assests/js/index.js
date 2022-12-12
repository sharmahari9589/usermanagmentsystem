//add_user 

$(document).ready(function() {
    $("#add_user").validate({
    rules: {
    name : {
    required: true,
    minlength: 3
    },
   
    email: {
    required: true,
    email: true
    }
    }
    
})
.submit(function(event){
    alert("Data Inserted Successfully!");   

})  
})



//update validation and submisiion
$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:4000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})



//delete data

if(window.location.pathname == "/"){
    let ondelete = $(".table tbody td a.delete");
    
    ondelete.click(function(){
        let id1 = $(this).attr("id")
        
      
        var request = {
            "url" : `http://localhost:4000/api/users/${id1}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}