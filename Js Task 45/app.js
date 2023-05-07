let id = prompt("enter product id:");
let stock = () => {
  switch (id) {
    case "1":
      return alert("Available 10 pcs.");
    case "2":
      return alert("Available 256 pcs.");
    case "3":
      return alert("Available 53 pcs.");
    case "4":
      return alert("There are 3 available.");
    default:
      return alert("Out of stock");
  }
}
stock()