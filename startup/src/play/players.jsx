import React from 'react';
import { GameEvent, GameEventNotifier } from './gameNotifier'; // Use your updated GameNotifier

export function Players(props) {
  const userName = props.userName; // Pass userName from props
  const [events, setEvents] = React.useState([]); // State to track events

  // Subscribe to GameEventNotifier
  React.useEffect(() => {
    const handleGameEvent = (event) => {
      console.log("Handling game event in Players:", event);
      setEvents((prevEvents) => [...prevEvents, event]); // Update events list
    };

    GameEventNotifier.addHandler(handleGameEvent);

    console.log('GameEventNotifier:', GameEventNotifier);
    console.log('GameEventNotifier.addHandler:', GameEventNotifier.addHandler);

    return () => {
      GameEventNotifier.removeHandler(handleGameEvent); // Clean up on unmount
    };
  }, []);

  // Create an array of message components to render
  function createMessageArray() {
    console.log("rendering events");
    return events.map((event, i) => {
      let message = 'unknown';
      if (event.event === GameEvent.End) {
        message = `scored ${event.data.score}`;
      } else if (event.event === GameEvent.Start) {
        message = `started a new game`;
        console.log("new game started");
      } else if (event.event === GameEvent.System) {
        message = event.data.msg;
      }

      return (
        <div key={i} className="event">
          <span className="player-event">{event.userName}</span> {message}
        </div>
      );
    });
  }

  // Render the Players component
  return (
    <div className="players">
      <h2>Player Updates</h2>
      <span className="player-name">Player: {userName}</span>
      <div id="player-messages">{createMessageArray()}</div>
    </div>
  );
}
