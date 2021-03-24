class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display(){
        let str = `<tr>
                        <td>${this.name}</td>
                        <td>${this.price}</td>
                   </tr>`;
        return str;
    }
}
