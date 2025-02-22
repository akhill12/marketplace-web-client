export interface Owner {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
}

export interface Ad {
  _id: string;
  owner: string;
  title: string;
  description: string;
  imageURLs: string[];
  createdAt: string;
  updatedAt: string;
  price: number;
  category: string;
}

export interface AdResponse {
  listings: Ad[];
  totalPages: number;
  currentPage: number;
}
