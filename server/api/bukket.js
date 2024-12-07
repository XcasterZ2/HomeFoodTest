// server/api/buckets.js
import axios from 'axios'

// ฟังก์ชันเพื่อเชื่อมต่อ Backblaze B2 API
const getAuthToken = async () => {
    try {
        const accountId = useRuntimeConfig().public.b2AccountId
        const applicationKey = useRuntimeConfig().public.b2ApplicationKey

        console.log('Authenticating with Backblaze...')
        const authResponse = await axios.post('https://api.backblaze.com/b2api/v2/b2_authorize_account', null, {
            auth: {
                username: accountId,
                password: applicationKey
            }
        })

        console.log('Authentication successful:', authResponse.data)
        return authResponse.data
    } catch (authError) {
        console.error('Backblaze authentication failed:', authError)
        throw new Error('Failed to authenticate with Backblaze')
    }
}


// ฟังก์ชันเพื่อดึงข้อมูล Bucket
export default defineEventHandler(async (event) => {
    console.log('API /api/upload was called');
    try {
      console.log('Parsing form data...')
      const form = formidable({ multiples: false })
  
      return new Promise((resolve, reject) => {
        form.parse(event.req, async (err, fields, files) => {
          if (err) {
            console.error('Error parsing form data:', err)
            return reject(err) // Log การ parse form ที่ล้มเหลว
          }
  
          console.log('Parsed fields:', fields)
          console.log('Parsed files:', files)
  
          if (!files.file) {
            console.error('No file uploaded')
            return reject(new Error('No file uploaded')) // ตรวจสอบว่าไฟล์ถูกส่งมาหรือไม่
          }
  
          try {
            console.log('Fetching Backblaze auth token...')
            const { apiUrl, authorizationToken } = await getAuthToken()
            console.log('Auth token fetched:', { apiUrl, authorizationToken })
  
            console.log('Getting upload URL...')
            const uploadUrlResponse = await axios.post(`${apiUrl}/b2api/v2/b2_get_upload_url`, {
              bucketId: useRuntimeConfig().public.b2BucketId
            }, {
              headers: { Authorization: authorizationToken }
            })
  
            console.log('Upload URL response:', uploadUrlResponse.data)
  
            const uploadUrl = uploadUrlResponse.data.uploadUrl
            const uploadAuthToken = uploadUrlResponse.data.authorizationToken
  
            const file = files.file
            const formData = new FormData()
            formData.append('file', file.filepath, file.originalFilename)
  
            console.log('Uploading file...')
            const uploadResponse = await axios.post(uploadUrl, formData, {
              headers: {
                Authorization: uploadAuthToken,
                ...formData.getHeaders()
              }
            })
  
            console.log('Upload response:', uploadResponse.data)
            resolve(uploadResponse.data)
          } catch (uploadError) {
            console.error('Error during upload process:', uploadError)
            reject(new Error('Failed to upload file'))
          }
        })
      })
    } catch (globalError) {
      console.error('Unhandled server error:', globalError)
      throw new Error('Internal Server Error')
    }
  })
  