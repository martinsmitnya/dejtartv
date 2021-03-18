import './Hirdetes.css'

function Hirdetes(props) {
  let source = 'https://docs.google.com/document/d/e/2PACX-1vSZUttIUpN-HXQOru310Pupkc5EmXAz6dTqXou4DTQqOcjlGHBr7m9yfgIxQPcRPQ9Hugh8pLnyRNnS/pub?embedded=true'
  return (
    <div className='hirdetesWrapper'>
      <h1 className='hirdetesTitle'>Hirdetés</h1>
      <iframe className='embededDocument' src={source}></iframe>
    </div>
  );
}

export default Hirdetes;