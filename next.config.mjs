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
        pathname: "/a/**", // If you keep this for utfs.io /a/... support
      },
      {
        protocol: "https",
        hostname: "**.ufs.sh", // Wildcard to match your app CDN
        pathname: "/f/**", // For content served via UploadThing CDN
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
