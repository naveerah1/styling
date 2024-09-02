function ProfileCard({title,handle,image}){
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is -1by1">
                <img src = {image}alt="pda-logo"/>
                    </figure>

            </div>
            <img src = {image}alt="pda-logo"/>
            <div className="card-content">
                <div className="media-content">
                <p className="title is -4">The Title is {title}</p>
                <p className="subtitle is -6">The handle is{handle}</p>
                <div>The handle is {handle}</div>
                </div>
            
            </div>
           
            
        </div>
    );
}
export default ProfileCard;