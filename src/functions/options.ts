import { IOptions } from "../models/options";

const opts: IOptions = {
  hasCommunityPackages: false,
  hasDomNames: false,
  hasModuleAugmentation: false,
  isDebugging: false
}

/**
 * Override one or more default options
 * @param {Partial<IOptions>} options
 * @returns {void}
 */
export function setOptions(options: Partial<IOptions>): void {
  const keys = Object.keys(options)

  for (let index = keys.length; index--;) {
    const key = keys[index]

    opts[key] = options[key]
  }
}

/**
 * Retrieve all current options
 * @returns {IOptions}
 */
export function getOptions(): IOptions {
  return opts
}

/**
 * Retrieve the current value of an option
 * @param {string} name
 * @returns {Partial<IOptions>}
 */
export function getOption(name: string): Partial<IOptions> {
  return opts[name]
}
