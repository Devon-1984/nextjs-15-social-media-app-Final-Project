/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/a/**", // Matches all UploadThing assets on utfs.io
      },
      {
        protocol: "https",
        hostname: "l9yykvm61r.ufs.sh", // Replace this with your actual subdomain if different
        pathname: "/a/l9yykvm61r/**", // Replace this with your actual UploadThing app ID
      },
    ],
  },
  rewrites: () => {
    return [
      {
        source: "/hashtag/:tag",
        destination: "/search?q=%23:tag",
      },
    ];
  },
};

export default nextConfig;
