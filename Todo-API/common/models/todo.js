"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (Todo) {
    /**
 * Copy 1 Todo thanh todo moi
 * @param {any} ctx
 * @param {string} customName ten moi cua Todo
 */
    Todo.prototype.copy = async function (ctx, customName) {
        const todoId = ctx.instance.id || 0;
        const todo = await Todo.findById(todoId, {});
        if (!todo) {
            throw (new Error('Todo khong ton tai'));
        }
        Object.assign(todo, { id: undefined });
        const newTodo = await Todo.create(todo);
        const newTodoId = newTodo.id;
        return newTodoId;
    };
};
