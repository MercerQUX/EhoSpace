import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { remakeEmailInLogin } from "../../helpers/DB-helpers/remakeEmailInLogin";
import { ISignIn } from "../../models/ISigns";

export const handleLoginDB = async ({ email_login, password }: ISignIn) => {
  const pureEmail = await remakeEmailInLogin(email_login);
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, pureEmail, password);
};
