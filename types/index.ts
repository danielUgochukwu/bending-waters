import type { ComponentType, SVGProps } from "react";

export interface Project {
  _id: string;
  title: string;
  category: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  body: any[];
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  thumbnail: any;
  publishedAt: string;
  category: string;
}

export interface NewsGridProps {
  searchParams?: {
    search?: string;
    category?: string;
    tag?: string;
  };
}

export type NavItem = {
  name: string;
  link?: string;
};

export type NavDropdownSection = {
  title: string;
  items: NavItem[];
};

type BaseNavLink = {
  name: string;
};

export type NavLink =
  | (BaseNavLink & {
      link: string;
      dropdown?: never;
    })
  | (BaseNavLink & {
      link?: string;
      dropdown: NavDropdownSection[];
    });

export type Community = {
  number: string;
  category: string;
  label: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};


