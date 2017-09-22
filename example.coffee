Photo = new Layer
	width: 200
	height: 200
	rotation: 90

Video = new VideoLayer
	width: 200
	height: 200

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
			Photo.image = url
		else if(type.includes("video"))
			Video.video = url
			Video.player.play()