const copyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

export default copyObject;