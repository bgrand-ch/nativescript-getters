import { Options } from "../models/options";

const opts: Options = {
  hasCommunityPackages: false,
  isDebugging: false
}

/**
 * Override one or more default options
 * @param {Partial<Options>[]} options
 * @returns {void}
 */
export function setOptions(options: Partial<Options>[]): void {
  const keys = Object.keys(options)

  for (let index = keys.length; index--;) {
    const key = keys[index]

    opts[key] = options[key]
  }
}

/**
 * Override a default option
 * @param {string} name
 * @param {boolean} value
 * @returns {void}
 */
export function setOption(name: string, value: boolean): void {
  opts[name] = value
}

/**
 * Retrieve all current options
 * @returns {Options}
 */
export function getOptions(): Options {
  return opts
}

/**
 * Retrieve the current value of an option
 * @param {string} name
 * @returns {Partial<Options>}
 */
export function getOption(name: string): Partial<Options> {
  return opts[name]
}
