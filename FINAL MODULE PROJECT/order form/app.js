


const firebaseConfig = {
  apiKey: "AIzaSyBIXh78AycXBQ-Hn-Rn_aTVy5jgUL3l--M",
  authDomain: "islamic-mart-online-store.firebaseapp.com",
  projectId: "islamic-mart-online-store",
  storageBucket: "islamic-mart-online-store.appspot.com",
  messagingSenderId: "92341977084",
  appId: "1:92341977084:web:0abfb0088b82f0bdbafc79"
};

const app = firebase.initializeApp(firebaseConfig);




function popup(){
  swal("your order has been submitted sucessfuly. The Team Is Replay within 4 Hourse On Your Email", "THAKNS", "success")
  .then((value) => {
    swal("GOING TO HOME PAGE");
    window.location.href ="/index.html"
  });
}









function addTodo() {
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const orderDetail = document.getElementById('order-detail')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone-number')
const adress = document.getElementById('adress')
const postalCode = document.getElementById('postal-code')

  var database = firebase.database().ref("value")
var key = database.push().key;



var todo = {
  firstName : firstName.value,
  key : key,
  lastName : lastName.value,
  key : key,
  orderDetail : orderDetail.value,
  key : key,
  email : email.value,
  key : key,
  phoneNumber : phoneNumber.value,
  key : key,
  adress : adress.value,
  key : key,
  postalCode : postalCode.value,
  key : key
}

database.child(key).set(todo)
console.log(todo)


firstName.value = ""
lastName.value = ""
orderDetail.value = ""
email.value = ""
phoneNumber.value = ""
adress.value = ""
postalCode.value = ""

}