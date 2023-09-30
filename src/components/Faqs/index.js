// Write your code here.

import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-cont">
        <div className="faq-cont">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} faqItem={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
