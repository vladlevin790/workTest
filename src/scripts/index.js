let btn = document.querySelector("button");
let sectionShow = document.createElement("section");
let inputField = document.createElement("input");
let inputField2 = document.createElement("input");
let inputField3 = document.createElement("input");
let inputField4 = document.createElement("input");
let inputField5 = document.createElement("input");
let closeBtn = document.createElement("button");
let headerPop = document.createElement("h2")

sectionShow.classList.add("section-pop-up");

headerPop.innerHTML = "Поля"

inputField.type = "text";
inputField.placeholder = "Text";

inputField2.type = "password";
inputField2.placeholder = "password";

inputField3.type = "text";
inputField3.placeholder = "Text";

inputField4.type = "text";
inputField4.placeholder = "Text";

inputField5.type = "text";
inputField5.placeholder = "Text";

closeBtn.innerHTML = "Отправить";

btn.addEventListener("click", () => {
    sectionShow.append(headerPop);
    sectionShow.append(inputField);
    sectionShow.append(inputField);
    sectionShow.append(inputField2);
    sectionShow.append(inputField3);
    sectionShow.append(inputField4);
    sectionShow.append(inputField5);
    sectionShow.append(closeBtn);
    document.body.appendChild(sectionShow);

    document.body.style.background = "rgba(0, 0, 0, 0.5)";
});

closeBtn.addEventListener("click", () => {

    let data = {
        field1: inputField.value,
        field2: inputField2.value,
        field3: inputField3.value,
        field4: inputField4.value,
        field5: inputField5.value,
    };

    let jsonData = JSON.stringify(data, null, 2);
    let blob = new Blob([jsonData], { type: 'application/json' });
    let a = document.createElement('a');

    a.href = URL.createObjectURL(blob);
    a.download = 'data.json';
    a.click();

    let par = document.createElement("p");
    par.append(jsonData)

    let arr = [inputField.value,inputField2.value,inputField3.value,inputField4.value,inputField5.value];

    for(let i=0; i<arr.length; i++){
        let par2 = document.createElement("p")
        par2.append(arr[i])
        document.body.append(par2);
    }

    document.body.append(par);

    document.body.removeChild(sectionShow);
    document.body.style.background = "white";
});

document.addEventListener('mousedown', (e) => {
    if (!sectionShow.contains(e.target)) {
        document.body.removeChild(sectionShow);
        document.body.style.background = "white";
    }
});
