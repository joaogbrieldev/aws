'use strict';
const {  randomUUID } = require('node:crypto')
const axios = require('axios')
const {  promises: { writeFile, readFile, unlink }} = require('fs')
const mememaker = require('@erickwendel/meme-maker')

class Handler {
  static generateImagePath() {
    const isLocal = process.env.IS_OFFLINE
    return `${isLocal ? "" : "/tmp/"}${randomUUID()}.png`
  }
  static async saveImageLocally(imageUrl, imagePath) {
    const { data } = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(data, 'base64')
    return writeFile(imagePath, buffer)
  }

  static async generateImageBase64(imagePath) {
    return readFile(imagePath, 'base64')
  }
}

module.exports.mememaker = async (event) => {
  const options = event.queryStringParameters
  const imagePath = Handler.generateImagePath()
  console.log('downloading image...')
  await Handler.saveImageLocally(options.image, imagePath)
  const imageOuputPath = Handler.generateImagePath()
  console.log('generating meme image...')
  await mememaker({
    image: imagePath,
    outfile: imageOuputPath,
    topText: options.topText,
    bottomText: options.bottomText,
  })
  console.log('generating base64')
  const imageBuffer = await Handler.generateImageBase64(imageOuputPath)
  console.log('cleaning up!')

  await Promise.all([
    unlink(imagePath),
    unlink(imageOuputPath)
  ])

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: `<img src="data:image/jpeg;base64,${imageBuffer}"></img>`
  }

  return response
};
