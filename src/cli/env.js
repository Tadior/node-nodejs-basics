const parseEnv = () => {
  const keys = Object.entries(process.env).filter(([key]) => key.match(/RSS_/));
  const out = keys.map((el) => el.join("=")).join("; ");
  console.log(out);
};

parseEnv();
