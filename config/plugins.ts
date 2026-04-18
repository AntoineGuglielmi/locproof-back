import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'gen-types': {
    enabled: true,
    config: {
      outputLocation: 'types/strapi-types.ts',
      singleFile: true,
    },
  },
});

export default config;
