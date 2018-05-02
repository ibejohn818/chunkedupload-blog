'use strict'

/* Constructor */
function ChunkedUpload(file, config, events) {

  if (config === undefined) {
    config = {}
  }
  if (events === undefined) {
    events = {}
  }

  this.xhr = null
  this.status = 'pending'
  this.session = null
  this.file = null
  this.bytesSent = 0
  this.chunksCompleted = 0

  this.conf = $.extend({
      'chunkSize': (Math.pow(1000, 2) * .5)
      'initUrl': null,
      'uploadUrl': null,
      'completeUrl': null
  }, conf)

  this.events = $.extend({
      'start': function() {},
      'init': function () {},
      'chunkComplete': function () {},
      'progress': function() {},
      'cancel': function () {},
      'pause': function() {},
      'error': function() {},
      'complete': function() {},
      'success': function () {}
  }, events)


}

/* start upload */
ChunkedUpload.prototype.upload = function() {

}

/* initialize upload session w/server */
ChunkedUpload.prototype._initUpload = function() {
}

ChunkedUpload.prototype._ajax = function() {

}

ChunkedUpload.prototype.on = function(event, func) {
    this.conf[event] = func
    return this
}
ChunkedUpload.prototype.on = function() {

}
ChunkedUpload.prototype.on = function() {

}
