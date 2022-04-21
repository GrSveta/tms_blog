
//import React from 'react';
import{Button} from './components/Button'

import bookmark from './components/img_logo/bookmark.svg'
import dislike from './components/img_logo/dislike.svg'
import like from './components/img_logo/like.svg'



function App() {
  return ( <div className='App'>
          <Button disabled={false} text='Primary' className='primary' onClick={() => console.log('Text')} />
          <Button disabled={false} text='Secondary' className='secondary' onClick={() => console.log('Text')}/>
          <Button disabled={false} text='Secondary 2' className='secondary2' onClick={() => console.log('Text')}/>

          <Button disabled={false} text=' Button with icon' icon={bookmark} className='ButtonWithIcon' onClick={() => console.log('Text')} />
          <Button disabled={false} className='like' onClick={() => console.log('Text')} icon={like}/>
          <Button disabled={false} className='dislike' onClick={() => console.log('Text')}  icon={dislike}/>

  </div>
  

  );
}

export default App;
