import * as SQLite from 'expo-sqlite';
import { BaseModel, types } from 'expo-sqlite-orm';

export default class Trip extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase('database.db')
  }

  static get tableName() {
    return 'trips'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, not_null: true },
      address: { type: types.TEXT, not_null: true, unique: true },
      category: { type: types.TEXT, not_null: true },
      cost: { type: types.TEXT },
      wifiPassword: { type: types.TEXT },
      website: { type: types.TEXT },
      email: { type: types.TEXT },
      phone: { type: types.TEXT },
      creator: { type: types.INTEGER, not_null: true },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}
