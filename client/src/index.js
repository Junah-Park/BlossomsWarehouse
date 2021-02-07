import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

// function DressList() {
//   return (
//     <section className='dresslist'>
//       <Dress />
//       <Dress />
//       <Dress />
//       <Dress />
//     </section>
//   )
// }

// const Dress = () => {
//   return <article className='dress'>
//     <Image/>
//     <Collection/>
//     <Style/>
//   </article>
// }

// const Image = () => <img 
// src="https://images-na.ssl-images-amazon.com/images/I/510xRAxM6AL._AC_SX425_.jpg" 
// alt=""/>

// // const DressInfo = () => {
// //   return <Collection/>
// //     <Style/>
// // }

// const Collection = () => <h1>Enzoani</h1>;
// const Style = () => (
// <h4 style={{color:'#627d98', fontSize: '0.75rem', 
//   marginTop: '0.25rem'}}>
//     SS7755
// </h4>
// )


// const Greeting = () => {
//   return React.createElement(
//     'h1',
//     {},
//     React.createElement('h1',{},'hellow world')
//   );
// }

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    
      <App />,
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
