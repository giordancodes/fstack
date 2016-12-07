import React from 'react';

const Timer = (props) => <section className="timer">
        <code>
          timer started almost precisely <code>{ props.elapsed }</code> seconds ago.
        </code>
      </section>;

export default Timer;