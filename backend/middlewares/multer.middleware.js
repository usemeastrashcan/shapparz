// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/temp') 
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
//   })
  
//   export const upload = multer({ storage: storage })


import multer from "multer";

const storage = multer.memoryStorage(); // Store file in memory instead of disk

export const upload = multer({ storage });