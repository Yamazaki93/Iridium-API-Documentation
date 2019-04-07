/**
 * The main context for labels in the app.
 *
 * @class
 * @name IridiumApp.Labels
 */
/**
 * Gets all the lables in the app.
 *
 * @function
 * @name IridiumApp.Labels#GetAllLabels
 * @returns {Promise}
 * <br>
 * Resolves to {@link #ILabel|`ILabel[]`}.
 *
 * @example
 * Labels.GetAllLabels().then(labels => {
 *     // Prints how many labels total in Iridium.
 *     console.log(labels.length);
 * });
 */
/**
 * Subscribes for a specific label event. The handler will be invoked when the associated event occurs in Iridium.
 * @function
 * @name IridiumApp.Labels#on
 * @param {LabelsEvents} event The event to subscribe to. See {@link IridiumApp.LabelsEvents} enum type for specific event name and associated arguments.
 * @param {Function} handler The associated event handler that will be invoked, the event argument will be passed in as 1st parameter.
 * @param {string} [registration] An optional registration token associated with this handler that can be used later to unsubscribe. 
 * This token need not be unique per handler.
 * @throws {Error} If the event is not a recognized LabelsEvent
 * @example
 * // When available labels changed, print the labels to debug console
 * Labels.on(LabelsEvents.LabelsChanged, (arg) => {
 *     console.log(arg);
 * });
 * 
 */

/**
* Unsubscribes a previously subscribed handler with the given registration token. If the same token is used to register multiple handlers, they will all be unsubscribed. 
* If no token is given, all handlers of that event will be unsubscribed.
* 
* @function
* @name IridiumApp.Labels#off
* @param {LabelsEvents} event The event to unsubscribe.
* @param {string} [registration] The registration token associated with handlers previously subscribed. 
* @throws {Error} If the event is not a recognized LabelsEvent
* 
*/


/**
* A snapshot of a label's general information.
*
* @typedef ILabel
* @type Object
*
* @property {string} title The title of the label.
* @property {string} color Hex code indicating the color associated with the label.
*/


/**
 * A list of events used in {@link IridiumApp.Labels#on}, {@link IridiumApp.Labels#off} to subscribe/unsubscribe and their associated arguments that will be passed in to handlers when event occurs.
 * @readonly
 * @enum {string}
 */
IridiumApp.LabelsEvents = {
    /**
     * LabelsChanged is emitted when labels in Iridium are changed, this includes:
     * 
     *   1. User creates a label.
     * 
     *   2. User renames a label.
     * 
     * <br>
     * Argument: {@link #ILabel|`ILabel[]`}
     * <blockquote>LabelsChanged will not be emitted when a new label is downloaded from Iridium Cloud, see {@link IridiumApp.LabelsEvents | LabelsEvents.LabelDownloaded} </blockquote>
     */
    LabelsChanged: "LabelsChanged",
}
