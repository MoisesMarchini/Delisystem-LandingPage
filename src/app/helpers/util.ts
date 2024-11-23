export function RemoveEmptyOrNullFields<T extends Record<string, any>>(obj: T): T  {
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (obj[key] == null || obj[key] == '' || obj[key] == undefined) {
      delete obj[key];
    }
  });

  return obj;
}

export function RemoveNullFields<T extends Record<string, any>>(obj: T): T  {
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (obj[key] == null || obj[key] == undefined) {
      delete obj[key];
    }
  });

  return obj;
}

export function Merge<T extends Record<string, any>>(obj: T, obj2: T): T {
  const keys = Object.keys(obj2);
  const res: any = { ...obj };
  keys.forEach(key => {
    res[key] = obj2[key]
  });

  return res as T;
}
