import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsIndexContainer from './posts_index_container';
import PostContainer from './post_container';
import PostUpdateContainer from './post_update_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={PostsIndexContainer} />
      <Route path='/posts/show/:id' component={PostContainer} />
      <Route path='/posts/edit/:id' component={PostUpdateContainer} />
    </Switch>
  </div>
);

export default App;
