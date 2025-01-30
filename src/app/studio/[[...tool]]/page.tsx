import { NextStudio } from 'next-sanity/studio';
import { config } from '../../../../sanity.config'; // Ensure you're importing config from the correct path

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
