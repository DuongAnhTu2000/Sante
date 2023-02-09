import './Introduction.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Introduction() {
    return (
        <div className="introduction">
            <div className="introduction--container">
                <a itemProp="url" href="https://vimeo.com/326951659" data-type="iframe">
                    <div className="introduction--thumbnail">
                        <img
                            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-video-img-1-2048x693.jpg"
                            alt=""
                        />
                        <i>
                        <PlayArrowIcon fontSize="inherit"/>
                        </i>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Introduction;
