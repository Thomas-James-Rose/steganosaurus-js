const getImageDimensions = require('../src/get-image-dimensions')

describe('Get Image Dimensions', () => {

  const SAMPLE_IMAGE_PATH = './test/image-samples/101x61.png'

  it('returns the width of an image', async () => {
    expect.assertions(1)
    const dimensions = await getImageDimensions(SAMPLE_IMAGE_PATH)
    expect(dimensions.width).toEqual(101)
  })

  it('returns the height of an image', async () => {
    expect.assertions(1)
    const dimensions = await getImageDimensions(SAMPLE_IMAGE_PATH)
    expect(dimensions.height).toEqual(61)
  })

})