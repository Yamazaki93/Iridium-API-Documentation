/**
 * The settings context for the plugin
 *
 * @class
 * @name IridiumApp.Settings
 */
/**
 * Sets the settings for this plugin with Iridium that will be synchornized bewteen different Iridium instances
 *
 * @function
 * @name IridiumApp.Settings#SetSettings
 * @param {Object} settings The settings object, the size of this object is limited to be 10KB.
 * @throws {Error} If the settings object is null or undefined
 * @throws {Error} If the settings size after serialization exceeds 10KB
 * @example
 * Settings.SetSettings(settings);
 */
/**
 * Gets the settings set by the plugin. The plugin settings will be initialized before {@link IPlugin#Initialize} is invoked.
 *
 * @function        
 * @name IridiumApp.Settings#GetSettings
 * @returns {Promise}
 * <br>
 * Resolves to an {@link Object} that was previously set by the plugin. If no settings exists, the object will be {}.
 * @example
 * Settings.GetSettings().then(settings => {
 *     // Read the settings
 * });
 */