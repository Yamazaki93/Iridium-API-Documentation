/**
 * Your plugin's main module will need to implement IPlugin for it to run properly.
 * 
 * The following example shows a barebone implementation of the main script
 *
 * @interface IPlugin
 * @example 
 *  
 * module.exports.Initialize = (iridium) => {    
 *     //Do initialization here for your plugin with "iridium"
 * }
 * 
 */

/**
 * The main entry point Iridium will call to provide your plugin the current Iridium context.
 * 
 * <blockquote> If initialize does not run properly or exception occurs during initialization, 
 * "plugin exit" error will be reported and the plugin will be marked in error.</blockquote>
 *
 * @function
 * @name IPlugin#Initialize
 * @param {IridiumApp} iridium The current Iridium context that contains several objects your plugin can use.
 */