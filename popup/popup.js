let input = document.getElementById("billiam-check");

input.addEventListener("change", e => setValue(e.target.value));

async function setValue(value) {
    await browser.storage.local.set({ value });
}

async function init() {
    
    let { value } = browser.local.storage.get("value");
    if (!value) { 
        value = 0;
    }
    input.value = value;
    setValue(value);
}

init().catch(e => console.error(e));


/*
document.addEventListener("DOMContentLoaded", function() {
    console.log("popup created");
});

document.addEventListener("popupClosed", function() {
    console.log("popup closed");
});



document.getElementById("billiam-activate").addEventListener("click", function() {
    console.log("Button clicked");
    hello();
});
*/