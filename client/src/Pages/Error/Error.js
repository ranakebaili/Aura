import React from 'react'

const Error = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '2em', color: '#ff4eb5' }}>Error 404: Page Not Found</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>Oops! It looks like you've wandered off the path.</p>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>We're sorry, but the page you were looking for seems to be missing. It may have been moved, deleted, or never existed in the first place. Don't worry, though; we're here to help you get back on track.</p>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>Here are a few suggestions:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>Check the URL:</strong> Make sure there are no typos or errors in the web address.</li>
        <li><strong>Return to the Homepage:</strong> <a href="/">Start fresh by going back to our homepage.</a></li>
        <li><strong>Contact Support:</strong> <a href="mailto:rana.kebaili@gmail.com">Email our support team</a> if you're still having trouble.</li>
      </ul>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>Meanwhile, why not explore some of our popular pages:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="/AboutUs">About Us</a></li>
        <li><a href="/Products">Our products</a></li>
      </ul>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>We appreciate your understanding, and we're working hard to ensure this doesn't happen again. If you believe you've reached this page in error, please let us know.</p>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>Thank you for your patience!</p>
    </div>
  )
}

export default Error