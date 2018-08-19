//cara 1
/*function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  var kosong = [];
  if (shoppers.length === 0) {
    return shoppers;
  }
  
  var penjualan = [{
    product: 'Sepatu Stacattu',
    shoppers: [],
    leftOver: listBarang[0][2],
    totalProfit: 0
  },
  {
    product: 'Baju Zoro',
    shoppers: [],
    leftOver: listBarang[1][2],
    totalProfit: 0
  },
  {
    product: 'Sweater Uniklooh',
    shoppers: [],
    leftOver: listBarang[2][2],
    totalProfit: 0
  }];

  
  for (var i = 0; i < shoppers.length; i++) {
    if (shoppers[i].product === 'Sepatu Stacattu' && penjualan[0].leftOver >= shoppers[i].amount) {
      penjualan[0].shoppers.push(shoppers[i].name);
      penjualan[0].leftOver -= shoppers[i].amount;
      penjualan[0].totalProfit += shoppers[i].amount * listBarang[0][1];
    }
    if (shoppers[i].product === 'Baju Zoro' && penjualan[1].leftOver >= shoppers[i].amount) {
      penjualan[1].shoppers.push(shoppers[i].name);
      penjualan[1].leftOver -= shoppers[i].amount;
      penjualan[1].totalProfit += shoppers[i].amount * listBarang[1][1];
    }
    if (shoppers[i].product === 'Sweater Uniklooh' && penjualan[2].leftOver >= shoppers[i].amount) {
      penjualan[2].shoppers.push(shoppers[i].name);
      penjualan[2].leftOver -= shoppers[i].amount;
      penjualan[2].totalProfit += shoppers[i].amount * listBarang[2][1];
    }
  }
  return penjualan;
}*/

function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                  ];

  // you can only write your code here!
  var saleArr = [];

  if (shoppers.length === 0) {
    return saleArr;
  }

  for (var i = 0; i < listBarang.length; i++) {
    var productObj = {};
    var productArr = [];
    var productStock = listBarang[i][2];
    var costProd = 0;
    for (var j = 0; j < shoppers.length; j++) {
      if (listBarang[i][0] === shoppers[j].product && productStock >= shoppers[j].amount) {
        productArr.push(shoppers[j].name);
        costProd += shoppers[j].amount;
        productStock -= shoppers[j].amount;
      }
    }
    productObj.product = listBarang[i][0];
    productObj.shoppers = productArr;
    productObj.leftOver = listBarang[i][2] - costProd;
    productObj.totalProfit = listBarang[i][1] * costProd;
    saleArr.push(productObj);
  }

  return saleArr;
}

  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]