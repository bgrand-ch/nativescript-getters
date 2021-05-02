/**
 * Show a formatted error in the console
 * @private
 * @param {Error} error
 * @param {string} methodName
 * @returns {void} Show console error
 */
export function showError (error: Error, methodName: string): void {
  const { message, stack } = error
  const newLine = '\n'

  console.error(
    newLine,
    'NativeScript Getters Plugin',

    newLine,
    `An error has occurred with the method "${methodName}":`,

    newLine,
    message,

    newLine,
    'Check your code. If the problem persists, open an issue:',
    newLine,
    'https://github.com/bgrand-ch/nativescript-getters/issues',

    newLine,
    '--- Start stack trace ---',

    newLine,
    stack,

    newLine,
    '--- End stack trace ---',
  )
}
