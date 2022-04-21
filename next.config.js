/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env:{
    JWT_SEC: process.env.JWT_SEC,
    REFFRESH_SEC: process.env.REFFRESH_SEC
  }
}
