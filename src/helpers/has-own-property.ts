/**
 * Check if an element has the specified property as its own property
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * @see https://dev.to/hebashakeel/difference-between-call-apply-and-bind-4p98
 * @param {string} propName
 * @returns {boolean}
 */
export function hasOwnProperty (propName: string): boolean {
  const element = this
  const value = element[propName]

  return (
    propName in element &&
    value !== null &&
    typeof value !== 'undefined'
  )
}
