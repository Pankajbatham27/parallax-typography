
import image from './sample.jpg';
import image2 from './sample.png';
import style from './Typography.module.css';

const Typography = () => {

    return (
        <div className={style.imageCover}>
            <div className={style.backImage}>
                <img src={image} className={style.imgFluid} />
            </div>
            <div className={style.typoGraphy}>
                Typography Effects
            </div>
            <div className={style.frontImage}>
                <img src={image2} className={style.imgFluid} />
            </div>
        </div>
    )
}
export default Typography;