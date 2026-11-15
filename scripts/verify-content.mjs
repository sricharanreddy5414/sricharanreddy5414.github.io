import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walk(path, acc)
    else acc.push(path)
  }
  return acc
}

const files = ['index.html', 'README.md', ...walk('src'), ...walk('public')]
const corpus = files.map((file) => readFileSync(file, 'utf8')).join('\n')

const required = [
  'Sirivella Sri Charan Reddy',
  'Bengaluru, Karnataka, India',
  'Explore My Work',
  'View GitHub',
  'Cloud Computing Enthusiast',
  'Aspiring Cloud Architect',
  'AWS & Serverless Developer',
  'I am a Computer Science and Engineering student specialising in Cloud Computing, passionate about AWS, cloud architecture, serverless systems, infrastructure and building practical cloud-based solutions.',
  'Dashboard currently unavailable',
  'Building Reliable Cloud Solutions.',
  'AWS Certified Solutions Architect – Associate | Aspiring Cloud Engineer',
  'Exploring cloud architecture, serverless technologies and scalable infrastructure through practical AWS and Azure projects.',
  'sricharanreddy9105@gmail.com',
  'mailto:sricharanreddy9105@gmail.com',
  '+91 88854 79552',
  'tel:+918885479552',
  'https://github.com/sricharanreddy5414',
  'https://www.linkedin.com/in/sri-charan-reddy-5490ba324',
  'https://github.com/sricharanreddy5414.png?size=480',
  'https://www.credly.com/badges/2f298ff2-ff8e-4640-9e42-8a3874280cd7/public_url',
  'Verify credential',
  '872/1000',
  '13 November 2026',
  '13 November 2029',
  'SAA-C03',
  'Alliance University',
  '8.8/10 through Semester 5',
  'August 2024 – December 2028',
  'Narayan Junior College',
  '91.4%',
  'Narayana School',
  '88%',
  'https://github.com/sricharanreddy5414/emergency-resource-allocation',
  'https://main.d3enpe7opotop5.amplifyapp.com',
  'lambda:CreateAlias',
  'fictional test data',
  'not a live emergency dispatch service',
  'Independent project troubleshooting',
  'https://github.com/sricharanreddy5414/smart-traffic-monitoring-analytics-dashboard',
  'https://stsmarttrafficweb5414.z29.web.core.windows.net/',
  'The traffic readings are simulated',
  'https://github.com/varunteja3107/campusRadar',
  'Cyber Kushti',
  '95.5%',
  'did not qualify for Round 2',
  'Amazon EC2',
  'Azure Functions',
  'Docker Compose',
]

const requiredFiles = [
  'public/favicon.svg',
  'public/404.html',
  'public/og.png',
  'public/robots.txt',
  'public/sitemap.xml',
  '.github/workflows/deploy.yml',
  'package.json',
]

const missing = required.filter((item) => !corpus.includes(item))
const missingFiles = requiredFiles.filter((file) => !existsSync(file))

const forbidden = [
  /lorem ipsum/i,
  /your name here/i,
  /\bTODO\b/,
  /\bFIXME\b/,
  /\d{2,3}%\s*(AWS|Python|Java|Azure)/,
  /years of professional experience/i,
  /currently employed/i,
]

const flagged = forbidden.filter((pattern) => pattern.test(corpus)).map((pattern) => pattern.toString())

if (missing.length || missingFiles.length || flagged.length) {
  if (missing.length) {
    console.error('Missing required content:')
    for (const item of missing) console.error(` - ${item}`)
  }
  if (missingFiles.length) {
    console.error('Missing required files:')
    for (const file of missingFiles) console.error(` - ${file}`)
  }
  if (flagged.length) {
    console.error('Forbidden content matched:')
    for (const item of flagged) console.error(` - ${item}`)
  }
  process.exit(1)
}

console.log(`Content check passed across ${files.length} files.`)
