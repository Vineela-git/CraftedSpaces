require("dotenv").config();
const professionalModel = require("../models/professionalDetails");
const Cookies = require("cookies");
const jwt = require("jsonwebtoken");
const userdetailsModel = require("../models/userdetails");
const multer = require("multer");
const path = require("path");

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
});

module.exports.showDetails = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Check the user type
    if (decoded.professionalId) {
      // Retrieve professional details
      const professional = await professionalModel.findById(
        decoded.professionalId
      );
      console.log(professional);
      res.json(professional);
    } else {
      // Retrieve regular user details
      const user = await userdetailsModel.findById(decoded.userId);
      res.json(user);
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
const upload = multer({ storage });
module.exports.updateDetails = [
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "additionalPictures", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.professionalId) {
        const professional = await professionalModel.findById(
          decoded.professionalId
        );

        // Update the professional object with the new data from the request body
        Object.assign(professional, req.body);
        if (req.files?.profilePicture) {
          professional.profilePicture = path.join(
            "uploads",
            req.files.profilePicture[0].filename
          );
        }
        else if (professional.profilePicture && typeof professional.profilePicture === "object") {
            professional.profilePicture = "";
          }

        if (req.files?.additionalPictures) {
          professional.additionalPictures = req.files.additionalPictures.map(
            (file) => path.join("uploads", file.filename)
          );
        }else if (professional.additionalPictures && typeof professional.additionalPictures === "string") {
            professional.additionalPictures = [professional.additionalPictures];
          }

        // Save the updated professional
        const updatedProfessional = await professional.save();
        res.json(updatedProfessional);
      } else {
        const user = await userdetailsModel.findById(decoded.userId);
        // Update the user object with the new data from the request body
        Object.assign(user, req.body);
        if (req.files.profilePicture) {
          user.profilePicture = path.join(
            "uploads",
            req.files.profilePicture[0].filename
          );
        }
        else if (user.profilePicture && typeof user.profilePicture === "object") {
            user.profilePicture = "";
          }

        if (req.files.additionalPictures) {
          user.additionalPictures = req.files.additionalPictures.map((file) =>
            path.join("uploads", file.filename)
          );
        }
        else if (user.additionalPictures && typeof user.additionalPictures === "string") {
            user.additionalPictures = [user.additionalPictures];
          }
        // Save the updated user
        const updatedUser = await user.save();
        res.json(updatedUser);
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
];

module.exports.chatCompononent = async(req,res) => {

  const app = express();
  app.use(express.json());
  app.use(cors({ origin: true }));
  
  const CHAT_ENGINE_PROJECT_ID = "c1c80743-731c-4fbb-a52f-5c12dd5d75d6";
  const CHAT_ENGINE_PRIVATE_KEY = "56adf351-0515-4451-9745-e55b862b526f";
  
  app.post("/signup", async (req, res) => {
    const { username, secret, email, first_name, last_name } = req.body;
  
    // Store a user-copy on Chat Engine!
    // Docs at rest.chatengine.io
    try {
      const r = await axios.post(
        "https://api.chatengine.io/users/",
        { username, secret, email, first_name, last_name },
        { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });
  
  app.post("/login", async (req, res) => {
    const { username, secret } = req.body;
  
    // Fetch this user from Chat Engine in this project!
    // Docs at rest.chatengine.io
    try {
      const r = await axios.get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": CHAT_ENGINE_PROJECT_ID,
          "User-Name": username,
          "User-Secret": secret,
        },
      });
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });




}
