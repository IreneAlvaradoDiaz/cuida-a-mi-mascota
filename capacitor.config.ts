import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cuidaamimascota.app',
  appName: 'cuida-a-mi-mascota',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
      SplashScreen: {
      launchShowDuration: 0
    }
  },
  cordova: {},
};

export default config;
