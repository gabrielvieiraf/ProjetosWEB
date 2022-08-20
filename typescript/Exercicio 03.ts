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

export function decodedResistorValue(array: string[]) {
  const [color1, color2, color3] = array
  const twoFirstNumbers = String(getValueColor(color1)) + String(getValueColor(color2)) 
  const potency = 10 ** getValueColor(color3)
  const result = Number(twoFirstNumbers) * potency
  return result/1000 > 1 ? result/1000 + ' kiloohms' : String(Number(twoFirstNumbers) * potency) + ' ohms'
}
