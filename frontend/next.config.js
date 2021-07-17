// module.exports = {
//   env: {
//     BACKEND_URI: 'http://backend:8000',
//   },
//   webpack: (config) => {
//     config.resolve.fallback = { 
//       fs: false, 
//       path: false,
//       child_process: false,
//       crypto: false,
//       os: false,
//       tty: false,
//       workd_threads: true,
//     },
//   },
//   return config,
// };

module.exports = {
  env: {
    BACKEND_URI: 'http://localhost:8000',
  },
  // future: {
  //   webpack5: true,
  // },
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      path: false,
    };

    return config;
  },
};