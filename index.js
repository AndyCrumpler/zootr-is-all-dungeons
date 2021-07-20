const args = process.argv.slice(2)
const [spoilerFile] = args
if (!spoilerFile) {
  console.log(`Error: IsItAllDungeons Requires Exactly one Argument`)
  console.log('Error: You must provide the path to the spoiler log file')
  process.exit(1)
}

let spoilerLog
try {
  spoilerLog = require(spoilerFile)
} catch (error) {
  console.log('Error: Failed to load the spoiler log, please ensure that the correct path is provided')
  process.exit(1)
}

const playthrough = spoilerLog[':playthrough']

console.log('Found Spoiler Log')
console.log('Checking logical playthrough for "Song from Ocarina of Time"...')
for (const key in playthrough) {
  if (Object.hasOwnProperty.call(playthrough, key)) {
    const element = playthrough[key];
    if (element['Song from Ocarina of Time']) {
      console.log('Found "Song From Ocarina of Time" within the logical playthrough')
      console.log('This is an All Dungeons Seed!')
      process.exit(0)
    }
  }
}

console.log('This is not an All Dungeons Seed!')
