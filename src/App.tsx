
import React from 'react';
import{Button} from './components/Button/Button'

import bookmark from './components/img_logo/bookmark.png'
import dislike from './components/img_logo/dislike.png'
import like from './components/img_logo/like.png'



function App() {
  return ( <div className='App'>
          <Button disabled={false} text='Primary' className='primary' onClick={() => 1} />
          <Button disabled={false} text='Secondary' className='secondary' onClick={() => 1}/>
          <Button disabled={false} text='Secondary 2' className='secondary2' onClick={() => 1}/>

          <Button disabled={false} text=' Button with icon' className='ButtonWithIcon' onClick={() => 1} icon={bookmark}/>
          <Button disabled={false} className='like' onClick={() => 1} icon={dislike}/>
          <Button disabled={false} className='dislike' onClick={() => 1}  icon={like}/>

  </div>
  

  );
}

export default App;
