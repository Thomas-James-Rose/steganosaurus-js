const jimp = require('jimp')

module.exports = async filePath => {
  return await jimp.read(filePath).then(image => ({
    width: image.bitmap.width,
    height: image.bitmap.height
  }))
}