/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        city
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLodge = /* GraphQL */ `
  query GetLodge($id: ID!) {
    getLodge(id: $id) {
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
export const listLodges = /* GraphQL */ `
  query ListLodges(
    $filter: TableLodgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLodges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
