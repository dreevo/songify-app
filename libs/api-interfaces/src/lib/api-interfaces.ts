export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Song extends BaseEntity {
  title: string;
  description: string;
}
