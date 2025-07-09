import { useState, useEffect } from 'react';

/**
 * usePersistentState - React hook to persist state in localStorage or sessionStorage
 * @param key Storage key
 * @param initialValue Initial value for the state
 * @param storageType 'local' | 'session' (default: 'local')
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T,
  storageType: 'local' | 'session' = 'local',
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  const [state, setState] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(state));
    } catch {
      // Ignore write errors
    }
  }, [key, state, storage]);

  return [state, setState];
}
