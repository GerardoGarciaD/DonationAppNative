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

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Wrong credentials.'};
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error: 'The email you entered does not exists. Please crate an account',
      };
    }
    return {status: false, error: 'Something went wrong with your request!'};
  }
};
