export const GameEvent = {
  Start: 'start',
  End: 'end',
};

export class GameEventNotifier {
  static ws = null;
  static handlers = []; // Array to store handlers

  static initializeWebSocket() {
    if (!this.ws || this.ws.readyState === WebSocket.CLOSED) {
      this.ws = new WebSocket('ws://localhost:5173/ws');

      this.ws.onopen = () => console.log('WebSocket connection established.');
      this.ws.onerror = (error) => console.error('WebSocket error:', error);
      this.ws.onclose = () => {
        console.log('WebSocket connection closed. Retrying...');
        setTimeout(() => this.initializeWebSocket(), 1000);
      };

      this.ws.onmessage = (message) => {
        console.log("Raw WebSocket message:", message);
        try {
          console.log("In try block line 23");
          const event = JSON.parse(message.data);
          console.log("WebSocket message received:", event);
          this.notifyHandlers(event); // Notify all registered handlers
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
          console.error('Raw message data:', message.data);
        }
      };
    }
  }

  static addHandler(handler) {
    if (typeof handler === 'function') {
      this.handlers.push(handler);
    } else {
      console.warn('Handler must be a function');
    }
  }

  static removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  static notifyHandlers(event) {
    console.log('Notifying handlers with event:', event);
    this.handlers.forEach((handler) => handler(event));
  }

  static broadcastEvent(userName, event, data) {
    console.log("in broadcastevent");
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.log("in event and ws is open:");
      const payload = JSON.stringify({ userName, event, data });
      console.log("Broadcasting payload:", payload);
      this.ws.send(payload);
    } else {
      console.warn('WebSocket is not open. Event not sent:', event);
    }
  }
}


// Initialize WebSocket connection when the module is imported
GameEventNotifier.initializeWebSocket();