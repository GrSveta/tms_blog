import{Button} from './components/Button'

import bookmarkIcon from './components/img_logo/bookmark.svg'
import dislikeIcon from './components/img_logo/dislike.svg'
import likeIcon from './components/img_logo/like.svg'



function App() {
  return ( <div className='App'>
          <Button disabled={false} text='Primary' className='btn-primary btn-generalStyle' onClick={() => console.log('Text')} />
          <Button disabled={false} text='Secondary' className='btn-secondary btn-generalStyle' onClick={() => console.log('Text')}/>
          <Button disabled={false} text='Secondary 2' className='btn-secondary2 btn-generalStyle' onClick={() => console.log('Text')}/>

          <Button disabled={false} text='Button with icon' icon={bookmarkIcon} className='btn-ButtonWithIcon btn-generalStyle' onClick={() => console.log('Text')} />
          <Button disabled={false} className='btn-like btn-generalStyle' onClick={() => console.log('Text')} icon={likeIcon}/>
          <Button disabled={false} className='btn-dislike btn-generalStyle' onClick={() => console.log('Text')}  icon={dislikeIcon}/>

  </div>
  

  );
}

export default App;
