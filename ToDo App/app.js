const firebaseConfig = {
    apiKey: "AIzaSyDmzqud5KQoFRy6sed2rKTfdWzr0G3Iq1s",
    authDomain: "todo-app-final-729fe.firebaseapp.com",
    projectId: "todo-app-final-729fe",
    storageBucket: "todo-app-final-729fe.appspot.com",
    messagingSenderId: "743246533802",
    appId: "1:743246533802:web:19cb1f70dddec0273e6cd3"
  };

  const app = firebase.initializeApp(firebaseConfig);





    var list = document.getElementById("list");


    function addTodo() {
        var todo_item = document.getElementById("todo-item");
        var database = firebase.database().ref("value")
   var key = database.push().key;



    var todo = {
        value : todo_item.value,
        key : key
    }

   database.child(key).set(todo)
    console.log(todo)
    
    
       todo_item.value = ""
    }


    app.database().ref("value").on('child_added',function(data){

        //create li tag with text node
         var li = document.createElement('li')
         var liText = document.createTextNode(data.val().value)
         li.appendChild(liText)
     
         //create delete button
         var delBtn = document.createElement("button")
         var delText = document.createTextNode("DELETE")
         delBtn.setAttribute("class", "btn")
         delBtn.setAttribute("onclick", "deleteItem(this)")
         delBtn.setAttribute("id", data.val().key)
         delBtn.appendChild(delText)
     
         //create edit button
         var editBtn = document.createElement("button");
         var editText = document.createTextNode("EDIT")
         editBtn.appendChild(editText)
         editBtn.setAttribute("id", data.val().key)
         editBtn.setAttribute("onclick", "editItem(this)")
     
     
         li.appendChild(delBtn)
         li.appendChild(editBtn)
     
         list.appendChild(li)
         
         
         


         })




        



function deleteItem(e) {
    app.database().ref("value").child(e.id).remove()
    e.parentNode.remove()
    
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  var editTodo = {
value:val,
key:e.id
  }

  app.database().ref("value").child(e.id).set(editTodo)
  console.log(editTodo)
  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    app.database().ref('/value').remove()
    list.innerHTML = ""
}