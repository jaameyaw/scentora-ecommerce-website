
import './SectionWrapper.css';

const SectionWrapper = ({ children, className = "", containerClassName = ""}) => {
    return (
        <section className={`section-wrapper ${className}`}>
            <div className={`section-container ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
}

export default SectionWrapper;