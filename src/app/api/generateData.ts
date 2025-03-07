import { generatePinterestData } from './fetchData'

async function generateAllData() {
  console.log('🚀 Starting data generation...')
  await generatePinterestData()
  console.log('✨ Data generation complete!')
}

generateAllData()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error generating data:', error)
    process.exit(1)
  })