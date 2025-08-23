import type { SetStateAction, Dispatch } from "react";
export interface HomeProps {
  setMode: Dispatch<SetStateAction<string>>;
  mode: string;
}

export interface skill {
  id: number;
  name: string;
}
export interface project {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}
