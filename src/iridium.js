/**
 * Your plugin's main module will need to implement IPlugin for it to run properly.
 *
 * @typedef IPlugin
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