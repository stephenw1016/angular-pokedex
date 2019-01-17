import { Injectable } from '@angular/core';

@Injectable()
export default class StorageService {
  private pokemonPrefix = 'pokemap-';

  constructor() {}

  /**
   * Retrieve a value from localStorage.
   * @param key - the key of the item to be retrieved
   */
  get(key: string): any {
    const  result = localStorage.getItem(this.pokemonPrefix + key);

    try {
      return JSON.parse(result);
    } catch(err) {
      console.error(err);
      return;
    }
  }

  /**
   * Save a value to localStorage.
   * @param key - the unique key of the item to set
   * @param value - the value to set
   */
  set(key: string, value: any): void {
    localStorage.setItem(this.pokemonPrefix + key, JSON.stringify(value));
  }
}
