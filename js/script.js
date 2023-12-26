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

function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling")
}

const filterBtnsContainer = document.querySelector(".portfolio-filter");
let portfolioItems;
filterBtnsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("portfolio-filter-btn") && 
    !e.target.classList.contains("active")){
        filterBtnsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        toggleBodyScrolling();
        document.querySelector(".filter-status").classList.add("active");
        document.querySelector(".filter-status p").innerHTML = `filtering <span>${e.target.innerHTML}</span> Works`;
        setTimeout(() => {
            filterItems(e.target);
        }, 400);
        setTimeout(() =>{
            document.querySelector(".filter-status").classList.remove("active");
            toggleBodyScrolling();
        },800);
    }
});

function filterItems(filterBtn){
    const selectCategory = filterBtn.getAttribute("data-filter");
        document.querySelectorAll(".portfolio-item").forEach((item) =>{
            const category = item.getAttribute('data-category').split(',');
            if(category.indexOf(selectCategory) !== -1 || selectCategory === "all"){
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
            }
        })
     portfolioItems = document.querySelectorAll(".portfolio-item.show");
}
filterItems(document.querySelector(".portfolio-filter-btn.active"));

let portfolioItemIndex;
document.addEventListener("click", (e) =>{
    if(e.target.closest(".portfolio-item")){
        const currentItem = e.target.closest(".portfolio-item");
        portfolioItemIndex = Array.from(portfolioItems).indexOf(currentItem);
        togglePopup();
        portfolioItemDetails();
    }
});

function togglePopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    toggleBodyScrolling();
}
document.querySelector(".pp-close-btn").addEventListener("click", togglePopup);

function portfolioItemDetails(){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItems[portfolioItemIndex].querySelector("img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItems[portfolioItemIndex].querySelector(".portfolio-item-title").innerHTML;
}