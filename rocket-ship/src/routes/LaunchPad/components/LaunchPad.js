import {useEffect, useRef} from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {

  const triggerRef = useRef(Date.now());

  //const [, triggerRerender] = useState(Date.now());
  
  useEffect(() => {
    setInterval(() => {  triggerRef.current = Date.now(); }, 500);
  }, [])
  
  return (
    <div className="launchpad">
      <FunctionalRocket />
      <ClassRocket />
    </div>
  );
}
