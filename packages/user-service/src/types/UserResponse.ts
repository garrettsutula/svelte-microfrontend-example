import { User } from "./User";
import { Support } from "./common";

export interface UserResponse {
  data: User;
  support: Support;
}