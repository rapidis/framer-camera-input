# Framer Camera Input Module

## Introduction
HTML Media Capture has started been adopted by major browsers and mobile browsers. Media Capture allows an input to trigger a request for file system or camera access. Using this module, you no longer need to insert fake video to mimic camera actions.

## Usage
Here is a example about how to use the module:

```javascript

// Image Only
TakePhotoButton = new CameraInput
	width: 200
	height: 200
	opacity: 0
	accept: "image"
	parent: Photo
	callback: (url, type) -> 
		Photo.image = url

// Image and Video
TakeMediaButton = new CameraInput
	width: 200
	height: 200
	opacity: 0
	parent: Photo
	callback: (url, type) -> 
		if(type.includes("image"))
			ImageLayer.image = url
		else if(type.includes("video"))
			VideoLayer.video = url

```
## Compatibility
Currently, the module supports:
- Photo via iPhone camera, iOS 11
- Image file via desktop browser, Chrome


<a href='https://open.framermodules.com/<MODULE NAME>'>
    <img alt='Install with Framer Modules'
    src='https://www.framermodules.com/assets/badge@2x.png' width='160' height='40' />
</a>
