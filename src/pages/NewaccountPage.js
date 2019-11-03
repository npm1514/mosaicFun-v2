import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainWrapper, MainContent, SplitContent } from '../styled-components/global';

class Newaccount extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                <SplitContent>
                  <div>
                    <h3>Features</h3>
                    <ul>
                      <li>Save and Print</li>
                      <li>Add/Remove Grid Lines</li>
                      <li>Add/Remove Paint By Number</li>
                      <li>Change Block Colors</li>
                      <li>Control Color Quality</li>
                      <li>Control Division Count</li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                      Subscribe to Premium for $19.99
                    </h3>
                    <button>Purchase Now</button>
                  </div>
                </SplitContent>

                Purchase Premium Account
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Newaccount;
