const buttons = document.querySelectorAll("#image_picker li");
const image = document.querySelector("#product_img");


buttons.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        console.log(e);
        buttons.forEach((btn) => {

            btn.querySelector(".color").classList.remove("selected");
        })

        const button = e.target;
        const id = button.getAttribute("id");

        console.log(e.target)
        console.log(id);

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {

            image.classList.remove("changing");

        }, 200);
    })
})