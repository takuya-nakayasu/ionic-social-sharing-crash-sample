Title:


The `files` parameter type of `shareWithOptions` method in `@awesome-cordova-plugins/social-sharing` should be only `string[]`


**I'm submitting a ...**  (check one with "x")
[x] bug report
[ ] feature request
[ ] support request => Please do not submit support requests here, use one of these channels: https://forum.ionicframework.com/ or https://ionicworldwide.herokuapp.com/

**Current behavior:**
<!-- Describe how the bug manifests. -->

The type definition of the `shareWithOptions` method defines `files?: string | string[]`, but passing string data to the `files` parameter causes a crash on iOS.

**Expected behavior:**
<!-- Describe what the behavior would be without the bug. -->

**Steps to reproduce:**
<!-- If you are able to illustrate the bug or feature request with an example, please provide steps to reproduce. -->

**Related code:**

```
insert any relevant code here
```

**Other information:**
<!-- List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc. -->

**Ionic info:** (run `ionic info` from a terminal/cmd prompt and paste output below):

```
insert the output from ionic info here
```