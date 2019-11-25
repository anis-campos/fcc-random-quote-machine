/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled/macro'
import css from '@emotion/css/macro'
import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { transition, borderRadius } from './mixins.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab)

const Container = styled.div`
    text-align: center;
    background-color: ${props => props.theme.color};
    ${transition(['background-color', 'color'], "1000ms ease-in")}
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => props.theme.color};
`



const Card = styled.div`
    background-color: white;
    padding:2vw;
    max-width: 90vw;
    min-height: 100px;
    @media (min-width: 1000px) {
      max-width:  40vw;
    }
    ${borderRadius("10px")}
    
`

const NextQuoteButton = styled.p`
    float:${props => props.right ? 'right' : 'left'};
    margin: 3vh 1vw 0 0;
    padding:10px;
    background-color:  ${props => props.theme.color};
    border:none;
    color: #fff;
    line-height:40px;
    height:40px;
    :hover,:focus{
      opacity: 0.9;
      cursor: pointer;
    };
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    :after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10,10);
      opacity: 0;
      transition: transform 1s, opacity 1s;
    }
    :active:after {
      transform: scale(0,0);
      opacity: .2;
      transition: 0s;
    }
    min-width:40px;
    ${borderRadius('5px')}
    ${transition('background-color 1000ms ease-in')}  
`;

const TweetQuoteButton = NextQuoteButton.withComponent('a')

const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];




class QuoteSource extends React.Component {
  render() {
    return (
      <div id={this.props.id} css={css`
      text-align:right;
      padding-right: 1vw;
      `}>
        - {this.props.name}
      </div>
    );
  }
}

const QuoteBox = styled.div`
    font-size: calc(18px + (50 - 18) * ((100vw - 300px) / (1600 - 300)));
    margin-bottom: 20px;
`
const QuoteContent = styled.span`
    padding: 0 calc(5px + 1vw) 0 calc(5px + 1vw);
`
class Quote extends React.Component {
  render() {
    return (
      <QuoteBox>
        <FontAwesomeIcon icon={faQuoteLeft} />
        <QuoteContent id={this.props.id} >{this.props.text}</QuoteContent>
        <FontAwesomeIcon icon={faQuoteRight} />
      </QuoteBox>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      author: "Name Of the Guy",
      quote: "This is a really inspiring citation",
      theme: {
        color: this.getRandomColor()
      }
    }
  }

  onClick = () => {
    debugger
  }

  getRandomColor = () => colors[Math.round(Math.random() * (colors.length - 1))]

  changeColor = () => {
    this.setState({

      theme: {
        color: this.getRandomColor()
      }
    })
  }

  getQuote = async () => {
    try {
      const response = await fetch("/api/1.0/?method=getQuote&format=json&lang=en");
      const data = await response.json();
      console.log(data)
      const { 'quoteText': quote, 'quoteAuthor': author } = data
      this.changeColor()
      this.setState({
        quote, author
      })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount(){
    this.getQuote()
  }

  render() {
    const { author: name, quote: text } = this.state;
    const quote = encodeURI(`"${text}" - ${name}`);
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container>
          <Card id="quote-box">
            <Quote id="text" text={text} />
            <QuoteSource id="author" name={name} />
            <NextQuoteButton id="new-quote" right={true} onClick={this.getQuote}> Next Quote </NextQuoteButton>
            <TweetQuoteButton id="tweet-quote" onClick={this.tweet} target="_blank" href={`https://twitter.com/intent/tweet?text=${quote}&hashtags=quote`}><FontAwesomeIcon icon={['fab', 'twitter']} /></TweetQuoteButton>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
