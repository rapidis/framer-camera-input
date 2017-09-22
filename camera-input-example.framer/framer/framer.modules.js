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
        return this.options.callback(url, file.type);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3ZpYy9EZXZlbG9wbWVudC9mcmFtZXItY2FtZXJhLWlucHV0L2NhbWVyYS1pbnB1dC1leGFtcGxlLmZyYW1lci9tb2R1bGVzL0NhbWVyYUlucHV0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZXhwb3J0cy5DYW1lcmFJbnB1dCBleHRlbmRzIFRleHRMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRpZ25vcmVFdmVudHM6IGZhbHNlXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSAtPlxuXHRcdFx0aWYoQG9wdGlvbnMuY2FsbGJhY2spXG5cdFx0XHRcdGZpbGUgPSBAX2VsZW1lbnQuZmlsZXNbMF1cblx0XHRcdFx0dXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuXHRcdFx0XHRAb3B0aW9ucy5jYWxsYmFjayh1cmwsIGZpbGUudHlwZSlcblxuXHRcdEBjaGFuZ2VIYW5kbGVyID0gQGNoYW5nZUhhbmRsZXIuYmluZCBAXG5cdFx0RXZlbnRzLndyYXAoQF9lbGVtZW50KS5hZGRFdmVudExpc3RlbmVyIFwiY2hhbmdlXCIsIEBjaGFuZ2VIYW5kbGVyXG5cblx0X2NyZWF0ZUVsZW1lbnQ6IC0+XG5cdFx0cmV0dXJuIGlmIEBfZWxlbWVudD9cblx0XHRAX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXHRcdEBfZWxlbWVudC50eXBlID0gXCJmaWxlXCJcblx0XHRAX2VsZW1lbnQuY2FwdHVyZSA9IHRydWVcblx0XHRAX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZyYW1lckxheWVyXCIpXG5cdFx0QF9lbGVtZW50LnN0eWxlW1wiLXdlYmtpdC1hcHBlYXJhbmNlXCJdID0gXCJub25lXCJcblx0XHRAX2VsZW1lbnQuc3R5bGVbXCItd2Via2l0LXRleHQtc2l6ZS1hZGp1c3RcIl0gPSBcIm5vbmVcIlxuXHRcdEBfZWxlbWVudC5zdHlsZVtcIm91dGxpbmVcIl0gPSBcIm5vbmVcIlxuXHRcdHN3aXRjaCBAb3B0aW9ucy5hY2NlcHRcblx0XHRcdHdoZW4gXCJpbWFnZVwiIHRoZW4gQF9lbGVtZW50LmFjY2VwdCA9IFwiaW1hZ2UvKlwiXG5cdFx0XHR3aGVuIFwidmlkZW9cIiB0aGVuIEBfZWxlbWVudC5hY2NlcHQgPSBcInZpZGVvLypcIlxuXHRcdFx0ZWxzZSBAX2VsZW1lbnQuYWNjZXB0ID0gXCJpbWFnZS8qLHZpZGVvLypcIlxuXG5cdEBkZWZpbmUgXCJhY2NlcHRcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAX2VsZW1lbnQuYWNjZXB0XG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdFx0d2hlbiBcImltYWdlXCIgdGhlbiBAX2VsZW1lbnQuYWNjZXB0ID0gXCJpbWFnZS8qXCJcblx0XHRcdFx0d2hlbiBcInZpZGVvXCIgdGhlbiBAX2VsZW1lbnQuYWNjZXB0ID0gXCJ2aWRlby8qXCJcblx0XHRcdFx0ZWxzZSBAX2VsZW1lbnQuYWNjZXB0ID0gXCJpbWFnZS8qLHZpZGVvLypcIiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQUEsSUFBQTs7O0FBQU0sT0FBTyxDQUFDOzs7RUFDQSxxQkFBQyxPQUFEO0lBQUMsSUFBQyxDQUFBLDRCQUFELFVBQVM7SUFDdEIsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFDLENBQUEsT0FBWixFQUNDO01BQUEsWUFBQSxFQUFjLEtBQWQ7S0FERDtJQUVBLDZDQUFNLElBQUMsQ0FBQSxPQUFQO0lBRUEsSUFBQyxDQUFBLGFBQUQsR0FBaUIsU0FBQyxLQUFEO0FBQ2hCLFVBQUE7TUFBQSxJQUFHLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBWjtRQUNDLElBQUEsR0FBTyxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQU0sQ0FBQSxDQUFBO1FBQ3ZCLEdBQUEsR0FBTSxHQUFHLENBQUMsZUFBSixDQUFvQixJQUFwQjtlQUNOLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixHQUFsQixFQUF1QixJQUFJLENBQUMsSUFBNUIsRUFIRDs7SUFEZ0I7SUFNakIsSUFBQyxDQUFBLGFBQUQsR0FBaUIsSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLElBQXBCO0lBQ2pCLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBQyxDQUFBLFFBQWIsQ0FBc0IsQ0FBQyxnQkFBdkIsQ0FBd0MsUUFBeEMsRUFBa0QsSUFBQyxDQUFBLGFBQW5EO0VBWlk7O3dCQWNiLGNBQUEsR0FBZ0IsU0FBQTtJQUNmLElBQVUscUJBQVY7QUFBQSxhQUFBOztJQUNBLElBQUMsQ0FBQSxRQUFELEdBQVksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkI7SUFDWixJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsR0FBaUI7SUFDakIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxPQUFWLEdBQW9CO0lBQ3BCLElBQUMsQ0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQXBCLENBQXdCLGFBQXhCO0lBQ0EsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsb0JBQUEsQ0FBaEIsR0FBd0M7SUFDeEMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsMEJBQUEsQ0FBaEIsR0FBOEM7SUFDOUMsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFNLENBQUEsU0FBQSxDQUFoQixHQUE2QjtBQUM3QixZQUFPLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBaEI7QUFBQSxXQUNNLE9BRE47ZUFDbUIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEdBQW1CO0FBRHRDLFdBRU0sT0FGTjtlQUVtQixJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsR0FBbUI7QUFGdEM7ZUFHTSxJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsR0FBbUI7QUFIekI7RUFUZTs7RUFjaEIsV0FBQyxDQUFBLE1BQUQsQ0FBUSxRQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUNKLElBQUMsQ0FBQSxRQUFRLENBQUM7SUFETixDQUFMO0lBRUEsR0FBQSxFQUFLLFNBQUMsS0FBRDtBQUNKLGNBQU8sS0FBUDtBQUFBLGFBQ00sT0FETjtpQkFDbUIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEdBQW1CO0FBRHRDLGFBRU0sT0FGTjtpQkFFbUIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEdBQW1CO0FBRnRDO2lCQUdNLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBVixHQUFtQjtBQUh6QjtJQURJLENBRkw7R0FERDs7OztHQTdCaUMifQ==
