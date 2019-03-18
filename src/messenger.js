/**
 * The messenger instance for sending and receiving data to/from the plugin's frontend
 *
 * @class
 * @name IridiumApp.Messenger
 */
/**
 * Sends a message to your plugin's frontned. The frontend should call Messenger.on(message,...) to register to receive the message before sending.
 *
 * @function
 * @name IridiumApp.Messenger#Send
 * @param {String} message A string that distingushs different messages your plugin sends.
 * @param {Object} payload Payload that goes with the message which will be received by your frontend's registered handlers. If no payload is desired, pass in {}.
 * @throws {Error} If either the message or the payload is not defined
 * @example
 * Messenger.Send('SetTitle', {title: 'A Title'});
 */
/**
 * Subscribes a handler that will receive message from your frontend.
 * 
 * @function
 * @name IridiumApp.Messenger#on
 * @param {String} message The message to subscribe to.
 * @param {Function} handler The associated event handler that will be invoked, the event argument will be passed in as 1st parameter.
 * @param {string} [registration] An optional registration token associated with this handler that can be used later to unsubscribe. 
 * This token need not be unique per handler.
 *
 * @example
 * // When the message SetUserToken is received, print token in the payload
 * Messenger.on('SetUserToken', (arg) => {
 *     console.log(arg.token);
 * });
 * 
 */

/**
* Unsubscribes a previously subscribed handler with the given registration token. If the same token is used to register multiple handlers, they will all be unsubscribed. 
* If no token is given, all handlers of that event will be unsubscribed.
* 
* @function
* @name IridiumApp.Messenger#off
* @param {String} message The message to unsubscribe.
* @param {string} [registration] The registration token associated with handlers previously subscribed. 
*
* @example
* // Unregister all previously registered handler for message SetUserToken
* Messenger.off('SetUserToken');
* 
*/
