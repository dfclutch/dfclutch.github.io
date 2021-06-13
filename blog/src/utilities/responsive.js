export function addWindowSizeListener(breakpoints, setValue) {
  window
    .addEventListener(
      'resize',
      () => setValue(getBreakpointValue(breakpoints))
    );
}

export function getBreakpointValue(breakpoints = []) {
  const found =  breakpoints.find((bp) => (window.innerWidth < bp.w) &&  bp.v );

  if (!found) return '100%';
  return found.v;
}