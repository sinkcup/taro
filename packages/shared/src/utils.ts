export const EMPTY_OBJ: any = {}

export const EMPTY_ARR = []

export const noop = (..._: unknown[]) => {}

/**
 * Boxed value.
 *
 * @typeparam T Value type.
 */
export interface Box<T> {
  v: T;
}

/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
export const box = <T>(v: T) => ({ v })

/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
export const unbox = <T>(b: Box<T>) => b.v

export function toDashed (s: string) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

export function toCamelCase (s: string) {
  let camel = ''
  let nextCap = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i]
      nextCap = false
    } else {
      nextCap = true
    }
  }
  return camel
}

const hasOwnProperty = Object.prototype.hasOwnProperty

export const hasOwn = (
  val: object,
  key: string | symbol
) => hasOwnProperty.call(val, key)
