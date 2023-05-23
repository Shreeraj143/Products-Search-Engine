const searchText = document.querySelector("#search-items");
const productList = document.querySelector("#product-list");
const product = document.querySelectorAll(".product");
const productName = productList.getElementsByTagName("h2");

const doSearch = function () {
  //Don't keep the function name as search as it collides with other keywords
  const searchBox = searchText.value.toUpperCase();
  for (let i = 0; i < productName.length; i++) {
    //productName.length -> refers to the number of the products in the list OR the number of h2s in the list
    let match = product[i].getElementsByTagName("h2")[0];
    console.log(productName.length);

    if (match) {
      //   console.log("Matched");
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
