import { buildConfig } from 'payload/config';
import path from 'path';
import Artists from './collections/Artists';
import PortfolioImages from './collections/PortfolioImages';
import ProfileImages from './collections/ProfileImages';
import Media from './collections/Media';
import Admin from './collections/Admin';

export default buildConfig({
  serverURL: 'http://localhost:7860',
  admin: {
    user: Admin.slug,
  },
  collections: [
    Admin,
    Artists,
    PortfolioImages,
    ProfileImages,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  cors: '*', // Allow all origins
  // csrf: [ // whitelist of domains to allow cookie auth from
  // 'localhost:5173',
  // ],
  graphQL: {
    disable: true,
    // schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
