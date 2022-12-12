const form = document.querySelector(".service_form");
const input = document.querySelector(".service_input");
const list = document.querySelector(".message-box");

const createTemplate = (value) => {
    return `
    <h2>${value}</h2>
    `;
};
window.addEventListener("load", () => {
    const values = getListOfItems();
    values.forEach((value) => {
        list.insertAdjacentHTML("afterbegin", createTemplate(value));
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    if (value) {
        list.insertAdjacentHTML("afterbegin", createTemplate(value));
        input.value = "";
        addValue(value);
    } else {
        alert("Please enter the message");
    }
});

function clearMessages() {
    deleteAll();
    list.innerHTML = '';
    return false;
}

const getListOfItems = () => {
    let list = JSON.parse(localStorage.getItem("servicemessage"));
    if (!list) {
        return [];
    }
    return list;
};

const addValue = (value) => {
    const list = getListOfItems();
    list.unshift(value);
    localStorage.setItem("servicemessage", JSON.stringify(list));
};

const deleteAll = () => {
    localStorage.removeItem("servicemessage");
}