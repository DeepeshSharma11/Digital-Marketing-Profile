import { INITIAL_SITE_DATA } from '../src/lib/mockData.js';

console.log('--- Verifying Data Integrity for Layout.jpeg ---');
console.log('✓ Hero title:', INITIAL_SITE_DATA.hero.title);
console.log('✓ Services count:', INITIAL_SITE_DATA.services.length);
if (INITIAL_SITE_DATA.services.length !== 5) {
  throw new Error('Expected 5 services as shown in Layout.jpeg');
}
console.log('✓ Stats count:', INITIAL_SITE_DATA.stats.length);
if (INITIAL_SITE_DATA.stats.length !== 4) {
  throw new Error('Expected 4 stats as shown in Layout.jpeg');
}
console.log('✓ Process steps:', INITIAL_SITE_DATA.process.length);
if (INITIAL_SITE_DATA.process.length !== 4) {
  throw new Error('Expected 4 process steps as shown in Layout.jpeg');
}
console.log('✓ Contact phone:', INITIAL_SITE_DATA.about.phone);
console.log('✓ Contact email:', INITIAL_SITE_DATA.about.email);
console.log('--- All layout data validation passed! ---');
