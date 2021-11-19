import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel='preconnect' href='https://fonts.googleapis.com' />
               <link
                  rel='preconnect'
                  href='https://fonts.gstatic.com'
                  crossorigin
               />
               <link
                  href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap'
                  rel='stylesheet'
               ></link>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;

// import React from 'react';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { extractCritical } from '@emotion/server';

// export default class MyDocument extends Document {
//    static async getInitialProps(ctx) {
//       const initialProps = await Document.getInitialProps(ctx);
//       const critical = extractCritical(initialProps.html);
//       initialProps.html = critical.html;
//       initialProps.styles = (
//          <React.Fragment>
//             {initialProps.styles}
//             <style
//                data-emotion-css={critical.ids.join(' ')}
//                dangerouslySetInnerHTML={{ __html: critical.css }}
//             />
//          </React.Fragment>
//       );

//       return initialProps;
//    }

//    render() {
//       return (
//          <Html lang='en'>
//             <Head>
//                <style
//                   data-emotion-css={this.props.ids.join(' ')}
//                   dangerouslySetInnerHTML={{ __html: this.props.css }}
//                />
//             </Head>
//             <body>
//                <Main />
//                <NextScript />
//             </body>
//          </Html>
//       );
//    }
// }
