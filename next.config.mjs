/** @type {import('next').NextConfig} */
const nextConfig = {

  async rewrites(){
    return [
      {
        source: '/naver09e9a46cd65d798de298006f1bd4bdbc.html',
        destination: '/naver09e9a46cd65d798de298006f1bd4bdbc.html'
      },
      {
        source: '/google6a723630e4a66f34.html',
        destination: '/google6a723630e4a66f34.html'
      }
    ]
  }
};

export default nextConfig;
