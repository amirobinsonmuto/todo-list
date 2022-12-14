// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const display = () => {
    let x = document.getElementById('sidebar');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  export { display }