require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CameraInput":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.CameraInput = (function(superClass) {
  extend(CameraInput, superClass);

  function CameraInput(options) {
    this.options = options != null ? options : {};
    _.defaults(this.options, {
      ignoreEvents: false
    });
    CameraInput.__super__.constructor.call(this, this.options);
    this.changeHandler = function(event) {
      var file, url;
      if (this.options.callback) {
        file = this._element.files[0];
        url = URL.createObjectURL(file);
        return this.options.callback(url);
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    Events.wrap(this._element).addEventListener("change", this.changeHandler);
  }

  CameraInput.prototype._createElement = function() {
    if (this._element != null) {
      return;
    }
    this._element = document.createElement("input");
    this._element.type = "file";
    this._element.capture = true;
    this._element.classList.add("framerLayer");
    this._element.style["-webkit-appearance"] = "none";
    this._element.style["-webkit-text-size-adjust"] = "none";
    this._element.style["outline"] = "none";
    switch (this.options.accept) {
      case "image":
        return this._element.accept = "image/*";
      case "video":
        return this._element.accept = "video/*";
      default:
        return this._element.accept = "image/*,video/*";
    }
  };

  CameraInput.define("accept", {
    get: function() {
      return this._element.accept;
    },
    set: function(value) {
      switch (value) {
        case "image":
          return this._element.accept = "image/*";
        case "video":
          return this._element.accept = "video/*";
        default:
          return this._element.accept = "image/*,video/*";
      }
    }
  });

  return CameraInput;

})(TextLayer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3ZpYy9EZXZlbG9wbWVudC9mcmFtZXItY2FtZXJhLWlucHV0L2NhbWVyYS1pbnB1dC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL0NhbWVyYUlucHV0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZXhwb3J0cy5DYW1lcmFJbnB1dCBleHRlbmRzIFRleHRMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRpZ25vcmVFdmVudHM6IGZhbHNlXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSAtPlxuXHRcdFx0aWYoQG9wdGlvbnMuY2FsbGJhY2spXG5cdFx0XHRcdGZpbGUgPSBAX2VsZW1lbnQuZmlsZXNbMF1cblx0XHRcdFx0dXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuXHRcdFx0XHRAb3B0aW9ucy5jYWxsYmFjayh1cmwpXG5cblx0XHRAY2hhbmdlSGFuZGxlciA9IEBjaGFuZ2VIYW5kbGVyLmJpbmQgQFxuXHRcdEV2ZW50cy53cmFwKEBfZWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lciBcImNoYW5nZVwiLCBAY2hhbmdlSGFuZGxlclxuXG5cdF9jcmVhdGVFbGVtZW50OiAtPlxuXHRcdHJldHVybiBpZiBAX2VsZW1lbnQ/XG5cdFx0QF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImlucHV0XCJcblx0XHRAX2VsZW1lbnQudHlwZSA9IFwiZmlsZVwiXG5cdFx0QF9lbGVtZW50LmNhcHR1cmUgPSB0cnVlXG5cdFx0QF9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmcmFtZXJMYXllclwiKVxuXHRcdEBfZWxlbWVudC5zdHlsZVtcIi13ZWJraXQtYXBwZWFyYW5jZVwiXSA9IFwibm9uZVwiXG5cdFx0QF9lbGVtZW50LnN0eWxlW1wiLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0XCJdID0gXCJub25lXCJcblx0XHRAX2VsZW1lbnQuc3R5bGVbXCJvdXRsaW5lXCJdID0gXCJub25lXCJcblx0XHRzd2l0Y2ggQG9wdGlvbnMuYWNjZXB0XG5cdFx0XHR3aGVuIFwiaW1hZ2VcIiB0aGVuIEBfZWxlbWVudC5hY2NlcHQgPSBcImltYWdlLypcIlxuXHRcdFx0d2hlbiBcInZpZGVvXCIgdGhlbiBAX2VsZW1lbnQuYWNjZXB0ID0gXCJ2aWRlby8qXCJcblx0XHRcdGVsc2UgQF9lbGVtZW50LmFjY2VwdCA9IFwiaW1hZ2UvKix2aWRlby8qXCJcblxuXHRAZGVmaW5lIFwiYWNjZXB0XCIsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QF9lbGVtZW50LmFjY2VwdFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0c3dpdGNoIHZhbHVlXG5cdFx0XHRcdHdoZW4gXCJpbWFnZVwiIHRoZW4gQF9lbGVtZW50LmFjY2VwdCA9IFwiaW1hZ2UvKlwiXG5cdFx0XHRcdHdoZW4gXCJ2aWRlb1wiIHRoZW4gQF9lbGVtZW50LmFjY2VwdCA9IFwidmlkZW8vKlwiXG5cdFx0XHRcdGVsc2UgQF9lbGVtZW50LmFjY2VwdCA9IFwiaW1hZ2UvKix2aWRlby8qXCIiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBREFBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ0EscUJBQUMsT0FBRDtJQUFDLElBQUMsQ0FBQSw0QkFBRCxVQUFTO0lBQ3RCLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBQyxDQUFBLE9BQVosRUFDQztNQUFBLFlBQUEsRUFBYyxLQUFkO0tBREQ7SUFFQSw2Q0FBTSxJQUFDLENBQUEsT0FBUDtJQUVBLElBQUMsQ0FBQSxhQUFELEdBQWlCLFNBQUMsS0FBRDtBQUNoQixVQUFBO01BQUEsSUFBRyxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVo7UUFDQyxJQUFBLEdBQU8sSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsQ0FBQTtRQUN2QixHQUFBLEdBQU0sR0FBRyxDQUFDLGVBQUosQ0FBb0IsSUFBcEI7ZUFDTixJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsR0FBbEIsRUFIRDs7SUFEZ0I7SUFNakIsSUFBQyxDQUFBLGFBQUQsR0FBaUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLElBQXBCO0lBQ2pCLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBQyxDQUFBLFFBQWIsQ0FBc0IsQ0FBQyxnQkFBdkIsQ0FBd0MsUUFBeEMsRUFBa0QsSUFBQyxDQUFBLGFBQW5EO0VBWlk7O3dCQWNiLGNBQUEsR0FBZ0IsU0FBQTtJQUNmLElBQVUscUJBQVY7QUFBQSxhQUFBOztJQUNBLElBQUMsQ0FBQSxRQUFELEdBQVksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkI7SUFDWixJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsR0FBaUI7SUFDakIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxPQUFWLEdBQW9CO0lBQ3BCLElBQUMsQ0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQXBCLENBQXdCLGFBQXhCO0lBQ0EsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsb0JBQUEsQ0FBaEIsR0FBd0M7SUFDeEMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsMEJBQUEsQ0FBaEIsR0FBOEM7SUFDOUMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsU0FBQSxDQUFoQixHQUE2QjtBQUM3QixZQUFPLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBaEI7QUFBQSxXQUNNLE9BRE47ZUFDbUIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEdBQW1CO0FBRHRDLFdBRU0sT0FGTjtlQUVtQixJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsR0FBbUI7QUFGdEM7ZUFHTSxJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsR0FBbUI7QUFIekI7RUFUZTs7RUFjaEIsV0FBQyxDQUFBLE1BQUQsQ0FBUSxRQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUNKLElBQUMsQ0FBQSxRQUFRLENBQUM7SUFETixDQUFMO0lBRUEsR0FBQSxFQUFLLFNBQUMsS0FBRDtBQUNKLGNBQU8sS0FBUDtBQUFBLGFBQ00sT0FETjtpQkFDbUIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEdBQW1CO0FBRHRDLGFBRU0sT0FGTjtpQkFFbUIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEdBQW1CO0FBRnRDO2lCQUdNLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBVixHQUFtQjtBQUh6QjtJQURJLENBRkw7R0FERDs7OztHQTdCaUMifQ==
