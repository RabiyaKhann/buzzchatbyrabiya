const nextConfig = {
	webpack: (config, { isServer }) => {
	  config.module.rules.push({
		test: /\.js$/,
		include: /convex\/_generated/,
		type: 'javascript/esm',
	  });
  
	  return config;
	},
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'limitless-porpoise-331.convex.cloud',
			pathname: '/api/storage/**',  // Match the path structure
		  },
		],
	  },
  };
  
  module.exports = nextConfig;
  
