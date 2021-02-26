export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === 'true'
  } else if (type === 'array') {
    return 
  }

  return false
}
