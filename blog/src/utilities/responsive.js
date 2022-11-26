import { useEffect, useState } from "react";

function addWindowSizeListener(breakpoints, setValue) {
  window.addEventListener("resize", () =>
    setValue(getBreakpointValue(breakpoints))
  );
}

function getBreakpointValue(breakpoints = []) {
  const found = breakpoints.find((bp) => window.innerWidth < bp.w && bp.v);

  if (!found) return "100%";
  return found.v;
}

export function useBreakpoints(breakpoints) {
  const [width, setWidth] = useState(getBreakpointValue(breakpoints));
  addWindowSizeListener(breakpoints, setWidth);

  return width;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.mobileCheck());

  useEffect(() => {
    setIsMobile(window.mobileCheck());
  }, [window.innerWidth]);

  return { isMobile };
}
