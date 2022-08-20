function getValueColor(color: string){
 const bandColors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  return bandColors.indexOf(color)
}

export function decodedValue(array: string[]) {
  const [color1, color2] = array
  return Number(String(getValueColor(color1)) + getValueColor(color2))
}
