/* tslint:disable */
import {
  TodoDetail,
  Account
} from '../index';

declare var Object: any;
export interface TodoInterface {
  "title": string;
  "subTitle"?: string;
  "id"?: number;
  "accountId"?: number;
  todoDetails?: TodoDetail[];
  account?: Account;
}

export class Todo implements TodoInterface {
  "title": string;
  "subTitle": string;
  "id": number;
  "accountId": number;
  todoDetails: TodoDetail[];
  account: Account;
  constructor(data?: TodoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Todo`.
   */
  public static getModelName() {
    return "Todo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Todo for dynamic purposes.
  **/
  public static factory(data: TodoInterface): Todo{
    return new Todo(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Todo',
      plural: 'Todos',
      path: 'Todos',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "subTitle": {
          name: 'subTitle',
          type: 'string',
          default: 'SHJDHSFS'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "accountId": {
          name: 'accountId',
          type: 'number'
        },
      },
      relations: {
        todoDetails: {
          name: 'todoDetails',
          type: 'TodoDetail[]',
          model: 'TodoDetail',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'todoId'
        },
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
      }
    }
  }
}
