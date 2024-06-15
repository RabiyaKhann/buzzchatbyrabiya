const nextConfig = {
	webpack: (config, { isServer }) => {
	  config.module.rules.push({
		test: js$,
		include: /convex/_generated,
		type: 'javascript/esm',
	  });
  
	  return config;
	},
	images: {
	  remotePatterns: [
		{ hostname: "limitless-porpoise-331.convex.cloud" },
		{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
	  ],
	},
  };
  
  module.exports = nextConfig;
  