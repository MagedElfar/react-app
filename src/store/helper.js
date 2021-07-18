function mapStateToProps(state){
    return({
        products: state
    })
}

function creatSlug(text , split , join){
    let slug = text.split(split).join(join);
    return slug
}

function fuindDoublicatTitle(arr){
    let countArr = arr.reduce(
        (obj , item) => {
            let unNumStr =  item.replace(/\d+/g,'').trim()
            if(!obj[unNumStr]){
                obj[unNumStr] = 0;
            }
            obj[unNumStr]++;
            return obj;
        } , {}
    )
    return countArr

}

export {mapStateToProps , creatSlug , fuindDoublicatTitle}