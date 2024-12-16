function toggleItem(id) {
    const item = document.getElementById(id);
    const icon = item.previousElementSibling.querySelector(".icon");
    item.classList.toggle("expanded");
    
	//puts a + if button is expandable and a - to show you can minimize it
    if (item.classList.contains("expanded")) {
        icon.textContent = "-";
    } else {
        icon.textContent = "+";
    }
}