import isPlainObject from 'lodash/isPlainObject'
import { Current } from '@tarojs/taro'
import { SimpleMap } from '@tarojs/utils'

export function addLeadingSlash (str) {
  return str[0] === '/' ? str : `/${str}`
}

export function isEmptyObject (obj) {
  if (!obj || !isPlainObject(obj)) {
    return false
  }
  for (const n in obj) {
    if (obj.hasOwnProperty(n)) {
      return false
    }
  }
  return true
}

export function isUndefined (o) {
  return o === undefined
}

/**
 * JSON 克隆
 * @param {Object | Json} jsonObj json对象
 * @return {Object | Json} 新的json对象
 */
export function objClone (jsonObj) {
  let buf
  if (Array.isArray(jsonObj)) {
    buf = []
    let i = jsonObj.length
    while (i--) {
      buf[i] = objClone(jsonObj[i])
    }
    return buf
  } else if (isPlainObject(jsonObj)) {
    buf = {}
    for (const k in jsonObj) {
      buf[k] = objClone(jsonObj[k])
    }
    return buf
  } else {
    return jsonObj
  }
}

export function getPrototype (obj) {
  /* eslint-disable */
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(obj)
  } else if (obj.__proto__) {
    return obj.__proto__
  }
  /* eslint-enable */
  return obj.constructor.prototype
}

export function getPrototypeChain (obj) {
  const protoChain = []
  while ((obj = getPrototype(obj))) {
    protoChain.push(obj)
  }
  return protoChain
}

export function noop () {}

export function isFunction (arg) {
  return typeof arg === 'function'
}

export function isArray (arg) {
  return Array.isArray(arg)
}

export function shakeFnFromObject (obj) {
  let newObj
  if (isArray(obj)) {
    newObj = []
    const len = obj.length
    for (let i = 0; i < len; i++) {
      newObj.push(shakeFnFromObject(obj[i]))
    }
  } else if (isPlainObject(obj)) {
    newObj = {}
    for (const key in obj) {
      if (isFunction(obj[key])) {
        continue
      }
      const ret = shakeFnFromObject(obj[key])
      newObj[key] = ret
    }
  } else {
    return obj
  }
  return newObj
}

const keyList = Object.keys
const hasProp = Object.prototype.hasOwnProperty

function diffArrToPath (to, from, res = {}, keyPrev = '') {
  const len = to.length
  for (let i = 0; i < len; i++) {
    const toItem = to[i]
    const fromItem = from[i]
    const targetKey = `${keyPrev}[${i}]`
    if (toItem === fromItem) {
      continue
    } else if (typeof toItem !== typeof fromItem) {
      res[targetKey] = toItem
    } else {
      if (typeof toItem !== 'object') {
        res[targetKey] = toItem
      } else {
        const arrTo = isArray(toItem)
        const arrFrom = isArray(fromItem)
        if (arrTo !== arrFrom) {
          res[targetKey] = toItem
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, `${targetKey}`)
          }
        } else {
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem
          } else {
            // 对象
            diffObjToPath(toItem, fromItem, res, `${targetKey}.`)
          }
        }
      }
    }
  }
  return res
}

// 比较的对象均为plainObject，且函数已被过滤
export function diffObjToPath (to, from, res = {}, keyPrev = '') {
  const keys = keyList(to)
  const len = keys.length

  for (let i = 0; i < len; i++) {
    const key = keys[i]
    const toItem = to[key]
    const fromItem = from[key]
    const targetKey = `${keyPrev}${key}`
    if (toItem === fromItem) {
      continue
    } else
    if (!hasProp.call(from, key)) {
      res[targetKey] = toItem
    } else
    if (typeof toItem !== typeof fromItem) {
      res[targetKey] = toItem
    } else {
      if (typeof toItem !== 'object') {
        res[targetKey] = toItem
      } else {
        const arrTo = isArray(toItem)
        const arrFrom = isArray(fromItem)
        if (arrTo !== arrFrom) {
          res[targetKey] = toItem
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, `${targetKey}`)
          }
        } else {
          // null
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem
          } else {
          // 对象
            diffObjToPath(toItem, fromItem, res, `${targetKey}.`)
          }
        }
      }
    }
  }
  return res
}

export function queryToJson (str) {
  const dec = decodeURIComponent
  const qp = str.split('&')
  let ret = {}
  let name
  let val
  for (let i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i]
    if (item.length) {
      const s = item.indexOf('=')
      if (s < 0) {
        name = dec(item)
        val = ''
      } else {
        name = dec(item.slice(0, s))
        val = dec(item.slice(s + 1))
      }
      if (typeof ret[name] === 'string') { // inline'd type check
        ret[name] = [ret[name]]
      }

      if (isArray(ret[name])) {
        ret[name].push(val)
      } else {
        ret[name] = val
      }
    }
  }
  return ret // Object
}

const _loadTime = (new Date()).getTime().toString()
let _i = 1
export function getUniqueKey () {
  return _loadTime + (_i++)
}

export function getObjChainValue (obj, keyChain) {
  const keys = keyChain.split('.')
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    if (i === len - 1) return obj[key]
    obj = obj[key]
  }
}

let id = 0
function genId () {
  return String(id++)
}

let compIdsMapper
try {
  compIdsMapper = new Map()
} catch (error) {
  compIdsMapper = new SimpleMap()
}
export function genCompid (key, isNeedCreate) {
  if (!Current || !Current.current || !Current.current.$scope) return []

  const prevId = compIdsMapper.get(key)
  if (isNeedCreate) {
    const id = genId()
    compIdsMapper.set(key, id)
    return [prevId, id]
  } else {
    const id = prevId || genId()
    !prevId && compIdsMapper.set(key, id)
    return [null, id]
  }
}

let prefix = 0
export function genCompPrefix () {
  return String(prefix++)
}
