const parseEnv = () => {
  const parsedArgs = Object.entries(process.env)
    .filter((item) => item[0].startsWith('RSS'))
    .map((item) => `${item[0]}=${item[1]}`)
    .join('; ');

  console.log(parsedArgs);
};

parseEnv();