import { User } from '../user/User';

/**
 * Default serialize user function to be used by Passport. Stores the user to the session
 *
 * @param user - A user data be stored in the session
 * @param done - callback
 */
export const defaultSerializeUser = (user: User, done: (error: Error | null, user: any) => any) => {
  return done(null, user);
};

/**
 * Default deserialize user function to be used by Passport. Attaches the user to
 * req.user
 *
 * @param user - A user data retrieved from the session
 * @param done - callback
 */
export const defaultDeserializeUser = (user: any, done: (error: Error | null, user: any) => any) => {
  return done(null, user);
};
