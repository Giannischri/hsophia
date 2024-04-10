export interface User {
  id?: string;
  username: string;
  email: string;
  password:string;
  role: UserRole;
  // Add more properties as needed
}
export enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest'
}
