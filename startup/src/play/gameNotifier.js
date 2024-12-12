export const GameEvent = {
  Start: 'start',
  End: 'end',
};

export class GameEventNotifier {
  static ws = null;

  static initializeWebSocket() {
    if (!this.ws || this.ws.readyState === WebSocket.CLOSED) {
      this.ws = new WebSocket('ws://localhost:4000/ws');

      this.ws.onopen = () => {
        console.log('WebSocket connection established.');
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      this.ws.onclose = () => {
        console.log('WebSocket connection closed. Retrying...');
        setTimeout(() => this.initializeWebSocket(), 1000);
      };
    }
  }

  static broadcastEvent(userName, event, data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const payload = JSON.stringify({ userName, event, data });
      this.ws.send(payload);
      console.log(payload);
    } else {
      console.warn('WebSocket is not open. Event not sent:', event);
    }
  }
}

// Initialize WebSocket connection when the module is imported
GameEventNotifier.initializeWebSocket();
