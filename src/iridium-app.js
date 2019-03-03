/**
 * The current Iridium application context.
 *
 * @typedef IridiumApp
 */

/**
 *  A logger to log data to log.txt file under the plugin's directory.
 *
 * @class
 * @name IridiumApp.Log
 */
/**
 * The available levels the logger can be set to. The levels from low to high are 'debug' -> 'info' -> 'warn' -> 'error'
 * @name LogLevelOption
 * @enum {string | false}
 * @readonly
 */
var LogLevelOption = {
    /**
     * false disables the logger
     * @type {boolean}
     */
    false: false,
    /**
     * Prints all logs from 'debug' level and up to the log file
     * @type {string}
     */
    debug: 'debug',
    /** 
     * Prints all logs from 'info' level and up to the log file
     * @type {string}
     */
    info: 'info',
    /** 
     * Prints all logs from 'warn' level and up to the log file
     * @type {string}
     */
    warn: 'warn',
    /** 
     * Prints all logs from 'error' to the log file
     * @type {string}
     */    
    error: 'error'
}

/**
 * Changes the logger's log level, passing in false in level disables the logger
 *
 * @function
 * @name IridiumApp.Log#SetLevel
 * @param {LogLevelOption} level
 */

/**
 * Logs a debug entry.
 *
 * @function
 * @name IridiumApp.Log#Debug
 * @param {string} logEntry
 */
/**
 * Logs an info entry.
 *
 * @function
 * @name IridiumApp.Log#Info
 * @param {string} logEntry
 */
/**
 * Logs a warning entry.
 *
 * @function
 * @name IridiumApp.Log#Warn
 * @param {string} logEntry
 */
/**
 * Logs an error entry.
 *
 * @function
 * @name IridiumApp.Log#Error
 * @param {string} logEntry
 */