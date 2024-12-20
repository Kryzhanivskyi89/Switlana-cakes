// import axios from "axios";

// async function fetchCloudinaryImages(folderName) {
//     const CLOUD_NAME = "dptuphme5";
//     const API_KEY = "161445657564944";
//     const API_SECRET = "ooonDrlALAWyb0uwhms6ZX7HhOs";

//     const response = await axios.get(
//         `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`,
//         {
//             params: { prefix: folderName, type: "upload", max_results: 100 },
//             auth: {
//                 username: API_KEY,
//                 password: API_SECRET,
//             },
//         }
//     );
//     console.log("Отримані дані з Cloudinary:", response.data.resources);

//     return response.data.resources.map((image) => ({
//         url: image.secure_url,
//         public_id: image.public_id,
//         format: image.format,
//     }));
// }

// // Приклад виклику
// fetchCloudinaryImages("капкейки").then(console.log).catch(console.error);