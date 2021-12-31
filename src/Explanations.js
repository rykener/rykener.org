import data from "./explanations.json";

function Explanations() {
  return (
    <div class="medium-content">
      <h1>explanations</h1>
      <p>WORK IN PROGRESS</p>
      {data.data.map( (panel, index) => (
        <Panel
          title={panel.title} img={panel.img} text={panel.text}/>
      ))}
    </div>
  );
}

const Panel = (props) => {
  return (
    <div style={{padding: "2em 0"}}>
      <h2>{props.title}</h2>
      <img src={`/smallest/${props.img}.png`} alt=""/>
      <p>{props.text}</p>
    </div>
  )
}

export default Explanations;
