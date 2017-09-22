Photo = new Layer
	width: 200
	height: 200
	borderRadius: 100
	rotation: 90

Button = new CameraInput
	width: 200
	height: 200
	borderRadius: 100
	opacity: 0
	parent: Photo
	callback: (url) -> 
		Photo.image = url