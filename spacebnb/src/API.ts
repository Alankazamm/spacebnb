/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  password: string,
  city?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  password: string,
  city?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  password?: string | null,
  city?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLodgeInput = {
  title: string,
  hostId: string,
  typeOfInn?: string | null,
  avaliability: boolean,
  bedRooms?: number | null,
  livingRooms?: number | null,
  kitchens?: number | null,
  tvRooms?: number | null,
  bathRooms?: number | null,
  rating?: number | null,
  price: number,
};

export type Lodge = {
  __typename: "Lodge",
  id: string,
  title: string,
  hostId: string,
  typeOfInn?: string | null,
  avaliability: boolean,
  bedRooms?: number | null,
  livingRooms?: number | null,
  kitchens?: number | null,
  tvRooms?: number | null,
  bathRooms?: number | null,
  rating?: number | null,
  price: number,
};

export type UpdateLodgeInput = {
  id: string,
  title?: string | null,
  hostId?: string | null,
  typeOfInn?: string | null,
  avaliability?: boolean | null,
  bedRooms?: number | null,
  livingRooms?: number | null,
  kitchens?: number | null,
  tvRooms?: number | null,
  bathRooms?: number | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteLodgeInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type TableLodgeFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  hostId?: TableStringFilterInput | null,
  typeOfInn?: TableStringFilterInput | null,
  avaliability?: TableBooleanFilterInput | null,
  bedRooms?: TableIntFilterInput | null,
  livingRooms?: TableIntFilterInput | null,
  kitchens?: TableIntFilterInput | null,
  tvRooms?: TableIntFilterInput | null,
  bathRooms?: TableIntFilterInput | null,
  price?: TableIntFilterInput | null,
  rating?: TableFloatFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type LodgeConnection = {
  __typename: "LodgeConnection",
  items?:  Array<Lodge | null > | null,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLodgeMutationVariables = {
  input: CreateLodgeInput,
};

export type CreateLodgeMutation = {
  createLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};

export type UpdateLodgeMutationVariables = {
  input: UpdateLodgeInput,
};

export type UpdateLodgeMutation = {
  updateLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};

export type DeleteLodgeMutationVariables = {
  input: DeleteLodgeInput,
};

export type DeleteLodgeMutation = {
  deleteLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      password: string,
      city?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLodgeQueryVariables = {
  id: string,
};

export type GetLodgeQuery = {
  getLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};

export type ListLodgesQueryVariables = {
  filter?: TableLodgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLodgesQuery = {
  listLodges?:  {
    __typename: "LodgeConnection",
    items?:  Array< {
      __typename: "Lodge",
      id: string,
      title: string,
      hostId: string,
      typeOfInn?: string | null,
      avaliability: boolean,
      bedRooms?: number | null,
      livingRooms?: number | null,
      kitchens?: number | null,
      tvRooms?: number | null,
      bathRooms?: number | null,
      rating?: number | null,
      price: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLodgeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  hostId?: string | null,
  typeOfInn?: string | null,
  avaliability?: boolean | null,
};

export type OnCreateLodgeSubscription = {
  onCreateLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};

export type OnUpdateLodgeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  hostId?: string | null,
  typeOfInn?: string | null,
  avaliability?: boolean | null,
};

export type OnUpdateLodgeSubscription = {
  onUpdateLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};

export type OnDeleteLodgeSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  hostId?: string | null,
  typeOfInn?: string | null,
  avaliability?: boolean | null,
};

export type OnDeleteLodgeSubscription = {
  onDeleteLodge?:  {
    __typename: "Lodge",
    id: string,
    title: string,
    hostId: string,
    typeOfInn?: string | null,
    avaliability: boolean,
    bedRooms?: number | null,
    livingRooms?: number | null,
    kitchens?: number | null,
    tvRooms?: number | null,
    bathRooms?: number | null,
    rating?: number | null,
    price: number,
  } | null,
};
