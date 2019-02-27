/**
 * The main context for all task lists in the app.
 *
 * @class TaskListsContext
 */
/**
 * Gets all task lists and their information. This includes any task lists shared with the user. This does not retrieve tasks in the list.
 *
 * @function
 * @name TaskListsContext#GetTaskLists
 * @returns {Promise}
 * <br>
 * Resolves to {@link #ITaskListInfo|`ITaskListInfo[]`}.
 *
 * @example
 * TaskListsContext.GetTaskLists().then(taskLists => {
 *     // Prints how many task lists total in Iridium.
 *     console.log(taskLists.length);
 * });
 */
/**
 * Gets a specific task list's information and tasks.
 *
 * @function
 * @name TaskListsContext#GetTaskList
 * @param {string} id The id of the task list
 * @returns {Promise}
 * <br>
 * Resolves to {@link #ITaskList|`ITaskList[]`}.
 * <br>
 * Rejets if: Task list does not exist.
 * @example
 * TaskListsContext.GetTaskList('81a7428b-3026-4023-a870-d32be105dd88').then(taskList => {
 *     // Prints how many tasks in the list.
 *     console.log(taskList.tasks.length);
 * });
 */
/**
 * Subscribes for a specific task event. The handler will be invoked when the associated event occurs in Iridium.
 * @function
 * @name TaskListsContext#on
 * @param {TaskEvent} event The event to subscribe to. See {@link TaskEvent} enum type for specific event name and associated arguments.
 * @param {Function} handler The associated event handler that will be invoked.
 * @param {string} [registration] A registration token associated with this handler that can be used later to unsubscribe a handler. 
 * This token need not be unique per handler.
 * 
 */

 /**
 * Unsubscribe a previously subscribed handler with the given token.
 * @function
 * @name TaskListsContext#off
 * @param {TaskEvent} event The event to unsubscribe.
 * @param {string} [registration] The registration token associated with this handler previously subscribed. If no registration is given, all handlers of that event will be unsubscribed.
 * 
 */


/**
* A snapshot of a task list's general information.
*
* @typedef ITaskListInfo
* @type Object
*
* @property {string} id The id of the task list which is UUID v4 formated.
* @property {string} title The title of the task list.
* @property {boolean} completed Boolean indicating whether the task list is completed.
* @property {number} completedPercentage The percentage of the completed tasks in this list. The number is rounded to whole number.
* @property {number} inProgressPercentage The percentage of the in-progress tasks in this list. The number is rounded to whole number.
* @property {number} order A ordering sequence number applied to the task list
*/

/**
* A snapshot of a task list.
*
* @typedef ITaskList
* @type Object
*
* @property {string} id The id of the task list which is UUID v4 formated.
* @property {string} title The title of the task list.
* @property {boolean} completed Boolean indicating whether the task list is completed.
* @property {number} completedPercentage The percentage of the completed tasks in this list. The number is rounded to whole number.
* @property {number} inProgressPercentage The percentage of the in-progress tasks in this list. The number is rounded to whole number.
* @property {number} order A ordering sequence number applied to the task list.
* @property {ITask[]} tasks All tasks present in the list.
*/


/**
* A snapshot of a task.
*
* @typedef ITask
* @type Object
*
* @property {string} id The id of the task which is UUID v4 formated.
* @property {string} title The title of the task.
* @property {boolean} completed Boolean indicating whether the task is completed.
* @property {number} inProgress Boolean indicating whether ths task is in progress.
* @property {number} order A ordering sequence number applied to the task.
* @property {string[]} labels Labels applied on the task. When no labels are present, the array is empty.
* @property {string} dueDate Due date of the task if any. When set, the string is ISO formatted date string YYYY-MM-DD. When no due date is set, the string is empty.
*/

/**
* 
* @typedef TaskEventArg
* @type Object
*
* @property {string} listId The id of list where the task belongs to which is UUID v4 formated.
* @property {string} id The id of the task which is UUID v4 formated.
* @property {string} title The title of the task.
* @property {boolean} completed Boolean indicating whether the task is completed.
* @property {number} inProgress Boolean indicating whether ths task is in progress.
* @property {number} order A ordering sequence number applied to the task.
* @property {string[]} labels Labels applied on the task. When no labels are present, the array is empty.
* @property {string} dueDate Due date of the task if any. When set, the string is ISO formatted date string YYYY-MM-DD. When no due date is set, the string is empty.
*/

/**
* 
* @typedef TaskDeletedEventArg
* @type Object
*
* @property {string} listId The id of list where the task belongs to which is UUID v4 formated.
* @property {string} id The id of the task which is UUID v4 formated.
*/



/**
 * A list of events for {@link TaskListsContext#on} to subscribe to and their associated arguments that will be passed in to handlers registered.
 * @readonly
 * @enum {string}
 */
var TaskEvent = {
    /**
     * TaskCreated is emitted when a task is created and added to a list. This happens when:
     *     1. User creates new task
     *     2. User un-deletes a deleted task
     *     3. User moves task into a list
     * <br>
     * Argument: {@link TaskEventArg}
     * <blockquote>TaskCreated will not be emitted when a new task is downloaded from Iridium Cloud, see {@link TaskEvent | TaskEvent.TaskDownloaded} </blockquote>
     */
    TaskCreated: "TaskCreated",
    /**
     * TaskDeleted is emitted when a task is deleted by the user. 
     * <br>
     * Argument: {@link TaskDeletedEventArg}
     * <blockquote>TaskDeleted will not be emitted when a task is removed from Iridium Cloud, see {@link TaskEvent | TaskEvent.TaskDeletedCloud} </blockquote>
     */
    TaskDeleted: "TaskDeleted",

    /**
     * TaskDownloaded is emitted when: 1. a new task is downloaded from Iridium Cloud or, 2. an existing task is updated from Iridium Cloud
     * <br>
     * Argument: {@link TaskEventArg}
     */
    TaskDownloaded: "TaskDownloaded"
};