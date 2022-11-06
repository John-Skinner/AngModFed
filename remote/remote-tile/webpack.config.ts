import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
import { Configuration, container } from 'webpack';
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
 sharedMappings.register(path.join(__dirname, './tsconfig.base.json'), [
  /* mapped paths to share */
 ]);
export default (config: Configuration, options: CustomWebpackBrowserSchema, targetOptions: TargetOptions) => {

  config!.output!.uniqueName = 'testShell';
  config!.output!.publicPath = 'auto';
  config!.output!.scriptType = 'text/javascript';


  config!.optimization!.runtimeChunk = false;
  config!.resolve!.alias! = {...sharedMappings.getAliases()}
  config!.plugins!.push(
    new ModuleFederationPlugin({
      filename:"remoteEntry.js",
      name:"test_tile",
      exposes: {
        './Tile':
          './src/app/tiles/tiles.component.ts'
      },
      shared: share({
        '@angular/core': {
          singleton:true,
          strictVersion:true,
          requiredVersion: 'auto'
        },
        '@angular/common': {
            singleton:true,
            strictVersion:true,
            requiredVersion:'auto'
          },
          '@angular/common/http': {
            singleton:true,
            strictVersion:true,
            requiredVersion:'auto'
          },
          '@angular/router' : {
            singleton:true,
            strictVersion:true,
            requiredVersion:'auto'
          },
        ...sharedMappings.getDescriptors()
      })


      /* "Shared" modules will not be included in remote module bundles. */

    }),
    sharedMappings.getPlugin()
  );
  return config;
};
