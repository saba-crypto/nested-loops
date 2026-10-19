// EXERCISE 1
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

//EXERCISE 2
// const nums = [45, 128, 73, 128, 950, 45, 301, 67];

// function findDuplicates(nums) {
//   const duplicatedNums = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       }
//       if (nums[i] === nums[j] && !duplicatedNums.includes(nums[i])) {
//         duplicatedNums.push(nums[i]);
//         console.log(nums[i]);
//       }
//     }
//   }
// }
// findDuplicates(nums);

//EXERCISE 3
// const array1 = [120, 45, 673, 88, 512];
// const array2 = [673, 300, 45, 999, 88];

// console.log(compareArrays(array1, array2));
// function compareArrays(array1, array2) {
//   const intersectedValues = [];
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array2[j] === array1[i]) {
//         intersectedValues.push(array2[j]);
//       }
//     }
//   }
//   return intersectedValues;
// }

// EXERCISE 4
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

//EXERCISE 5
// const nums = [542, 89, 1230, 67, 875, 320, 45, 990];

// let finalResult = {
//   value1: nums[0],
//   value2: nums[1],
//   difference: undefined,
// };
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     const difference = Math.abs(nums[i] - nums[j]);
//     if (
//       finalResult.difference === undefined ||
//       difference > finalResult.difference
//     ) {
//       finalResult.difference = difference;
//       finalResult.value1 = nums[i];
//       finalResult.value2 = nums[j];
//     }
//   }
// }

// console.log(finalResult);
