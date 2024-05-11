export default interface Address {
  id: number;
  clientId?: number;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
