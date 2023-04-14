import { Button, Switch } from '@material-ui/core';
import {doc,deleteDoc} from 'firebase/firestore';
import './Box.css';
import image from './icons';

import db from './firebase';

function Box(props)
{
    
    function deleteTodo()
    {
          const docRef=doc(db,"todos",props.id);

          deleteDoc(docRef);
    }
    return <>


    <div className="container">

        <div className='start'> 
            <div className='startTitle'>
            <img src={image[props.title]} width="50vw" height="50vh" />
            <h2 style={{marginLeft:"2vw"}}>{props.title}</h2>
            </div>
            
        </div>
        
        <div className="content">
            <h4>* {props.toto}</h4>
            <Button onClick={deleteTodo}><img src={image.delete} width="35vw" height="35vh"/></Button>
        </div>

        <div className="end">
            
        </div>
    </div>
    </>
}

export default Box;