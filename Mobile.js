class Mobile {
    constructor(_image, _name, _salePrice, _oldPrice) {
        this.image = _image;
        this.name = _name;
        this.salePrice = _salePrice;
        this.oldPrice = _oldPrice;
    }

    display() {
        /*let str = '';
        str += '<tr>';
        str += '<td><img src='+ this.image +'></td>';
        str += '<td>'+this.name +'</td>'
        str += '<td>'+this.salePrice +'</td>'
        str += '<td>'+this.oldPrice +'</td>'
        str += '</tr>';*/
        let str = `<tr>
                        <td><img src="${this.image}"></td>
                        <td>${this.name}</td>
                        <td>${this.salePrice}</td>
                        <td>${this.oldPrice}</td>
                   </tr>`;
        return str;
    }

    display2() {
        let str = `<div class="card">
                            <img src="${this.image}">
                            <h1>${this.name}</h1>
                            <p class="price">${this.salePrice}</p>
                            <p class="price">${this.oldPrice}</p>
                            <p></p>
                            <p><button>Add to Cart</button></p>
                        </div>`;
        return str;
    }
}
