export interface IUser {
  name: string;
  email: string;
}
export interface ILoginProps {
  email: string;
  password: string;
}
export interface ILogin {
  name: string;
  email: string;
  authGuidToken: { token: string; createdAt: Date };
}
