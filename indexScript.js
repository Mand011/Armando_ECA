function changeText(){
  document.getElementById("demo").innerHTML="Hi"
}
let person = {
  name: "Cristiano",
    age: 38,
favoritecolor: "white"
};
function birthday(){
  person.age=person.age+1;
  window.alert(person.age);
}
