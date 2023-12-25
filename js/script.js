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

const filterBtnsContainer = document.querySelector(".portfolio-filter");
filterBtnsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("portfolio-filter-btn") && 
    !e.target.classList.contains("active")){
        filterBtnsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        filterItems(e.target);
    }
})

function filterItems(filterBtn){
    const selectCategory = filterBtn.getAttribute("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) => {
        document.querySelectorAll(".portfolio-item").forEach((item) =>{
            const category = item.getAttribute('data-category').split(',');
            if(category.indexOf(selectCategory) !== -1 || selectCategory === "all"){
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
            }
        })
    })
}
filterItems(document.querySelector(".portfolio-filter-btn.active"));