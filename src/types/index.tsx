import type { SetStateAction, Dispatch } from "react";
import type { ReactNode } from "react";
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

export interface Title {
  name: string;
}

export interface Link {
  id: number;
  name: string;
  content: string;
}

export interface Media {
  id: number;
  link: string;
  icon: ReactNode;
}
