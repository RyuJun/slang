import { SVGProps } from "react";

export type Nullable<T> = T | null;

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
