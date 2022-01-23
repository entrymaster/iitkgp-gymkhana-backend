const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../model/user");

router.post("/upload", upload.single("image"), async (req, res) => {
    try {

        const result = await cloudinary.uploader.upload(req.file.path);

        let user = new User({
            type: req.body.type,
            image: result.secure_url,
            cloudinary_id: result.public_id,
        });

        await user.save();
        res.json(user);
    } catch (err) {
        console.log(err);
    }
});

router.get("/getAll", async (req, res) => {
    try {
        let user = await User.find();
        res.json(user)

    } catch (error) {
        console.log(err);
    }
})
router.post("/delete/:id", async (req, res) => {
    try {

        let user = await User.findById(req.params.id);

        await cloudinary.uploader.destroy(user.cloudinary_id);

        await user.remove();
        res.json(user);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;