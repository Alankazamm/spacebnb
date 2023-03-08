/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateLodge = /* GraphQL */ `
  subscription OnCreateLodge(
    $id: ID
    $title: String
    $hostId: String
    $typeOfInn: String
    $avaliability: Boolean
  ) {
    onCreateLodge(
      id: $id
      title: $title
      hostId: $hostId
      typeOfInn: $typeOfInn
      avaliability: $avaliability
    ) {
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
export const onUpdateLodge = /* GraphQL */ `
  subscription OnUpdateLodge(
    $id: ID
    $title: String
    $hostId: String
    $typeOfInn: String
    $avaliability: Boolean
  ) {
    onUpdateLodge(
      id: $id
      title: $title
      hostId: $hostId
      typeOfInn: $typeOfInn
      avaliability: $avaliability
    ) {
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
export const onDeleteLodge = /* GraphQL */ `
  subscription OnDeleteLodge(
    $id: ID
    $title: String
    $hostId: String
    $typeOfInn: String
    $avaliability: Boolean
  ) {
    onDeleteLodge(
      id: $id
      title: $title
      hostId: $hostId
      typeOfInn: $typeOfInn
      avaliability: $avaliability
    ) {
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
