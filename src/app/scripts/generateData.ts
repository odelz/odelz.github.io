import { generatePinterestData } from '../lib/pinterest/fetcher'
async function generateAllData() {
  console.log('🚀 Starting data generation...')
  try {
    await generatePinterestData()
    console.log('✨ Data generation complete!')
  } catch (error) {
    console.error('❌ Error generating data:', error)
    throw error
  }
}

// Only run if called directly
if (require.main === module) {
  generateAllData()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Error:', error)
      process.exit(1)
    })
}