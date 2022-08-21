const YEARS_ON_EARTH_ORBIT: { [key: string]: number } =  {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846, 
  'neptune': 164.79132 
}

const EARTH_YEAR_IN_SECONDS = 31557600

export function age(planet: string, seconds: number): number {
  return parseFloat((seconds / (YEARS_ON_EARTH_ORBIT[planet] * EARTH_YEAR_IN_SECONDS)).toFixed(2))
}
