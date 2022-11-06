import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import { Configuration, container } from 'webpack';

const mf = require('@angular-architects/module-federation/webpack')
const share = mf.share;
const sharedMappings = new mf.SharedMappings();
export default (config: Configuration, options: CustomWebpackBrowserSchema, targetOptions: TargetOptions) => {
  if (config) {
    config.output!.uniqueName = 'test-shell';
    config.optimization!.runtimeChunk = false;
    config.plugins!.push(
      new container.ModuleFederationPlugin({
        remotes: {
          tile: 'test_tile@http://localhost:4201/remoteEntry'
        },


        /* "Shared" modules will not be included in remote module bundles. */
        shared: share( {
          '@angular/core': {
            singleton:true,
            strictVersion:true,
            requiredVersion:'auto'
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



      })
    );
  }
  return config;
};
