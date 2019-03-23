/**
 * The static asset service injected to a plugin's Angular component with injection token "StaticAssets".
 * 
 * Your plugin can use this service to refer to static assets provided by your plugin
 *
 * @class
 * @name StaticAssets
 *
 * @example
 *
 * export class MyCoolAngularComponent implements OnInit {
*
*   private imagePath = '';
*   constructor(
*     private injector: Injector
*   ) { }
*
*   ngOnInit() {
*     let staticAssets = this.injector.get("StaticAssets");
*     // this gets the absoluete path to the file `icon.png` inside your plugin's root directory 
*     imagePath = staticAssets.GetAssetPath('icon.png');
*   }
* }
*/
/**
 * Gets an asset's absolute path based on the relative path.
 *
 * @function
 * @name StaticAssets#GetAssetPath
 * @param {String} relativePath The relative path to the file from your plugin's root directory.
 * 
 * @example
 * // Suppose `icon.png` is under the root directory of your plugin (same level as iridium.json). 
 * // This will return the absolute path to `icon.png` that your HTML can use as source
 * 
 * StaticAssets.GetAssetPath('icon.png');
 */