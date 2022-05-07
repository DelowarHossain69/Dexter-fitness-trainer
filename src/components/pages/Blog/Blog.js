import React from 'react';

const Blog = () => {
      return (
            <section className='container mx-auto row my-5'>

                  <div className='col-12 col-md-6'>
                        <h4>There are many services which Firebase provides:</h4>
                        <ul>
                              <li>Cloud Firestore.</li>
                              <li>Cloud Functions.</li>
                              <li>Hosting.</li>
                              <li>Cloud Storage.</li>
                              <li>Google Analytics.</li>
                              <li>Predictions.</li>
                              <li>Cloud Messaging.</li>
                        </ul>
                  </div>

                  <div className='col-12 col-md-6'>
                        <h4>Different between authorization and authentication.</h4>
                        <p>Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Simply put, Authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to. </p>
                  </div>

            </section>
      );
};

export default Blog;