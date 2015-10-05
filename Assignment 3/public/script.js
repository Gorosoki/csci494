document.addEventListener("DOMContentLoaded", function () {
    // get all of our list items
    // 1. Select all the items to filter
    var dataList = document.querySelectorAll("#dataList li");
    //setup click event handlers on our checkboxes
    // 2. Select all the checkboxes to watch
    var checkBoxes = document.querySelectorAll(".filterData li input");

    for (var i = 0; i < checkBoxes.length; i++) { 
        // 3. Add an event listener for each checkbox
        // each checkbox should use filterItems()
        checkBoxes[i].addEventListener("click", filterItems, false);
        checkBoxes[i].checked = true;
    }
    // event handler
    function filterItems() {
        if (this.checked) {
            handleDisplay(true, this.value);
        } else if (!this.checked) {
            handleDisplay(false, this.value);
        }
    }
    function handleDisplay(show, value){
        for (var i = 0; i < dataList.length; i++) {
            var item = dataList[i];
            // 4. show or hide the item if the item attribute "data-category" == value
            if(item.getAttribute("data-category") == value) {
                if(show){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        }
    }
});