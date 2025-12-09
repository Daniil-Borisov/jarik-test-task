export type UserAddressGeoType = {
  lat: string;
  lng: string;
};

export type UserAddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserAddressGeoType;
};

export type UserCompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressType;
  phone: string;
  website: string;
  company: UserCompanyType;
};

