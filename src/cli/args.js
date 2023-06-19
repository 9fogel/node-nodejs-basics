const parseArgs = () => {
  const parsedArgs = process.argv.slice(2)
    .map((item, i, arr) => {
      if (i % 2 === 0) {
        return `${item.slice(2)} is ${arr[i + 1]}`;
      } else {
        return ', ';
      }
    })
    .join('')
    .slice(0, -2);

  console.log(parsedArgs);
};

parseArgs();