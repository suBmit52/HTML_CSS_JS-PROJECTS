const Modal = document.querySelector(".modal");
const Overlay = document.querySelector(".overlay");

 openmodal = () => {
    Modal.classList.add("active");
    Overlay.classList.add("overlayactive");

}

closemodal = () =>{
    Modal.classList.remove("active");
    Overlay.classList.remove("overlayactive");
}