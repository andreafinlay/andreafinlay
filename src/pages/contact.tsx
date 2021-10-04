import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO, Image } from '../components';

const Contact = () => (
    <Layout>
        <SEO title="contact" description="woo" />
        <h1>get in touch</h1>
        <p>
            send me an email at <strong>me@andreafinlay.com</strong>
        </p>
        <Image />
        <Link to="/">home</Link>
    </Layout>
);

export default Contact;
