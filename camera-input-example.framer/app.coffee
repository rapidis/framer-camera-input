{ CameraInput } = require "CameraInput"

Photo.states =
	"pressed":
		y: 154
	"normal":
		y: 150
Photo.animationOptions = 
	time: 0.25

PhotoOverlay = new Layer
	parent: Photo
	borderRadius: 100
	backgroundColor: "#000000"
	opacity: 0
	rotation: 90
	animationOptions: 
		time: 0.25

PhotoOverlay.states = 
	"loaded":
		opacity: 0.9
	"normal":
		opacity: 0

Button = new CameraInput
	width: 200
	height: 200
	borderRadius: 100
	opacity: 0
	parent: Photo
	callback: (url) -> 
		PhotoOverlay.image = url
		PhotoOverlay.animate("loaded")

Button.onMouseDown (event) ->
	Photo.animate("pressed")

Button.onMouseUp (event) ->
	Photo.animate("normal")
