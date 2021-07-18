function productInfo(id=Math.random() * 100 , proName="" , title="" , expert="", description="" , image="images.png" , price="" , category = "" ){
    this.id = id;
    this.proName = proName;
    this.title = title;
    this.expert = expert;
    this.description = description;
    this.image = image;
    this.price = price;
    this.category = category;
}

function CartInfo(id="" ,name= "" , count=1 , price="" , total = "" ){
    this.id = id;
    this.name = name;
    this.count = count;
    this.price = price;
    this.total = count*price
} 


export {productInfo , CartInfo}