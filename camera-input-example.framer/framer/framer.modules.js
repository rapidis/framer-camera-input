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


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3ZpYy9EZXZlbG9wbWVudC9mcmFtZXItY2FtZXJhLWlucHV0L2NhbWVyYS1pbnB1dC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3ZpYy9EZXZlbG9wbWVudC9mcmFtZXItY2FtZXJhLWlucHV0L2NhbWVyYS1pbnB1dC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL0NhbWVyYUlucHV0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsImNsYXNzIGV4cG9ydHMuQ2FtZXJhSW5wdXQgZXh0ZW5kcyBUZXh0TGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdGlnbm9yZUV2ZW50czogZmFsc2Vcblx0XHRzdXBlciBvcHRpb25zXG5cblx0XHRAY2hhbmdlSGFuZGxlciA9IChldmVudCkgLT5cblx0XHRcdGlmKG9wdGlvbnMuY2FsbGJhY2spXG5cdFx0XHRcdGZpbGUgPSBAX2VsZW1lbnQuZmlsZXNbMF1cblx0XHRcdFx0dXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuXHRcdFx0XHRvcHRpb25zLmNhbGxiYWNrKHVybClcblxuXHRcdEBjaGFuZ2VIYW5kbGVyID0gQGNoYW5nZUhhbmRsZXIuYmluZCBAXG5cdFx0RXZlbnRzLndyYXAoQF9lbGVtZW50KS5hZGRFdmVudExpc3RlbmVyIFwiY2hhbmdlXCIsIEBjaGFuZ2VIYW5kbGVyXG5cblx0X2NyZWF0ZUVsZW1lbnQ6IC0+XG5cdFx0cmV0dXJuIGlmIEBfZWxlbWVudD9cblx0XHRAX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXHRcdEBfZWxlbWVudC50eXBlID0gXCJmaWxlXCJcblx0XHRAX2VsZW1lbnQuYWNjZXB0ID0gXCJpbWFnZS8qXCJcblx0XHRAX2VsZW1lbnQuY2FwdHVyZSA9IHRydWVcblx0XHRAX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZyYW1lckxheWVyXCIpXG5cdFx0QF9lbGVtZW50LnN0eWxlW1wiLXdlYmtpdC1hcHBlYXJhbmNlXCJdID0gXCJub25lXCJcblx0XHRAX2VsZW1lbnQuc3R5bGVbXCItd2Via2l0LXRleHQtc2l6ZS1hZGp1c3RcIl0gPSBcIm5vbmVcIlxuXHRcdEBfZWxlbWVudC5zdHlsZVtcIm91dGxpbmVcIl0gPSBcIm5vbmVcIlxuXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9lbGVtZW50LnZhbHVlID0gdmFsdWVcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEQUEsSUFBQTs7O0FBQU0sT0FBTyxDQUFDOzs7RUFDQSxxQkFBQyxPQUFEOztNQUFDLFVBQVE7O0lBQ3JCLENBQUMsQ0FBQyxRQUFGLENBQVcsT0FBWCxFQUNDO01BQUEsWUFBQSxFQUFjLEtBQWQ7S0FERDtJQUVBLDZDQUFNLE9BQU47SUFFQSxJQUFDLENBQUEsYUFBRCxHQUFpQixTQUFDLEtBQUQ7QUFDaEIsVUFBQTtNQUFBLElBQUcsT0FBTyxDQUFDLFFBQVg7UUFDQyxJQUFBLEdBQU8sSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsQ0FBQTtRQUN2QixHQUFBLEdBQU0sR0FBRyxDQUFDLGVBQUosQ0FBb0IsSUFBcEI7ZUFDTixPQUFPLENBQUMsUUFBUixDQUFpQixHQUFqQixFQUhEOztJQURnQjtJQU1qQixJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFDLENBQUEsYUFBYSxDQUFDLElBQWYsQ0FBb0IsSUFBcEI7SUFDakIsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFDLENBQUEsUUFBYixDQUFzQixDQUFDLGdCQUF2QixDQUF3QyxRQUF4QyxFQUFrRCxJQUFDLENBQUEsYUFBbkQ7RUFaWTs7d0JBY2IsY0FBQSxHQUFnQixTQUFBO0lBQ2YsSUFBVSxxQkFBVjtBQUFBLGFBQUE7O0lBQ0EsSUFBQyxDQUFBLFFBQUQsR0FBWSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtJQUNaLElBQUMsQ0FBQSxRQUFRLENBQUMsSUFBVixHQUFpQjtJQUNqQixJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsR0FBbUI7SUFDbkIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxPQUFWLEdBQW9CO0lBQ3BCLElBQUMsQ0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQXBCLENBQXdCLGFBQXhCO0lBQ0EsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsb0JBQUEsQ0FBaEIsR0FBd0M7SUFDeEMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsMEJBQUEsQ0FBaEIsR0FBOEM7V0FDOUMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsU0FBQSxDQUFoQixHQUE2QjtFQVRkOztFQVdoQixXQUFDLENBQUEsTUFBRCxDQUFRLE9BQVIsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7YUFDSixJQUFDLENBQUEsUUFBUSxDQUFDLEtBQVYsR0FBa0I7SUFEZCxDQUFMO0dBREQ7Ozs7R0ExQmlDOzs7O0FESWxDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAifQ==
