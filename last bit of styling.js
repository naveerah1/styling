import ProfileCard from './ProfileCard';
import Alexaimage from './images/alexa.png';
import Ryleimage from './images/ryle.png';
import Margotimage from './images/margot.png';

// console.log(Alexaimage);
// console.log(Ryleimage);
// console.log(Margotimage);

function App(){
    return(
<div>
    <section className= "hero-is-prime">
        <div className="hero-body">

        </div>
    </section>
    <section className="section">
        <div className="columns">
            <div className="column is -4">
                
            </div>
        </div>
    </section>
    <div>Personal Digital Assistants</div>
    <div className="container"> 
    <section className="section">
        <div className="columns">
            <div className="column is -4">

            </div>
            <div className="column is -4">

        </div>
        <div className="column is -4">
            </div>
            </div>
    </section>
</div>
{/* /* <img src={Alexaimage} />
<img src = {Ryleimage} /> */ }

    <ProfileCard title="Alexa" handle="@Alexa990" image = {Alexaimage}/>
    <ProfileCard title="Ryle" handle="@Ryle432" image={Ryleimage}/>
    <ProfileCard title="Margot" handle="@Margot653"image={Margotimage}/>
</div>


    );
}
export default App;