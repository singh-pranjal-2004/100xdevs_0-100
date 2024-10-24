const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../../03-mongo/db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic

    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.find({
        username, 
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({token})
    }else{
        res.status(411).json({
            message: "Incorrect email or pass"
        })
    }
    
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        response: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    },{
        "$push": {
            purchasedCourses : courseId
        }
    })

    res.json({
        message: "Purchase Complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username: req.headers.username
    })

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router