/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      city
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      city
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      city
      createdAt
      updatedAt
    }
  }
`;
export const createLodge = /* GraphQL */ `
  mutation CreateLodge($input: CreateLodgeInput!) {
    createLodge(input: $input) {
      id
      title
      hostId
      typeOfInn
      avaliability
      bedRooms
      livingRooms
      kitchens
      tvRooms
      bathRooms
      rating
      price
    }
  }
`;
export const updateLodge = /* GraphQL */ `
  mutation UpdateLodge($input: UpdateLodgeInput!) {
    updateLodge(input: $input) {
      id
      title
      hostId
      typeOfInn
      avaliability
      bedRooms
      livingRooms
      kitchens
      tvRooms
      bathRooms
      rating
      price
    }
  }
`;
export const deleteLodge = /* GraphQL */ `
  mutation DeleteLodge($input: DeleteLodgeInput!) {
    deleteLodge(input: $input) {
      id
      title
      hostId
      typeOfInn
      avaliability
      bedRooms
      livingRooms
      kitchens
      tvRooms
      bathRooms
      rating
      price
    }
  }
`;
