import config from "../conffig/app";

const {
  apiUrl
} = config;

const getCategories = (cb, data) => {
  fetch(`${apiUrl}products/categories`)
  .then(res => res.json())
  .then(json => {
    cb(null, {
      success: true,
      data: [json]
    })
  })
  .catch(err => cb(err))
}

export {
  getCategories
}