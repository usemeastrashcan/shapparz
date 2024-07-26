import bcrypt from 'bcrypt'

const hashPassword = async(password)=>
{
    if (!password || typeof password !== 'string' || password.trim() === '') {
        throw new Error('Password is required and must be a non-empty string');
    }
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword

    } catch (error) {
        console.log(`Error in Hashing The Password. ${error}`)
    }
}

const comparePassword = async(password, hashedPassword)=>
{
    try {
        return await bcrypt.compare(password, hashPassword)
    } catch (error) {
        console.log(`Error in Comparing Password. ${error}`)
    }
}

export{
    hashPassword,
    comparePassword
}
