"use client";

import React from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon } from
  "react-icon-cloud";

type IconsResponse = { simpleIcons: Record<string, SimpleIcon> };

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<IconsResponse | null>(null);

  React.useEffect(() => {
    let mounted = true;
    fetchSimpleIcons({ slugs }).then((res) => {
      if (mounted) setIcons(res);
    });
    return () => {
      mounted = false;
    };
  }, [slugs]);

  // Return null while loading to avoid rendering different markup server vs client
  if (!icons) return null;

  // Preserve the order of `slugs` and attach stable keys to each element.
  return slugs.map((slug) => {
    const icon: SimpleIcon | undefined = icons.simpleIcons?.[slug];
    if (!icon) return null;

    const el = renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          e.preventDefault(),
      },
    }) as React.ReactElement;

    // Ensure each returned element has a stable key
    return React.cloneElement(el, { key: slug });
  });
};
const slugs = [
  "amazonaws",
  "android",
  "androidstudio",
  "antdesign",
  "typescript",
  "vercel",
  "visualstudiocode",
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return <Cloud id="word">{icons}</Cloud>;
};

// const TagCanvus = () => {
//   const tagCanvasOptions = {
//     textColour: "#FFDE34",
//     outlineThickness: 0.5,
//     outlineColour: "#fe0853",
//     maxSpeed: 0.06,
//     freezeActive: true,
//     shuffleTags: true,
//     shape: "sphere",
//     zoom: 1,
//     noSelect: true,
//     pinchZoom: true,
//     freezeDecel: true,
//     fadeIn: 3000,
//     initial: [0.3, -0.1],
//     depth: 0.97,
//     reverse: true,
//     clickToFront: 500,
//     textHeight: 35,
//     imageScale: 2,
//     dragControl: true,
//     tooltip: "native",
//     tooltipDelay: 0,
//     wheelZoom: true,
//     textFont: "Arial, sans-serif",
//   };
// const icons = useIcons(slugs)
//   return (
//     <Cloud
//       id={"word"}
//       type={"word"}
//       tags={wordTags}
//       key={v4()}
//       tagCanvasOptions={tagCanvasOptions}
//     />
//   );
// };

export default DynamicIconCloud;
