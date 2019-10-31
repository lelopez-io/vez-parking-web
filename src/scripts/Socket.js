import Vue from 'vue'

const protocol = document.location.protocol.startsWith('https')
  ? 'wss://'
  : 'ws://'
const webSocket = new WebSocket(protocol + 'vez-websocket.herokuapp.com:11614')

const emitter = new Vue({
  methods: {
    send(message) {
      if (1 === webSocket.readyState) webSocket.send(message)
    }
  }
})

webSocket.onmessage = function(msg) {
  emitter.$emit('message', msg.data)
}
webSocket.onerror = function(err) {
  emitter.$emit('error', err)
}

export default emitter
