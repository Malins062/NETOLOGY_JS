setTimeout(() => {
    console.log("timeout 1 works!");
    // while (true) {}
}, 2000);
​
console.log("Between timers");
​
setTimeout(() => {
    console.log("timeout 2 works!");
}, 2000);
​
console.log("main program works!");
​
//////////////////////////////////////
​
// const readFile = (fname, cb) => {
//     setTimeout(() => { 
//         console.log(`file ${fname} read`); 
//         cb(); 
//     }, 500);
// };
​
// const dbSelect = (query, cb) => {
//     setTimeout(() => {
//         console.log(`query ${query} done`);
//         cb();
//     }, 1000);
// };
​
// const sleep = (msec, cb) => {
//     setTimeout(() => {
//         console.log(`slept ${msec} msec`);
//         cb();
//     }, msec)
// };
​
// readFile('data.txt', () => {
//     sleep(2000, () => {
//         dbSelect('SELECT * FROM mainTable', () => {
//             sleep(3000, () => {
//                 console.log("All work done");
//             })
//         })
//     })
// });
​
// setInterval(() => console.log('!'), 1000);
​
/////////////////////////////////////////////
​
const readFile = (fname) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`File ${fname} read`);
            resolve('File content');
        }, 500);
    })
​
    return promise;
}
​
const dbSelect = (query) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Query ${query} done`);
            // resolve("DB content")
            reject("DB Error");
        }, 3000);
    })
​
    return promise;
}
​
const sleep = (msec) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Slept ${msec} msec`);
            resolve();
        }, msec);
    })
​
    return promise;
}
​
// readFile("data.txt")
//   .then((data) => {
//       console.log(data)
//       return sleep(1000);
//   })
//   .then(() => {
//       return dbSelect("SELECT * FROM MainTable");
//   })
//   .then(() => {
//       return sleep(2000);
//   })
//   .catch((err) => {
//       console.log(err);
//   })
//   .finally(() => {
//       console.log("Finally");
//   })
//   .then(() => {
//       console.log("All work done!");
//   })
//   .catch((err) => {
//       console.log(err);
//   })
​
//   setInterval(() => console.log('!'), 1000);
​
//   const rd = readFile("data.txt");
//   const dq = dbSelect("SELECT");
​
//   Promise.all([rd, dq])
//     .then((data) => {
//       console.log('All promises done:', data)
//     })
//     .catch((err) => {
//       console.log('Some promises failed:', err)
//     })
  
////////////////////////////////////////////////
​
// (async () => {
//     const rf = readFile("data.txt");
//     const s1 = sleep(1000);
//     const res = await Promise.all([rf, s1]);
//     console.log(res);
//     try {
//         await dbSelect("SELECT * FROM MainTable");
//         await sleep(2000);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("All work done!");
//     }
// }) ();
​