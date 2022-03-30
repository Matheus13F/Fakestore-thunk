import Lottie from 'react-lottie';
import loading from './loading.json';
import './styles.css';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  return (
    <div className='flex'>
      <Lottie options={defaultOptions} width={350} height={350}/>
    </div>
  );
}
