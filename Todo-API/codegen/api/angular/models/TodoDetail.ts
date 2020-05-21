/* tslint:disable */
import {
  Todo
} from '../index';

declare var Object: any;
export interface TodoDetailInterface {
  "Text"?: string;
  "status"?: boolean;
  "id"?: number;
  "todoId"?: number;
  todo?: Todo;
}

export class TodoDetail implements TodoDetailInterface {
  "Text": string;
  "status": boolean;
  "id": number;
  "todoId": number;
  todo: Todo;
  constructor(data?: TodoDetailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TodoDetail`.
   */
  public static getModelName() {
    return "TodoDetail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TodoDetail for dynamic purposes.
  **/
  public static factory(data: TodoDetailInterface): TodoDetail{
    return new TodoDetail(data);
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
      name: 'TodoDetail',
      plural: 'TodoDetails',
      path: 'TodoDetails',
      idName: 'id',
      properties: {
        "Text": {
          name: 'Text',
          type: 'string',
          default: 'No content'
        },
        "status": {
          name: 'status',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "todoId": {
          name: 'todoId',
          type: 'number'
        },
      },
      relations: {
        todo: {
          name: 'todo',
          type: 'Todo',
          model: 'Todo',
          relationType: 'belongsTo',
                  keyFrom: 'todoId',
          keyTo: 'id'
        },
      }
    }
  }
}
