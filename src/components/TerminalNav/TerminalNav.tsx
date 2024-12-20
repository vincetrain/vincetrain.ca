import "./TerminalNav.css"

function TerminalNav({ commands }) {
  
  const output = [];

  // populate output lines
  for (let i = 0; i < commands.lines.length; i++) {
    // get the i'th line we're working with right now
    const lineObject = commands.lines[i];
    const isNav = lineObject.isNav;
    const resultItems = [];
    // get the results of the i'th line
    for (let j = 0; j < lineObject.result.length; j++) {
      if (isNav) {  // if we specify that this result is acting as a nav bar, use anchor tags. always store inside of resultItems
        resultItems[j] = (
          <li key={j}>
            <a href={lineObject.result[j].href}>{lineObject.result[j].item}</a>
          </li>
        )
      }
      else {
        resultItems[j] = <li key={j}>{lineObject.result[j].item}</li>
      }
    }
    // populate results with result items
    const result = <ul className="result flex gap-4">{resultItems}</ul>
    
    // structure lines
    const line = (
      <div className="line" key={i}>
        <div className="action">
          <p className="userhost inline-block">{lineObject.user}@{lineObject.host}</p>
          <p className="inline-block">:</p>
          <p className="dir inline-block">{lineObject.dir}</p>
          <p className="inline-block">{commands.isRoot ? "#" : "$"}&nbsp;</p>
          <p className="inline-block">{lineObject.command}</p>
        </div>
        {result}
      </div>
    );
    output[i] = line;
  }

  return (
    <div className="terminal">
      {output}
    </div>
  )
}

export default TerminalNav