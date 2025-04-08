import passport from 'passport'
import { Strategy } from 'passport-local'
import { UserModel } from '../models/User.js'

export function initializePassportMiddleware() {
    passport.use(new Strategy(
        // LOGIN
        function(username, password, done) {
            UserModel.findOne({ username: username})
            .then((user: any) => {
                // Check if there is an error
                // if (err) return done(err)
                // Check if we were not able to find the user requested
                // if (!user) return done(null, false);
                // Check to see if the password typed matches the password from database
                // if (!user.verifyPassword(password)) return done(null, false)
                // If all pass, then return authenticated user
                return done(null, user)
            })
            .catch((err: any) => {
                return done(err)
            })
        }
    ))
}

