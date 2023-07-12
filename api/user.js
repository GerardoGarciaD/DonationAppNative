import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use!'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'That email address is invalid!'};
    }
    return {error: 'Something went wrong with your request!'};
  }
};
