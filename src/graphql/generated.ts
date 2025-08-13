import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `File` scalar type represents a file upload. */
  File: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
};

export type ApiResponse = {
  __typename?: 'ApiResponse';
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Category_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export enum HttpMethod {
  Connect = 'CONNECT',
  Delete = 'DELETE',
  Get = 'GET',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
  Trace = 'TRACE'
}

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a new pet to the store. */
  addPet?: Maybe<Pet>;
  /** This can only be done by the logged in user. */
  createUser?: Maybe<User>;
  /** Creates list of users with given input array. */
  createUsersWithListInput?: Maybe<User>;
  /** For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors. */
  deleteOrder?: Maybe<Scalars['JSON']['output']>;
  /** Delete a pet. */
  deletePet?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  deleteUser?: Maybe<Scalars['JSON']['output']>;
  /** Place a new order in the store. */
  placeOrder?: Maybe<Order>;
  /** Update an existing pet by Id. */
  updatePet?: Maybe<Pet>;
  /** Updates a pet resource based on the form data. */
  updatePetWithForm?: Maybe<Pet>;
  /** This can only be done by the logged in user. */
  updateUser?: Maybe<Scalars['JSON']['output']>;
  /** Upload image of the pet. */
  uploadFile?: Maybe<ApiResponse>;
};


export type MutationAddPetArgs = {
  input?: InputMaybe<Pet_Input>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<User_Input>;
};


export type MutationCreateUsersWithListInputArgs = {
  input?: InputMaybe<Array<InputMaybe<User_Input>>>;
};


export type MutationDeleteOrderArgs = {
  orderId: Scalars['BigInt']['input'];
};


export type MutationDeletePetArgs = {
  api_key?: InputMaybe<Scalars['String']['input']>;
  petId: Scalars['BigInt']['input'];
};


export type MutationDeleteUserArgs = {
  username: Scalars['String']['input'];
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<Order_Input>;
};


export type MutationUpdatePetArgs = {
  input?: InputMaybe<Pet_Input>;
};


export type MutationUpdatePetWithFormArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  petId: Scalars['BigInt']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<User_Input>;
  username: Scalars['String']['input'];
};


export type MutationUploadFileArgs = {
  additionalMetadata?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<Scalars['File']['input']>;
  petId: Scalars['BigInt']['input'];
};

export type Order = {
  __typename?: 'Order';
  complete?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  petId?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shipDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Mutation_PlaceOrder_Status>;
};

export type Order_Input = {
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  petId?: InputMaybe<Scalars['BigInt']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shipDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Mutation_PlaceOrder_Status>;
};

/** Pet object that needs to be added to the store */
export type Pet = {
  __typename?: 'Pet';
  category?: Maybe<Category>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
  photoUrls: Array<Maybe<Scalars['String']['output']>>;
  status?: Maybe<Mutation_UpdatePet_Status>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

/** Pet object that needs to be added to the store */
export type Pet_Input = {
  category?: InputMaybe<Category_Input>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  photoUrls: Array<InputMaybe<Scalars['String']['input']>>;
  status?: InputMaybe<Mutation_UpdatePet_Status>;
  tags?: InputMaybe<Array<InputMaybe<Tag_Input>>>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  /** Multiple status values can be provided with comma separated strings. */
  findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
  findPetsByTags?: Maybe<Array<Maybe<Pet>>>;
  /** Returns a map of status codes to quantities. */
  getInventory?: Maybe<Scalars['JSON']['output']>;
  /** For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions. */
  getOrderById?: Maybe<Order>;
  /** Returns a single pet. */
  getPetById?: Maybe<Pet>;
  /** Get user detail based on username. */
  getUserByName?: Maybe<User>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  /** Log into the system. */
  loginUser?: Maybe<Scalars['String']['output']>;
  /** Log user out of the system. */
  logoutUser?: Maybe<Scalars['JSON']['output']>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryFindPetsByStatusArgs = {
  status?: QueryInput_FindPetsByStatus_Status;
};


export type QueryFindPetsByTagsArgs = {
  tags: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryGetOrderByIdArgs = {
  orderId: Scalars['BigInt']['input'];
};


export type QueryGetPetByIdArgs = {
  petId: Scalars['BigInt']['input'];
};


export type QueryGetUserByNameArgs = {
  username: Scalars['String']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};


export type QueryLoginUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Tag_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['EmailAddress']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** User Status */
  userStatus?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type User_Input = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** User Status */
  userStatus?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Order Status */
export enum Mutation_PlaceOrder_Status {
  Approved = 'approved',
  Delivered = 'delivered',
  Placed = 'placed'
}

/** pet status in the store */
export enum Mutation_UpdatePet_Status {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}

/** Status values that need to be considered for filter */
export enum QueryInput_FindPetsByStatus_Status {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}

export type AllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, emoji: string }> };


export const AllCountriesDocument = gql`
    query AllCountries {
  countries {
    code
    name
    emoji
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllCountries(variables?: AllCountriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllCountriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllCountriesQuery>({ document: AllCountriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'AllCountries', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;