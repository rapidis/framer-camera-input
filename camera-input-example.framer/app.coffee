{ CameraInput } = require "CameraInput"

getVideoDimensions = (url, callback) ->
	video = document.createElement("video")
	video.style.opacity = 0
	video.autoplay = true
	video.oncanplay = () ->
		callback(this.offsetWidth, this.offsetHeight)
		this.src="about:blank"
		document.body.removeChild(video)
	document.body.appendChild(video)
	video.src = url

Photo.clip = true
Photo.states =
	"pressed":
		y: 154
	"normal":
		y: 150
Photo.animationOptions = 
	time: 0.25

PhotoOverlay = new Layer
	parent: Photo
	width: 200
	height: 200
	backgroundColor: "rgba(0,0,0,0)"
	opacity: 0
	rotation: 90
	animationOptions: 
		time: 0.25

PhotoOverlay.states = 
	"loaded":
		opacity: 0.9
	"normal":
		opacity: 0
		
VideoOverlay = new VideoLayer
	parent: Photo
	width: 200
	height: 200
	backgroundColor: "rgba(0,0,0,0)"
	opacity: 0
	animationOptions: 
		time: 0.25

Button = new CameraInput
	width: 200
	height: 200
	borderRadius: 100
	opacity: 0
	parent: Photo
	callback: (url, type) -> 
		if(type.includes("image"))
			Photo.animate("normal")
			VideoOverlay.video = null
			VideoOverlay.opacity = 0
			PhotoOverlay.image = url
			PhotoOverlay.animate("loaded")
			
		else if(type.includes("video"))
			PhotoOverlay.animate("normal")
			resizeHandler = (w, h) ->
				VideoOverlay.video = url
				VideoOverlay.player.loop = true
				VideoOverlay.player.play()
				VideoOverlay.animate
					opacity: 0.9
					width: 200
					height: 200 * h / w

			getVideoDimensions(url, resizeHandler)		

Button.onMouseDown (event) ->
	Photo.animate("pressed")

Button.onMouseUp (event) ->
	Photo.animate("normal")
	
