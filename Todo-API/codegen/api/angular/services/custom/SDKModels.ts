/* tslint:disable */
import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoDetail } from '../../models/TodoDetail';
import { Account } from '../../models/Account';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Todo: Todo,
    TodoDetail: TodoDetail,
    Account: Account,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
