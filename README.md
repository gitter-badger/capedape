# CapedApe
A simple GUI friend for your everyday Wordpress Theme creation workflow

# What does CapedApe do?
It can 

1. Bundle CSS/JS
2. Create/Remove/Modify Custom Post Type
 1. Also Metabox
3. Can add Content Component Builder.

> "It's so messy"

# Get Started

Prerequisites: 
- Node.js^v4
- SASS

If you haven't used Node.js, https://nodejs.org[https://nodejs.org] will be a good place to start.
If you haven't used SASS, http://sass-lang.com/[http://sass-lang.com/] will be a good place to start.


1. Go to NWjs.io[http://nwjs.io/] and download SDK for your OS, you haven't already.

2. package.json

    >  "scripts": {
    "start": "[/Path/To/Your/nw] . | sass --watch sass/main.scss:css/main.css"
  }

    My case, I'm running it on OS X.

    > "scripts": {
    "start": "~/desktop/nwjs-sdk-v0.14.3-osx-x64/nwjs.app/Contents/MacOS/nwjs . | sass --watch sass/main.scss:css/main.css"
  }

3. Run via NPM and build.

    > $ npm start

