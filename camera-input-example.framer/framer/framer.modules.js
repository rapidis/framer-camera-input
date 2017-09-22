require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CameraInput":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.CameraInput = (function(superClass) {
  extend(CameraInput, superClass);

  function CameraInput(options) {
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      ignoreEvents: false
    });
    CameraInput.__super__.constructor.call(this, options);
    this.changeHandler = function(event) {
      var file, url;
      if (options.callback) {
        file = this._element.files[0];
        url = URL.createObjectURL(file);
        return options.callback(url);
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
    this._element.accept = "image/*";
    this._element.capture = true;
    this._element.classList.add("framerLayer");
    this._element.style["-webkit-appearance"] = "none";
    this._element.style["-webkit-text-size-adjust"] = "none";
    return this._element.style["outline"] = "none";
  };

  CameraInput.define("value", {
    set: function(value) {
      return this._element.value = value;
    }
  });

  return CameraInput;

})(TextLayer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3ZpYy9EZXZlbG9wbWVudC9mcmFtZXItY2FtZXJhLWlucHV0L2NhbWVyYS1pbnB1dC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL0NhbWVyYUlucHV0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZXhwb3J0cy5DYW1lcmFJbnB1dCBleHRlbmRzIFRleHRMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0Xy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0aWdub3JlRXZlbnRzOiBmYWxzZVxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdEBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSAtPlxuXHRcdFx0aWYob3B0aW9ucy5jYWxsYmFjaylcblx0XHRcdFx0ZmlsZSA9IEBfZWxlbWVudC5maWxlc1swXVxuXHRcdFx0XHR1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG5cdFx0XHRcdG9wdGlvbnMuY2FsbGJhY2sodXJsKVxuXG5cdFx0QGNoYW5nZUhhbmRsZXIgPSBAY2hhbmdlSGFuZGxlci5iaW5kIEBcblx0XHRFdmVudHMud3JhcChAX2VsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIgXCJjaGFuZ2VcIiwgQGNoYW5nZUhhbmRsZXJcblxuXHRfY3JlYXRlRWxlbWVudDogLT5cblx0XHRyZXR1cm4gaWYgQF9lbGVtZW50P1xuXHRcdEBfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJpbnB1dFwiXG5cdFx0QF9lbGVtZW50LnR5cGUgPSBcImZpbGVcIlxuXHRcdEBfZWxlbWVudC5hY2NlcHQgPSBcImltYWdlLypcIlxuXHRcdEBfZWxlbWVudC5jYXB0dXJlID0gdHJ1ZVxuXHRcdEBfZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZnJhbWVyTGF5ZXJcIilcblx0XHRAX2VsZW1lbnQuc3R5bGVbXCItd2Via2l0LWFwcGVhcmFuY2VcIl0gPSBcIm5vbmVcIlxuXHRcdEBfZWxlbWVudC5zdHlsZVtcIi13ZWJraXQtdGV4dC1zaXplLWFkanVzdFwiXSA9IFwibm9uZVwiXG5cdFx0QF9lbGVtZW50LnN0eWxlW1wib3V0bGluZVwiXSA9IFwibm9uZVwiXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX2VsZW1lbnQudmFsdWUgPSB2YWx1ZVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURBQSxJQUFBOzs7QUFBTSxPQUFPLENBQUM7OztFQUNBLHFCQUFDLE9BQUQ7O01BQUMsVUFBUTs7SUFDckIsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ0M7TUFBQSxZQUFBLEVBQWMsS0FBZDtLQUREO0lBRUEsNkNBQU0sT0FBTjtJQUVBLElBQUMsQ0FBQSxhQUFELEdBQWlCLFNBQUMsS0FBRDtBQUNoQixVQUFBO01BQUEsSUFBRyxPQUFPLENBQUMsUUFBWDtRQUNDLElBQUEsR0FBTyxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQU0sQ0FBQSxDQUFBO1FBQ3ZCLEdBQUEsR0FBTSxHQUFHLENBQUMsZUFBSixDQUFvQixJQUFwQjtlQUNOLE9BQU8sQ0FBQyxRQUFSLENBQWlCLEdBQWpCLEVBSEQ7O0lBRGdCO0lBTWpCLElBQUMsQ0FBQSxhQUFELEdBQWlCLElBQUMsQ0FBQSxhQUFhLENBQUMsSUFBZixDQUFvQixJQUFwQjtJQUNqQixNQUFNLENBQUMsSUFBUCxDQUFZLElBQUMsQ0FBQSxRQUFiLENBQXNCLENBQUMsZ0JBQXZCLENBQXdDLFFBQXhDLEVBQWtELElBQUMsQ0FBQSxhQUFuRDtFQVpZOzt3QkFjYixjQUFBLEdBQWdCLFNBQUE7SUFDZixJQUFVLHFCQUFWO0FBQUEsYUFBQTs7SUFDQSxJQUFDLENBQUEsUUFBRCxHQUFZLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ1osSUFBQyxDQUFBLFFBQVEsQ0FBQyxJQUFWLEdBQWlCO0lBQ2pCLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBVixHQUFtQjtJQUNuQixJQUFDLENBQUEsUUFBUSxDQUFDLE9BQVYsR0FBb0I7SUFDcEIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEI7SUFDQSxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQU0sQ0FBQSxvQkFBQSxDQUFoQixHQUF3QztJQUN4QyxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQU0sQ0FBQSwwQkFBQSxDQUFoQixHQUE4QztXQUM5QyxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQU0sQ0FBQSxTQUFBLENBQWhCLEdBQTZCO0VBVGQ7O0VBV2hCLFdBQUMsQ0FBQSxNQUFELENBQVEsT0FBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUMsS0FBRDthQUNKLElBQUMsQ0FBQSxRQUFRLENBQUMsS0FBVixHQUFrQjtJQURkLENBQUw7R0FERDs7OztHQTFCaUMifQ==
