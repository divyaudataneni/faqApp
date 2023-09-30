// Write your code here.

import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShown: false}

  onUpdateFaq = () => {
    this.setState(prevState => ({isShown: !prevState.isShown}))
  }

  render() {
    const {faqItem} = this.props
    const {isShown} = this.state
    const {questionText, answerText} = faqItem
    const imgUrl = isShown
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isShown ? 'minus' : 'plus'

    return (
      <li>
        <div className="each-faq">
          <h1 className="ques-text">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onUpdateFaq}>
            <img src={imgUrl} alt={altText} className="icon" />
          </button>
        </div>

        {isShown && (
          <div>
            <hr className="line" />
            <p className="ans-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
