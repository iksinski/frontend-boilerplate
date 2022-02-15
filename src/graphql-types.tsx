import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type GraphQlAuthPayload = {
  __typename?: 'AuthPayload';
  language: Scalars['String'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  token: Scalars['String'];
  userId: Scalars['ID'];
};

export type GraphQlFile = {
  __typename?: 'File';
  _id: Scalars['ID'];
  created?: Maybe<GraphQlTimestamp>;
  isFilmSet?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  meta?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  project: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  type: GraphQlFileType;
  url?: Maybe<Scalars['String']>;
};

export type GraphQlFileInput = {
  created?: InputMaybe<GraphQlTimestampInput>;
  level?: InputMaybe<Scalars['Int']>;
  meta?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['String']>;
  type: GraphQlFileType;
  url?: InputMaybe<Scalars['String']>;
};

export enum GraphQlFileType {
  File = 'FILE',
  Folder = 'FOLDER'
}

export type GraphQlFilter = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type GraphQlMutation = {
  __typename?: 'Mutation';
  addDownloadUserToProject?: Maybe<GraphQlPermission>;
  addUserToProject?: Maybe<GraphQlPermission>;
  createFiles?: Maybe<Array<Maybe<GraphQlFile>>>;
  createProject?: Maybe<GraphQlProject>;
  createUser?: Maybe<Scalars['Boolean']>;
  processProject?: Maybe<GraphQlStatus>;
  removeDownloadUser?: Maybe<Scalars['Boolean']>;
  removeProjectUser?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Scalars['String']>;
  sendPreviewUrl?: Maybe<Scalars['String']>;
  setPassword?: Maybe<Scalars['Boolean']>;
  setProcessState?: Maybe<GraphQlProject>;
  signIn?: Maybe<GraphQlAuthPayload>;
  signUp?: Maybe<GraphQlAuthPayload>;
  updateProject?: Maybe<GraphQlProject>;
};


export type GraphQlMutationAddDownloadUserToProjectArgs = {
  projectName: Scalars['String'];
  userId: Scalars['String'];
};


export type GraphQlMutationAddUserToProjectArgs = {
  project: Scalars['String'];
  userId: Scalars['String'];
};


export type GraphQlMutationCreateFilesArgs = {
  input?: InputMaybe<Array<InputMaybe<GraphQlFileInput>>>;
};


export type GraphQlMutationCreateProjectArgs = {
  columns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isFilmSet: Scalars['Boolean'];
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type GraphQlMutationCreateUserArgs = {
  email: Scalars['String'];
  language: Scalars['String'];
  name: Scalars['String'];
};


export type GraphQlMutationProcessProjectArgs = {
  day?: InputMaybe<Scalars['String']>;
  projectName: Scalars['String'];
};


export type GraphQlMutationRemoveDownloadUserArgs = {
  projectName: Scalars['String'];
  userId: Scalars['String'];
};


export type GraphQlMutationRemoveProjectUserArgs = {
  projectName: Scalars['String'];
  userId: Scalars['String'];
};


export type GraphQlMutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type GraphQlMutationSendPreviewUrlArgs = {
  email: Scalars['String'];
  previewUrl: Scalars['String'];
  projectName: Scalars['String'];
};


export type GraphQlMutationSetPasswordArgs = {
  password: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type GraphQlMutationSetProcessStateArgs = {
  inProgress: Scalars['Boolean'];
  project: Scalars['String'];
};


export type GraphQlMutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type GraphQlMutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type GraphQlMutationUpdateProjectArgs = {
  columns?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  isFilmSet?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GraphQlNextPrevFile = {
  __typename?: 'NextPrevFile';
  nextFileId?: Maybe<Scalars['String']>;
  prevFileId?: Maybe<Scalars['String']>;
};

export type GraphQlPermission = {
  __typename?: 'Permission';
  downloadUsers?: Maybe<Array<Maybe<Scalars['String']>>>;
  project: Scalars['String'];
  projectId?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GraphQlProject = {
  __typename?: 'Project';
  _id: Scalars['ID'];
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  downloadUsers?: Maybe<Array<Maybe<GraphQlUser>>>;
  files?: Maybe<Array<Maybe<GraphQlFile>>>;
  importInProgress?: Maybe<Scalars['Boolean']>;
  isFilmSet?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updated?: Maybe<GraphQlTimestamp>;
  userObjects?: Maybe<Array<Maybe<GraphQlUser>>>;
  users?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GraphQlProjectFolders = {
  __typename?: 'ProjectFolders';
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  folders?: Maybe<Array<Maybe<GraphQlFile>>>;
};

export type GraphQlProjectTableData = {
  __typename?: 'ProjectTableData';
  columns?: Maybe<Array<Maybe<Scalars['String']>>>;
  data?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  total?: Maybe<Scalars['Int']>;
};

export type GraphQlQuery = {
  __typename?: 'Query';
  fileSearch?: Maybe<GraphQlSearchResult>;
  getAllProjects?: Maybe<Array<Maybe<GraphQlProject>>>;
  getDirectoryFiles?: Maybe<Array<Maybe<GraphQlFile>>>;
  getDirectoryIdByPath?: Maybe<GraphQlFile>;
  getFile?: Maybe<GraphQlFile>;
  getFileByPath?: Maybe<GraphQlFile>;
  getFileDownloadPermission: Scalars['Boolean'];
  getFolderById?: Maybe<GraphQlFile>;
  getFolderFilesByPath?: Maybe<Array<Maybe<GraphQlFile>>>;
  getNextPrevFile?: Maybe<GraphQlNextPrevFile>;
  getProjectById?: Maybe<GraphQlProject>;
  getProjectByName?: Maybe<GraphQlProject>;
  getProjectFiles?: Maybe<Array<Maybe<GraphQlFile>>>;
  getProjectFolders?: Maybe<GraphQlProjectFolders>;
  getTableDataForProject?: Maybe<GraphQlProjectTableData>;
  getUserByToken?: Maybe<GraphQlUser>;
  getUserProjects?: Maybe<Array<Maybe<GraphQlProject>>>;
  getUsers?: Maybe<Array<Maybe<GraphQlUser>>>;
};


export type GraphQlQueryFileSearchArgs = {
  page?: InputMaybe<Scalars['Int']>;
  projectName: Scalars['String'];
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type GraphQlQueryGetDirectoryFilesArgs = {
  directoryId: Scalars['ID'];
  project: Scalars['String'];
};


export type GraphQlQueryGetDirectoryIdByPathArgs = {
  folderName: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  projectName: Scalars['String'];
};


export type GraphQlQueryGetFileArgs = {
  fileId: Scalars['ID'];
};


export type GraphQlQueryGetFileByPathArgs = {
  name: Scalars['String'];
  parent?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  type: GraphQlFileType;
};


export type GraphQlQueryGetFileDownloadPermissionArgs = {
  fileId: Scalars['ID'];
};


export type GraphQlQueryGetFolderByIdArgs = {
  id: Scalars['ID'];
};


export type GraphQlQueryGetFolderFilesByPathArgs = {
  path: Scalars['String'];
  projectName: Scalars['String'];
};


export type GraphQlQueryGetNextPrevFileArgs = {
  fileId?: InputMaybe<Scalars['String']>;
  projectName: Scalars['String'];
};


export type GraphQlQueryGetProjectByIdArgs = {
  projectId: Scalars['String'];
};


export type GraphQlQueryGetProjectByNameArgs = {
  projectName: Scalars['String'];
};


export type GraphQlQueryGetProjectFilesArgs = {
  projectName: Scalars['String'];
};


export type GraphQlQueryGetProjectFoldersArgs = {
  projectName: Scalars['String'];
};


export type GraphQlQueryGetTableDataForProjectArgs = {
  asc?: InputMaybe<Scalars['Boolean']>;
  filters?: InputMaybe<Array<InputMaybe<GraphQlFilter>>>;
  page: Scalars['Int'];
  projectName: Scalars['String'];
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type GraphQlQueryGetUserByTokenArgs = {
  token: Scalars['String'];
};

export enum GraphQlRole {
  Admin = 'admin',
  User = 'user'
}

export type GraphQlSearchResult = {
  __typename?: 'SearchResult';
  files?: Maybe<Array<Maybe<GraphQlFile>>>;
  pagesCount?: Maybe<Scalars['Int']>;
};

export type GraphQlStatus = {
  __typename?: 'Status';
  code: Scalars['Int'];
  message: Scalars['String'];
};

export type GraphQlTimestamp = {
  __typename?: 'Timestamp';
  date: Scalars['String'];
  unix: Scalars['Float'];
};

export type GraphQlTimestampInput = {
  date: Scalars['String'];
  unix: Scalars['Float'];
};

export type GraphQlUser = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<GraphQlRole>>>;
};

export type GraphQlSignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type GraphQlSignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'AuthPayload', userId: string, token: string } | null | undefined };


export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    userId
    token
  }
}
    `;
export type GraphQlSignInMutationFn = Apollo.MutationFunction<GraphQlSignInMutation, GraphQlSignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<GraphQlSignInMutation, GraphQlSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GraphQlSignInMutation, GraphQlSignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<GraphQlSignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<GraphQlSignInMutation, GraphQlSignInMutationVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GraphQlResolversTypes = {
  AuthPayload: ResolverTypeWrapper<GraphQlAuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  File: ResolverTypeWrapper<GraphQlFile>;
  FileInput: GraphQlFileInput;
  FileType: GraphQlFileType;
  Filter: GraphQlFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  NextPrevFile: ResolverTypeWrapper<GraphQlNextPrevFile>;
  Permission: ResolverTypeWrapper<GraphQlPermission>;
  Project: ResolverTypeWrapper<GraphQlProject>;
  ProjectFolders: ResolverTypeWrapper<GraphQlProjectFolders>;
  ProjectTableData: ResolverTypeWrapper<GraphQlProjectTableData>;
  Query: ResolverTypeWrapper<{}>;
  Role: GraphQlRole;
  SearchResult: ResolverTypeWrapper<GraphQlSearchResult>;
  Status: ResolverTypeWrapper<GraphQlStatus>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Timestamp: ResolverTypeWrapper<GraphQlTimestamp>;
  TimestampInput: GraphQlTimestampInput;
  User: ResolverTypeWrapper<GraphQlUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GraphQlResolversParentTypes = {
  AuthPayload: GraphQlAuthPayload;
  Boolean: Scalars['Boolean'];
  File: GraphQlFile;
  FileInput: GraphQlFileInput;
  Filter: GraphQlFilter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Mutation: {};
  NextPrevFile: GraphQlNextPrevFile;
  Permission: GraphQlPermission;
  Project: GraphQlProject;
  ProjectFolders: GraphQlProjectFolders;
  ProjectTableData: GraphQlProjectTableData;
  Query: {};
  SearchResult: GraphQlSearchResult;
  Status: GraphQlStatus;
  String: Scalars['String'];
  Timestamp: GraphQlTimestamp;
  TimestampInput: GraphQlTimestampInput;
  User: GraphQlUser;
};

export type GraphQlAuthPayloadResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['AuthPayload'] = GraphQlResolversParentTypes['AuthPayload']> = {
  language?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  token?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<GraphQlResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlFileResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['File'] = GraphQlResolversParentTypes['File']> = {
  _id?: Resolver<GraphQlResolversTypes['ID'], ParentType, ContextType>;
  created?: Resolver<Maybe<GraphQlResolversTypes['Timestamp']>, ParentType, ContextType>;
  isFilmSet?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType>;
  level?: Resolver<Maybe<GraphQlResolversTypes['Int']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<GraphQlResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<GraphQlResolversTypes['FileType'], ParentType, ContextType>;
  url?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQlJsonScalarConfig extends GraphQLScalarTypeConfig<GraphQlResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type GraphQlMutationResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['Mutation'] = GraphQlResolversParentTypes['Mutation']> = {
  addDownloadUserToProject?: Resolver<Maybe<GraphQlResolversTypes['Permission']>, ParentType, ContextType, RequireFields<GraphQlMutationAddDownloadUserToProjectArgs, 'projectName' | 'userId'>>;
  addUserToProject?: Resolver<Maybe<GraphQlResolversTypes['Permission']>, ParentType, ContextType, RequireFields<GraphQlMutationAddUserToProjectArgs, 'project' | 'userId'>>;
  createFiles?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType, RequireFields<GraphQlMutationCreateFilesArgs, never>>;
  createProject?: Resolver<Maybe<GraphQlResolversTypes['Project']>, ParentType, ContextType, RequireFields<GraphQlMutationCreateProjectArgs, 'isFilmSet' | 'name'>>;
  createUser?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<GraphQlMutationCreateUserArgs, 'email' | 'language' | 'name'>>;
  processProject?: Resolver<Maybe<GraphQlResolversTypes['Status']>, ParentType, ContextType, RequireFields<GraphQlMutationProcessProjectArgs, 'projectName'>>;
  removeDownloadUser?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<GraphQlMutationRemoveDownloadUserArgs, 'projectName' | 'userId'>>;
  removeProjectUser?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<GraphQlMutationRemoveProjectUserArgs, 'projectName' | 'userId'>>;
  resetPassword?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType, RequireFields<GraphQlMutationResetPasswordArgs, 'email'>>;
  sendPreviewUrl?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType, RequireFields<GraphQlMutationSendPreviewUrlArgs, 'email' | 'previewUrl' | 'projectName'>>;
  setPassword?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<GraphQlMutationSetPasswordArgs, 'password'>>;
  setProcessState?: Resolver<Maybe<GraphQlResolversTypes['Project']>, ParentType, ContextType, RequireFields<GraphQlMutationSetProcessStateArgs, 'inProgress' | 'project'>>;
  signIn?: Resolver<Maybe<GraphQlResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<GraphQlMutationSignInArgs, 'email' | 'password'>>;
  signUp?: Resolver<Maybe<GraphQlResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<GraphQlMutationSignUpArgs, 'email' | 'password'>>;
  updateProject?: Resolver<Maybe<GraphQlResolversTypes['Project']>, ParentType, ContextType, RequireFields<GraphQlMutationUpdateProjectArgs, 'id'>>;
};

export type GraphQlNextPrevFileResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['NextPrevFile'] = GraphQlResolversParentTypes['NextPrevFile']> = {
  nextFileId?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  prevFileId?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlPermissionResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['Permission'] = GraphQlResolversParentTypes['Permission']> = {
  downloadUsers?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  project?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  projectId?: Resolver<Maybe<GraphQlResolversTypes['ID']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlProjectResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['Project'] = GraphQlResolversParentTypes['Project']> = {
  _id?: Resolver<GraphQlResolversTypes['ID'], ParentType, ContextType>;
  columns?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  downloadUsers?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['User']>>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType>;
  importInProgress?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType>;
  isFilmSet?: Resolver<Maybe<GraphQlResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<Maybe<GraphQlResolversTypes['Timestamp']>, ParentType, ContextType>;
  userObjects?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['User']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlProjectFoldersResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['ProjectFolders'] = GraphQlResolversParentTypes['ProjectFolders']> = {
  columns?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  folders?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlProjectTableDataResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['ProjectTableData'] = GraphQlResolversParentTypes['ProjectTableData']> = {
  columns?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<Array<Maybe<GraphQlResolversTypes['String']>>>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<GraphQlResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlQueryResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['Query'] = GraphQlResolversParentTypes['Query']> = {
  fileSearch?: Resolver<Maybe<GraphQlResolversTypes['SearchResult']>, ParentType, ContextType, RequireFields<GraphQlQueryFileSearchArgs, 'projectName'>>;
  getAllProjects?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['Project']>>>, ParentType, ContextType>;
  getDirectoryFiles?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType, RequireFields<GraphQlQueryGetDirectoryFilesArgs, 'directoryId' | 'project'>>;
  getDirectoryIdByPath?: Resolver<Maybe<GraphQlResolversTypes['File']>, ParentType, ContextType, RequireFields<GraphQlQueryGetDirectoryIdByPathArgs, 'folderName' | 'projectName'>>;
  getFile?: Resolver<Maybe<GraphQlResolversTypes['File']>, ParentType, ContextType, RequireFields<GraphQlQueryGetFileArgs, 'fileId'>>;
  getFileByPath?: Resolver<Maybe<GraphQlResolversTypes['File']>, ParentType, ContextType, RequireFields<GraphQlQueryGetFileByPathArgs, 'name' | 'project' | 'type'>>;
  getFileDownloadPermission?: Resolver<GraphQlResolversTypes['Boolean'], ParentType, ContextType, RequireFields<GraphQlQueryGetFileDownloadPermissionArgs, 'fileId'>>;
  getFolderById?: Resolver<Maybe<GraphQlResolversTypes['File']>, ParentType, ContextType, RequireFields<GraphQlQueryGetFolderByIdArgs, 'id'>>;
  getFolderFilesByPath?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType, RequireFields<GraphQlQueryGetFolderFilesByPathArgs, 'path' | 'projectName'>>;
  getNextPrevFile?: Resolver<Maybe<GraphQlResolversTypes['NextPrevFile']>, ParentType, ContextType, RequireFields<GraphQlQueryGetNextPrevFileArgs, 'projectName'>>;
  getProjectById?: Resolver<Maybe<GraphQlResolversTypes['Project']>, ParentType, ContextType, RequireFields<GraphQlQueryGetProjectByIdArgs, 'projectId'>>;
  getProjectByName?: Resolver<Maybe<GraphQlResolversTypes['Project']>, ParentType, ContextType, RequireFields<GraphQlQueryGetProjectByNameArgs, 'projectName'>>;
  getProjectFiles?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType, RequireFields<GraphQlQueryGetProjectFilesArgs, 'projectName'>>;
  getProjectFolders?: Resolver<Maybe<GraphQlResolversTypes['ProjectFolders']>, ParentType, ContextType, RequireFields<GraphQlQueryGetProjectFoldersArgs, 'projectName'>>;
  getTableDataForProject?: Resolver<Maybe<GraphQlResolversTypes['ProjectTableData']>, ParentType, ContextType, RequireFields<GraphQlQueryGetTableDataForProjectArgs, 'page' | 'projectName'>>;
  getUserByToken?: Resolver<Maybe<GraphQlResolversTypes['User']>, ParentType, ContextType, RequireFields<GraphQlQueryGetUserByTokenArgs, 'token'>>;
  getUserProjects?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['Project']>>>, ParentType, ContextType>;
  getUsers?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['User']>>>, ParentType, ContextType>;
};

export type GraphQlSearchResultResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['SearchResult'] = GraphQlResolversParentTypes['SearchResult']> = {
  files?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['File']>>>, ParentType, ContextType>;
  pagesCount?: Resolver<Maybe<GraphQlResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlStatusResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['Status'] = GraphQlResolversParentTypes['Status']> = {
  code?: Resolver<GraphQlResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlTimestampResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['Timestamp'] = GraphQlResolversParentTypes['Timestamp']> = {
  date?: Resolver<GraphQlResolversTypes['String'], ParentType, ContextType>;
  unix?: Resolver<GraphQlResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlUserResolvers<ContextType = any, ParentType extends GraphQlResolversParentTypes['User'] = GraphQlResolversParentTypes['User']> = {
  _id?: Resolver<GraphQlResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<GraphQlResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<GraphQlResolversTypes['Role']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQlResolvers<ContextType = any> = {
  AuthPayload?: GraphQlAuthPayloadResolvers<ContextType>;
  File?: GraphQlFileResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: GraphQlMutationResolvers<ContextType>;
  NextPrevFile?: GraphQlNextPrevFileResolvers<ContextType>;
  Permission?: GraphQlPermissionResolvers<ContextType>;
  Project?: GraphQlProjectResolvers<ContextType>;
  ProjectFolders?: GraphQlProjectFoldersResolvers<ContextType>;
  ProjectTableData?: GraphQlProjectTableDataResolvers<ContextType>;
  Query?: GraphQlQueryResolvers<ContextType>;
  SearchResult?: GraphQlSearchResultResolvers<ContextType>;
  Status?: GraphQlStatusResolvers<ContextType>;
  Timestamp?: GraphQlTimestampResolvers<ContextType>;
  User?: GraphQlUserResolvers<ContextType>;
};

