import logo from './icons/to-do-list.png'
import './Topic.css';
function Topic()
{
    return<>
    <div className='top'>
        <img src={logo} width="95" height="100"/>
        <h2 className='heading'>  To Do List</h2>
    </div>
    </>;
}
export default Topic;