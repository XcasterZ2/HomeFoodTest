import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// ตั้งค่าเส้นทางที่แน่ชัดสำหรับอัปโหลดไฟล์
const uploadDir = path.join(process.cwd(), "uploads");

// สร้างไดเรกทอรีถ้ายังไม่มี
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: "https://s3.us-east-005.backblazeb2.com",
  credentials: {
    accessKeyId: process.env.B2_ACCOUNT_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
});

export default defineEventHandler(async (event) => {
    const form = formidable({
      multiples: false, // ทำให้แน่ใจว่าจะรับไฟล์เพียงไฟล์เดียว
      uploadDir: path.join(process.cwd(), 'uploads'),
      keepExtensions: true,
    });
  
    return new Promise((resolve, reject) => {
      form.parse(event.req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form data:', err);
          return reject(new Error('Failed to parse form data'));
        }
  
        console.log('Parsed fields:', fields);
        console.log('Parsed files:', files);
  
        const file = files.file ? files.file[0] : null;  // ตรวจสอบว่า file อยู่ใน array หรือไม่
        if (!file) {
          console.error('No file uploaded');
          return reject(new Error('No file uploaded'));
        }
  
        console.log('File path:', file.filepath);
        if (!file.filepath) {
          console.error('File path is not available');
          return reject(new Error('File path is not available'));
        }
  
        const fileStream = fs.createReadStream(file.filepath);
  
        try {
          const uploadParams = {
            Bucket: process.env.B2_BUCKET_NAME,
            Key: file.originalFilename,
            Body: fileStream,
            ACL: "private",
          };
  
          const upload = new Upload({
            client: s3Client,
            params: uploadParams,
          });
  
          upload.on("httpUploadProgress", (progress) => {
            console.log(`Progress: ${progress.loaded}/${progress.total}`);
          });
  
          const uploadResponse = await upload.done();
          console.log("File uploaded successfully:", uploadResponse);
          resolve(uploadResponse);
        } catch (uploadError) {
          console.error("Error during file upload:", uploadError);
          reject(new Error("Failed to upload file"));
        }
      });
    });
  });
  
