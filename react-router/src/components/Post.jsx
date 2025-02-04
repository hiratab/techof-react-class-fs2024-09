import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "../styles/post.css";

const StyledPostComponent = styled.div`
  margin-top: 0.1em;
  margin-bottom: 0.1em;
  padding: 0.25em;
  background-color: ${props => {
    if ('breaking-news' === props.type) {
      return '#04E824';
    }

    return '#285238';
  }};
  &:hover {
    background-color: #138A36;
  }
  div {
    h1 {
      color:rgb(72, 191, 107);
    }
  }
`;
//  StyledPostComponent div h1 { color:rgb(72, 191, 107); }

const StyledLinkComponent = styled.div(props => ({
  textDecoration: 'none',
  color: '#138A36',
  ...('breaking-news' === props.type && {
    fontSize: '2em',
  })
}));

function Post(props) {
  return (
    <StyledPostComponent
      key={props.id}
      type={props.type}
    >
      <StyledLinkComponent
        to={`/posts/${props.id}`}
        type={props.type}
      >
        <h1>Title: {props.title}</h1>
        <p>Title: {props.title}</p>
      </StyledLinkComponent>
    </StyledPostComponent>
  )
}

export default Post;