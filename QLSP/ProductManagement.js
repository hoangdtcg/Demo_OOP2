class ProductManagement {
    constructor() {
        this.products = [];
        this.limit = 3;
    }

    addProduct(product){
        this.products.push(product);
    }

    showAllProduct(){
        let str = '';
        for (let i = 0; i < this.products.length; i++) {
            str += this.products[i].display();
        }
        return str;
    }


    showProductOnPage(page) {
        let str = '';
        let index = (page-1)*this.limit;
        for (let i = 0; i < this.limit; i++) {
            str += this.products[i+index].display();
        }
        return str;
    }
}
