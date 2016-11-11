import React from 'react';
import Post from './post';

var PostList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
    { this.props.posts.map((post, i) => {
      return(
        <div key={ i }>
          <h4>{ post.title }</h4>
          <p>{ post.description }</p>
          <p>{ post.location }</p>
          <p>{ post.user }</p>
        </div>
      )

    }) }
        {/*<Post title="A dress"
                      image="http://s3-us-west-2.amazonaws.com/itemimages.prod.or.shufl.it/e77072/38672def9b876ffce5f1dd07e1bc9762"
                      description="Used to be my favourite dress. Still looks brand new! Beautiful bird design on it.  It has pockets!! Medium"
                      location="Fashion District"
                      user="Ryan" />
                <Post title="Floor Tom"
                      image="http://s3-us-west-2.amazonaws.com/itemimages.prod.or.shufl.it/d57072/6b4c7358582ce09df14479b56d2a9332"
                      description="Westbury 16'"
                      location="Downtown"
                      user="Jim" />
                <Post title="Women's Small Black Wool Coat"
                      image="http://s3-us-west-2.amazonaws.com/itemimages.prod.or.shufl.it/d17072/6327752e6b646cb6c40e690442476017"
                      description="Made in Canada 70% Wool, 20% poliamide, 10% cashmere. No size tag but is a true small, size 4. Is from pet free smoke free home, but lived in my closet beside a fur coat, hence the fluffs! Lining is in rough shape (3rd photo) therefore I'm not seeking much for this guy. ISO in profile."
                      location="West Queen West"
                      user="Mary" />
                <Post title="Exercise Ball"
                      image="http://s3-us-west-2.amazonaws.com/itemimages.prod.or.shufl.it/586072/62246fd457aa95523c9381a7a42745ab"
                      description="Dirty and needs some air. Free"
                      location="West Queen West"
                      user="Sue" />*/}
      </div>
    </div>
  }
});

module.exports = PostList;
