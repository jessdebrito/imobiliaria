export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  category: Category;
  name: string;
  location: string;
  description: string;
  price: string;
  parking: number;
  petFriendly: boolean;
  addSpace: boolean;
  sizeId: string;
  size: Size;
  roomId: string;
  room: Room;
  bathroomId: string;
  bathroom: Bathroom;
  adtypeId: string;
  adtype: Adtype;
  colorId: string;
  color: Color;
  builtYear: string;
  renovationYear: string;
  heating: boolean;
  airConditioning: boolean;
  fireplace: boolean;
  ventilation: boolean;
  intercom: boolean;
  cableTv: boolean;
  elevator: boolean;
  internet: boolean;
  isArchived: boolean;
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Adtype {
  id: string;
  name: string;
  value: string;
}

export interface Room {
  id: string;
  name: string;
  value: string;
}

export interface Bathroom {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
