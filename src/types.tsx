import { GraphQlUserAuth } from './graphql-types';

export interface User {
  username: GraphQlUserAuth['username'];
  token: GraphQlUserAuth['token'];
}
