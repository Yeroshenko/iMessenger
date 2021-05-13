import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { ILoginData, IRegisterData, IUser } from '../@interfaces'

const Auth = auth()

export class AuthApi {
  static loginErrorCodes = ['auth/user-not-found', 'auth/wrong-password']
  static registerErrorCodes = ['auth/email-already-in-use']

  static userTransformInfo(user: FirebaseAuthTypes.User) {
    return {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL
    } as IUser
  }

  static async register({ username, email, password }: IRegisterData) {
    await Auth.createUserWithEmailAndPassword(email, password)
    await Auth.currentUser?.updateProfile({ displayName: username })
    const user = await auth().currentUser as FirebaseAuthTypes.User
    return this.userTransformInfo(user)
  }

  static async login({ email, password }: ILoginData) {
    const { user } = await Auth.signInWithEmailAndPassword(email, password)
    return this.userTransformInfo(user)
  }

  static checkAuth(listener: (user: FirebaseAuthTypes.User | null) => void) {
    return Auth.onAuthStateChanged(listener)
  }
}

