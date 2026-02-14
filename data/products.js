
export function productGenerator(fun, page) {
  class product {

    id;
    image;
    name;
    rating;
    priceCents;

    constructor(productDetails) {

      this.id = productDetails.id
      this.image = productDetails.image
      this.name = productDetails.name
      this.rating = productDetails.rating
      this.priceCents = productDetails.priceCents

    }

  }
  class Clothing extends product {
    sizeChartLink;

    constructor(productDetails) {
      super(productDetails)
      this.sizeChartLink = productDetails.sizeChartLink;
    }

  }


  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    const products = JSON.parse(xhr.response);


    products.map((productDetails) => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails)
      }
      return new product(productDetails)
    })


    if (page === 'main') {
      fun(products)
    }
    else if (page === 'cart') {
      fun(products)
    }



    console.log(products)
  })
  xhr.open('GET', 'https://supersimplebackend.dev/products')
  xhr.send()
}




