import {
  DateTimeResolver,
  EmailAddressResolver,
  NegativeFloatResolver,
  NegativeIntResolver,
  NonNegativeIntResolver,
  NonNegativeFloatResolver,
  NonPositiveFloatResolver,
  NonPositiveIntResolver,
  PositiveIntResolver,
  PositiveFloatResolver,
} from 'graphql-scalars';
// import { GraphQLUpload } from 'graphql-upload';

const resolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  NegativeFloat: NegativeFloatResolver,
  NegativeInt: NegativeIntResolver,
  NonNegativeInt: NonNegativeIntResolver,
  NonNegativeFloat: NonNegativeFloatResolver,
  NonPositiveFloat: NonPositiveFloatResolver,
  NonPositiveInt: NonPositiveIntResolver,
  PositiveInt: PositiveIntResolver,
  PositiveFloat: PositiveFloatResolver,
  // Upload: GraphQLUpload,
};

export default resolvers;
