/**
 * The messenger instance injected to a plugin's Angular component with injection token "Messenger"
 *
 * @class
 * @name FrontendMessenger
 *
 * @example
 *
 * export class MyCoolAngularComponent implements OnInit {
 *
 *   constructor(
 *     private injector: Injector
 *   ) { }
 *
 *   ngOnInit() {
 *     let messenger = this.injector.get("Messenger");
 *     // sends or receives message with messenger
 *   }
 * }
 */
/**
 * Sends a message to your plugin's backend. The backend should call Messenger.on(message,...) to register to receive the message before sending.
 *
 * @function
 * @name FrontendMessenger#Send
 * @param {String} message A string that distingushs different messages your plugin sends.
 * @param {Object} payload Payload that goes with the message which will be received by your frontend's registered handlers. If no payload is desired, pass in {}.
 */
/**
 * Subscribes a handler that will receive message from your backend.
 *
 * @function
 * @name FrontendMessenger#on
 * @param {String} message The message to subscribe to.
 * @param {Function} handler The associated event handler that will be invoked, the event argument will be passed in as 1st parameter.
 *
* @example
*
* export class MyCoolAngularComponent implements OnInit {
*
*   constructor(
*     private injector: Injector
*   ) { }
*
*   ngOnInit() {
*     let messenger = this.injector.get("Messenger");
*     messenger.on('MessageSentFromBackend', (payload) => {
*       // do domething with payload from backend
*     });
*   }
* }
 */