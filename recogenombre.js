window.onload = function () {
    let x;
    document.querySelector("i").addEventListener("click", guardanombre)
    function guardanombre() {
        x = document.querySelector("input").value;

    }
}
export { x };

