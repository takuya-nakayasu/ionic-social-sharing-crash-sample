Title:


The `files` parameter type of `shareWithOptions` method in social-sharing should be only `string[]`


**I'm submitting a ...**  (check one with "x")
[x] bug report
[ ] feature request
[ ] support request => Please do not submit support requests here, use one of these channels: https://forum.ionicframework.com/ or https://ionicworldwide.herokuapp.com/

**Current behavior:**
<!-- Describe how the bug manifests. -->

The type definition of the `shareWithOptions` method defines `files?: string | string[]`, but passing `string` data to the `files` parameter causes a crash on iOS.

The exception that occur on iOS:

```
'NSInvalidArgumentException', reason: '-[__NSCFString count]: unrecognized selector sent to instance 0x600000c9ecb0'
```

The above exception is occurring in [`filenames.count` of the social-sharing plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/src/ios/SocialSharing.m#L98)

Example code that raises an exception:

```TypeScript
// exception occurs
this.socialSharing.shareWithOptions({ files: 'filePath' });
```

Code example where exception does not occur:

```TypeScript
// exception does not occur
this.socialSharing.shareWithOptions({ files: ['filePath'] });
```


**Expected behavior:**
<!-- Describe what the behavior would be without the bug. -->
The `files` parameter type of `shareWithOptions` method should be only `string[]`.

iOS crash does not occur if the `files` parameter is of type `string []`.


Also, as far as I read the [README.md of the social-sharing plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#using-the-share-sheet), it seems that the `files` parameter type only assumes `string[]`.

**Steps to reproduce:**
<!-- If you are able to illustrate the bug or feature request with an example, please provide steps to reproduce. -->

[A link to a minimal reproduction of the bug](https://github.com/takuya-nakayasu/ionic-social-sharing-crash-sample)

1. Build the Ionic project linked above on iOS
2. Run on iOS simulators or devices
3. Press the button whose label is `Crash`

![reproduce gif](https://user-images.githubusercontent.com/10209574/150665717-fc410854-5c80-4b9b-99af-a48ce200e31f.gif)

**Related code:**

```TypeScript
  /**
   * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
   *
   * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
   * @param options.message
   * @param options.subject
   * @param options.files
   * @param options.url
   * @param options.chooserTitle
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS', 'Android'],
  })
  shareWithOptions(options: {
    message?: string;
    subject?: string;
    files?: string | string[];
    url?: string;
    chooserTitle?: string;
  }): Promise<any> {
    return;
  }
```

**Other information:**
<!-- List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc. -->

Suggestions on how to fix:

```
diff --git a/src/@awesome-cordova-plugins/plugins/social-sharing/index.ts b/src/@awesome-cordova-plugins/plugins/social-sharing/index.ts
index b475458b..db026206 100644
--- a/src/@awesome-cordova-plugins/plugins/social-sharing/index.ts
+++ b/src/@awesome-cordova-plugins/plugins/social-sharing/index.ts
@@ -74,7 +74,7 @@ export class SocialSharing extends AwesomeCordovaNativePlugin {
   shareWithOptions(options: {
     message?: string;
     subject?: string;
-    files?: string | string[];
+    files?: string[];
     url?: string;
```

I will make a PR from now on.

**Ionic info:** (run `ionic info` from a terminal/cmd prompt and paste output below):

```
Ionic:

   Ionic CLI                     : 6.18.1 (/Users/nakayasutakuya/.nvm/versions/node/v16.13.2/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 6.0.2
   @angular-devkit/build-angular : 13.0.4
   @angular-devkit/schematics    : 13.0.4
   @angular/cli                  : 13.0.4
   @ionic/angular-toolkit        : 5.0.3

Cordova:

   Cordova CLI       : 11.0.0
   Cordova Platforms : android 10.1.1, ios 6.2.0
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 6 other plugins)

Utility:

   cordova-res : not installed globally
   native-run  : not installed globally

System:

   ios-deploy : 1.11.4
   ios-sim    : 8.0.2
   NodeJS     : v16.13.2 (/Users/nakayasutakuya/.nvm/versions/node/v16.13.2/bin/node)
   npm        : 8.3.1
   OS         : macOS Monterey
   Xcode      : Xcode 13.2.1 Build version 13C100
```