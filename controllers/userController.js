const cookieToken = require("../utils/cookieToken");
const prisma = require("../prisma/index");

// USER SIGN-UP

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error('Please provide all fields');
        }

        const user = await prisma.user.create({
            data : {
                name, email, password
            }
        })
        // SEND USER A TOKEN
        cookieToken(user, res)

    } catch (error) {
        
        console.log("Error -" + error);
    }
}