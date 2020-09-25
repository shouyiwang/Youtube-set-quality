# Set YouTube Quality
## Introduction

From MacOs Big Sur beta 4, Safari finally supports VP9 playback, which means we can now play up to 8K videos using Safari. If your Mac was bought in 2017 or later, it probably supports VP9 hardware decoding, which uses minimum CPU resource. 

However, YouTube always tries to stream low quality videos, even if your bandwidth is very high. Especially during the pandemic, the auto video quality is unbearable. I have to set the video quality manually every time. When using chrome, there are many extension which can be used to set YouTube's video quality, but none exists in Safari.

This script can disable YouTube's auto quality feature, and set your preferred video quality.

This script is tested in Safari 14 under MacOs Big Sur, however, as the script is pretty basic, it should work in older Safaris or other browsers as well.

## How to use it
1. Install Userscripts, it is a Safari extention.
https://apps.apple.com/us/app/userscripts/id1463298887?mt=12
2. Create a new Javascript file in Userscripts, empty it, then copy the code from YouTube.js into it.

Then it should work now.
