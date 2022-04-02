/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const nextTranslate = require('next-translate')

module.exports = nextTranslate(
  {
    images: {
      domains: [
        'images.unsplash.com',
        'img.icons8.com',
        'i.ibb.co',
        'i.postimg.cc',
        'fakestoreapi.com',
        'res.cloudinary.com',
        'lh3.googleusercontent.com',
        '',
      ],
    },
  }
)
