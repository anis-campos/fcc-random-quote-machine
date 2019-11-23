import { isArray } from "util";

export function borderRadius(args) {
  return `
  -webkit-border-radius: ${args};
  -moz-border-radius: ${args};
  -ms-border-radius: ${args};
  -o-border-radius: ${args};
  border-radius: ${args};`
  
}

export function transition(...arr) {
  if (arr.length === 1) {
    const args = arr[0];
    return `
    -webkit-transition: ${args};
    -moz-transition: ${args};
    -ms-transition: ${args};
    -o-transition: ${args};
    transition: ${args};`
  }
  else if (arr.length === 2 && isArray(arr[0])) {
    const args = arr[1];
    const properties = arr[0].reduce((acc,item)=>acc+', '+item);
    return `
    -webkit-transition: ${args};
    -moz-transition: ${args};
    -ms-transition: ${args};
    -o-transition: ${args};
    transition: ${args};
    -webkit-transition-property: ${properties};
    -moz-transition-property: ${properties};
    -ms-transition-property: ${properties};
    -o-transition-property: ${properties};
    transition-property: ${properties};
    `
  }
  else
    return ""
}