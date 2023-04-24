$('#theTarget').skippr({
  transition: 'fade',
  speed: 1500,
  easing: 'easeOutCirc',
  navType: 'bubble',
  childrenElementType: 'div',
  arrows: true,
  autoPlay: true,
  autoPlayDuration: 3000,
  keyboardOnAlways: false,
  hidePrevious: true,
});
$('#theTarget2').skippr({
  transition: 'fade',
  speed: 1000,
  easing: 'easeOutCirc',
  navType: 'bubble',
  childrenElementType: 'div',
  arrows: false,
  autoPlay: true,
  autoPlayDuration: 3000,
  keyboardOnAlways: false,
  hidePrevious: true,
});



let prouctIpAdd = "http://159.65.21.42:9000";
product = [];



GetNewProduct();
// function GetNewProduct() {
//   $.ajax({
//     type: 'GET',
//     url: `${prouctIpAdd}/products`,
//     success: function (response) {
//       product = response;
//       let cover = '';
//       for (let index = 0; index < product.length; index++) {
//         if (product[index]["category"] == "men's-slipper") {
//           cover += `
                    
//                         <div class="mens-grider-hold">
//                             <div class="shoe-imgs">
//                                 <a href="product.html"><img src="${prouctIpAdd}${product[index]['image']}"  alt=""></a>
//                             </div>
//                             <p><b>${product[index]['name']}</b></p>
//                             <p>${product[index]["description"]}<br>$${product[index]['price']}</p>
//                             </div>`;
//         }
                
//       }
//       $('.mens-grider').html(cover)
//       console.log(cover);
//     },
//     error: function (err) {
//       console.log(err);
//     }
        
    
//   });
// }