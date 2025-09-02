
export default function AboutInfo ({smallText, title, description, imgSrc, reverse}) {
    return (
        <div className={`about-info ${reverse ? 'reverse' : ''}`}>
            <div className="about-text">
                <small>{smallText}</small>
                <h2 className='about-title'>{title}</h2>

                <p>{description}</p>
            </div>

            <div className="about-img-wrapper">
                <img src={imgSrc} alt="image about us" />
            </div>
        </div>
    )
}