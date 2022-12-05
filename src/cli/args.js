const parseArgs = () => {
  let out = [];
  let arr = [];
  process.argv.slice(2).forEach((val, id) => {
    if (id === 0 || id % 2 === 0) {
      arr.push(val);
    } else {
      arr.push(val);
      out.push(arr);
      arr = [];
    }
  });
  out.forEach((val) => {
    console.log(`${val[0].slice(2)} is ${val[1]}`);
  });
};

parseArgs();
