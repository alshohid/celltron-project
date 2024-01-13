/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:'/celltron',
    distDir:'build',
    images:{
        domains: ['https://cdn.ostad.app/'],
    }
   
}

module.exports = nextConfig
