import { fontRussoOne } from "@/_config/fonts";
import { IconSvgProps } from "@/_utils/common.types";

export const LogoIcon = ({
  size,
  fill,
  width = 24,
  height = 24,
  ...props
}: IconSvgProps) => {
  return (
    <div className={`logo-bg-animate ${fontRussoOne.className}`}>
      zzfQQ
      {/* <svg className="logo" width="100%" height="100%" viewBox="0 0 auto 30">
        <text
          x="0"
          y="30"
          fontSize="40"
          fill="hsl(var(--nextui-secondary-500))"
        >
        </text>
      </svg> */}
    </div>
  );
};
