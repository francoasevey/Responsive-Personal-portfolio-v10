function bgAnimationItems(){
    const rows = 7, cols = 10;
    for (let i = 0; i <rows; i++){
        for(let j = 0; j < cols; j++){
            const div = document.createElement("div");
            div.className = `col-${j+1}`;
            document.querySelector(".bg-animation-effect").appendChild(div);
        }
    }
}
bgAnimationItems();

function filterItems(filterBtn){
    const selectCategory = filterBtn.getAttribute("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) => {
        document.querySelectorAll(".portfolio-item").forEach((item) =>{
            const category = item.getAttribute('data-category').split(',');
        })
    })
}
filterItems(document.querySelector(".portfolio-filter-btn.active"));