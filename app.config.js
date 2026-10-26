// app.config.js
module.exports = ({ config }) => {
  const fbAppId = process.env.EXPO_PUBLIC_FACEBOOK_APP_ID || "YOUR_FACEBOOK_APP_ID";
  const fbClientToken = process.env.EXPO_PUBLIC_FACEBOOK_CLIENT_TOKEN || "YOUR_FACEBOOK_CLIENT_TOKEN";

  return {
    ...config,
    plugins: (config.plugins || []).map((plugin) => {
      if (Array.isArray(plugin) && plugin[0] === "react-native-fbsdk-next") {
        return [
          "react-native-fbsdk-next",
          {
            ...plugin[1],
            appID: fbAppId,
            clientToken: fbClientToken,
            scheme: `fb${fbAppId}`,
          },
        ];
      }
      return plugin;
    }),
  };
};
