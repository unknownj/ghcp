function getMaxZIndex() {
  let maxZ = 0;
  let curMax = [];
  document.querySelectorAll("*").forEach(el => {
    // Get the computed style
    const style = window.getComputedStyle(el);
    // Only consider positioned elements (not static)
    if (['absolute', 'relative', 'fixed', 'sticky'].includes(style.position)) {
      const z = style.zIndex;
      if (z !== 'auto') {
        const zNum = Number(z);
        // Only consider numeric z-indices
        if (!isNaN(zNum)) {
          if(zNum > maxZ) curMax = [el];
          if(zNum === maxZ) curMax.push(el);
          maxZ = Math.max(maxZ, zNum);
        }
      }
    }
  });
  return [maxZ, curMax];
}

console.log(getMaxZIndex());
