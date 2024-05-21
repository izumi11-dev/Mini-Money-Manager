// set name
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two")
const item = document.querySelector(".item");
const incomeadd = document.querySelector(".incomeadd");
const incomedo = document.querySelector(".incomedo");
const useadd = document.querySelector(".useadd");
const usedo = document.querySelector(".usedo");
const incomebtn = document.querySelector(".incomebtn");
const usebtn = document.querySelector(".usebtn");
const btn1 = document.querySelector(".btn1");

const btn2 = document.querySelector(".btn2");

const addmain = document.querySelector(".addmain");
const removemain = document.querySelector(".removemain");

// Set income button
btn1.addEventListener("click", () => {
        addmain.style.display = "block"
});
//Set Use buttom
btn2.addEventListener("click", () => {
        removemain.style.display = "block"
})

// Set income item show body & total number
incomebtn.addEventListener("click", () => {
        let incometotal = Number(one.innerHTML) + Number(incomeadd.value);
        let incomeamout = Number(zero.innerHTML) + Number(incomeadd.value)
        one.innerHTML = incometotal;
        zero.innerHTML = incomeamout;

        let newdiv = document.createElement("div");

        let incomedovalue = document.createTextNode(incomedo.value);
        let incomeaddvalue = document.createTextNode("+" + incomeadd.value);

        let li1 = document.createElement("li");
        let li2 = document.createElement("li");

        newdiv.appendChild(li1);
        newdiv.appendChild(li2);

        li1.appendChild(incomedovalue);
        li2.appendChild(incomeaddvalue);
        item.appendChild(newdiv);
        newdiv.classList.add("items");
        incomedo.value = "";
        incomeadd.value = "";
        newdiv.style.backgroundColor = "blue"
        newdiv.style.color = "white";
        addmain.style.display = "none";

})
// Set use item show body & total number
usebtn.addEventListener("click", () => {
        let usetotal = Number(two.innerHTML) + Number(useadd.value);
        let incomeamout = Number(zero.innerHTML) - Number(useadd.value)
        two.innerHTML = usetotal;
        zero.innerHTML = incomeamout;

        let newdiv = document.createElement("div");

        let usedovalue = document.createTextNode(usedo.value);
        let useaddvalue = document.createTextNode("-" + useadd.value);

        let li1 = document.createElement("li");
        let li2 = document.createElement("li");

        newdiv.appendChild(li1);
        newdiv.appendChild(li2);

        li1.appendChild(usedovalue);
        li2.appendChild(useaddvalue);
        item.appendChild(newdiv);
        newdiv.classList.add("items");
        usedo.value = "";
        useadd.value = "";
        newdiv.style.backgroundColor = "Red";
        removemain.style.display = "none";



})