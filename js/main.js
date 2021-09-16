jQuery(document).ready(function ($) {
var menu = document.querySelector('.menu');
if(menu===null){
    return;
}

var removeChildren = function(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}

var updateChildren = function(item,children){
removeChildren(item)
for(var i = 0;i < children.length;i++){
    item.appendChild(children[i]);
}
};

let menuProducts = menu.querySelector('.menu-products');
let correct = menu.querySelector('.menu__correction');
let menuItems = menu.querySelectorAll('.menu-product')

correct.addEventListener('click', function(e){
let target = e.target
var item = mylib.closestItemByClass(target, 'menu__item');

if(item === null || item.classList.contains(".menu__item_active")){
    return;
}

e.preventDefault();
var filterValue = item.getAttribute('data-filter');
//var previousBtnActive = correct.querySelector(".menu__item.menu__item_active")

if(filterValue === "all"){
updateChildren(menuProducts, menuItems)
return;
}

var filterItems = [];
for(var i = 0 ;i <menuItems.length ; i++){
var current = menuItems[i];
if(current.getAttribute('data-product') === filterValue){
    filterItems.push(current);
}
}
updateChildren(menuProducts,filterItems)
});
});

;(function(){
    var pItem = document.querySelector('.menu-products');
    if(pItem===null){
        return;
    }
    

    
    var changeProductsSize = function(target){
        var product = mylib.closestItemByClass(target, 'menu-product');
        var previousBtnActive = product.querySelector(".menu-product__btn.menu-product__btn_active");
        previousBtnActive.classList.remove('menu-product__btn_active');
        target.classList.add("menu-product__btn_active");  
    }
    

    var changeProductsPriceBySize = function(target){
      var product = mylib.closestItemByClass(target, 'menu-product');
      var productPrices = product.querySelector('.menu-product__price');
      var btnss = product.querySelectorAll(".menu-product__btn");
      productPrices.innerHTML = "";
    
      if (btnss[0].classList.contains('menu-product__btn_active')){
        productPrices.innerHTML = target.dataset.bigprice;
      }
      else if (btnss[1].classList.contains('menu-product__btn_active')){
         productPrices.innerHTML = target.dataset.mediumprice;
      }
      else if (btnss[2].classList.contains('menu-product__btn_active')){
         productPrices.innerHTML = target.dataset.lowprice;
      }
    }


    var changeInfo = function(target){
        var product = mylib.closestItemByClass(target, 'menu-product');
        var order = document.querySelector('.popup-order');

        var productPrice = product.querySelector('.menu-product__price').textContent;
        var productSize = product.querySelector('.menu-product__btn.menu-product__btn_active').textContent;

        order.querySelector('.popup-order__price-input').setAttribute('value', productPrice);
        order.querySelector('.popup-order__size-input').setAttribute('value', productSize);

        order.querySelector('.popup-order__price').textContent = productPrice;
        order.querySelector('.popup-order__size').textContent = productSize;
    }
    
    pItem.addEventListener('click', function(e){
    let target = e.target
   
    if(target.classList.contains("menu-product__btn")){
        e.preventDefault();
        changeProductsSize(target);
        changeProductsPriceBySize(target);
    }

    if(target.classList.contains("menu-product-order__button")){
        e.preventDefault();
        changeInfo(target)
    }

});
})();
 
;(function(){
window.mylib = {};

window.mylib.body = document.querySelector('body')

window.mylib.closestAttr = function (item,attr){
    var node = item;
    while(node){
        var attrValue = node.getAttribute(attr);
        if (attrValue) {
            return attrValue;
        }
        node = node.parentElement;
    }
    return null;
};
window.mylib.closestItemByClass = function(item,className){
    var node = item
    while(node){
        if (node.classList.contains(className)){
            return node;
        }
        node = node.parentElement;
    }
    return null
}

})();

jQuery(document).ready(function ($) {

$('.best-pizza-main__btn').on('click', function() {
    $('.popup-menu').removeClass('none');
    $('body').addClass('no-scroll')
})

$('.popup-menu__close').on('click', function() {
    $('.popup-menu').addClass('none');
    $('body').removeClass('no-scroll')
})


$('.menu-product-order__button').on('click', function() {
    $('.popup-order').removeClass('none');
    $('body').addClass('no-scroll')
})

$('.popup-order__close').on('click', function() {
    $('.popup-order').addClass('none');
    $('body').removeClass('no-scroll')
})    


var removeChildren = function(item){
  while(item.firstChild){
      item.removeChild(item.firstChild)
  }
}


 let buy = document.querySelectorAll(".menu-product-order__button");
 let name = document.querySelector(".popup-order__name");
 //let price = document.querySelector(".popup-order__price");
 //let size = document.querySelector(".popup-order__size");
 let img = document.querySelector(".popup-order__img")
 for ( let i = 0; i<buy.length; i++ ){
    let cartName = document.createElement('div');
    //let cartPrice = document.createElement('div');
    //let cartSize = document.createElement('div');
    let cartImg = document.createElement('img');

   buy[i].onclick = function(e){
    
    cartName.innerHTML = e.target.dataset.title;

    cartImg.src = e.target.dataset.src

    cartImg.style.width = "186px"

    cartImg.style.height = "114px"

   // cartPrice.innerHTML = e.target.dataset.price + ' P';

   // cartSize.innerHTML = e.target.dataset.size;

 $('.popup-order__close').on('click', function() {
   removeChildren(name)
  // removeChildren(price)
  // removeChildren(size)
   removeChildren(img)
  })
 

    name.appendChild(cartName);
   //price.appendChild(cartPrice);
    //size.appendChild(cartSize);
    img.appendChild(cartImg);

   }
   
 }


var link = document.getElementsByClassName("menu__item");
var active = document.getElementsByClassName('menu__item_active');

for (i = 0; link.length > i; i++) {
  link[i].onclick = function() {
    var currentActive = active[0];
    currentActive.classList.remove("menu__item_active")
    this.classList.add("menu__item_active");  
  }; 
}



});





;(function(){
    var scrollToPizza = document.querySelector('#scroll-there'); 
        $('#scroll-pizza').on('click', function() {
            var selectedPosY = 0;
            while (scrollToPizza != null) {
                selectedPosY += scrollToPizza.offsetTop;
                scrollToPizza = scrollToPizza.offsetParent;
            }
           window.scrollTo({
           top: selectedPosY,
           behavior: "smooth"
           });
        })

        $('.popup-menu__pizza').on('click', function() {
            $('.popup-menu').addClass('none');
            $('body').removeClass('no-scroll')
            var selectedPosY = 0;
            while (scrollToPizza != null) {
                selectedPosY += scrollToPizza.offsetTop;
                scrollToPizza = scrollToPizza.offsetParent;
            }
           window.scrollTo({
           top: selectedPosY,
           behavior: "smooth"
           });
        })
})(); 
