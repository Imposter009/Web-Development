// // // function getData(dataID, callBack) {
// // //     setTimeout(() => {
// // //         console.log(dataID);

// // //         if (callBack) {
// // //             callBack();
// // //         }
// // //     }, 2000);
// // // }
// // // getData(1, () => {
// // //     getData(2, () => { getData(3, () => { getData(4) }) });
// // // })



// // // function getData(dataID) {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             console.log(dataID);
// // //             resolve("success");

// // //         }, 2000);
// // //     })
// // // }
// // // getData(1).then(()=>{
// // //     return  getData(2)
// // //     }).then(()=>{
// // //         console.log("success")
// // //     })
// // // async function dataGet(){
// // //     await getData(1);
// // //     console.log("success")
// // //     await getData(2);
// // //     console.log("success")
// // //     await getData(3);
// // //     console.log("success")
// // // }
// // // dataGet();
// // class Rectangle {
// //     constructor(height, width) {
// //       this.ht = height;
// //       this.wh = width;
// //     }
// //     // Getter
// //     get area() {
// //     return this.calcArea();
// //     }
// //     // Method
// //     calcArea() {
// //       return this.ht * this.wh;
// //     }
// //     *getSides() {
// //       yield this.height;
// //       yield this.width;
// //       yield this.height;
// //       yield this.width;
// //     }
// //   }

// //   const square = new Rectangle(10, 10);

// //   console.log(square.area); // 100
// // //   console.log([...square.getSides()]); // [10, 10, 10, 10]

// class MyCar {
//   static displayDetails(ownerName, color, brand, registrationNumber) {
//     console.log(`${ownerName}, your car ${color} ${brand} has registration number ${registrationNumber}`);
//   }

//   static display(car, ownerName, color) {
//     const { brand, registrationNumber } = car;
//     this.displayDetails(ownerName, color, brand, registrationNumber);
//   }
// }

// // Input
// const car = { brand: "BMW", registrationNumber: "zzzxyyy" };
// const ownerName = "Jim";
// const color = "Red";

// MyCar.display(car, ownerName, color);

class ab {
  hello = "hi";
  constructor(val) {
    this.val = val;
  }
  greeting() {
    console.log(this.val);
    console.log(this.hello);
  }
}
const ob = new ab("namaste");
ob.greeting();