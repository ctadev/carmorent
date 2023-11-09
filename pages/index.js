import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

import { Navbar } from '../src/components';

const Home = () => {
  const [hold, setHold] = useState('');

  return (
      <h1 className="text-3xl font-bold underline text-success-900">
          Hello world!
      </h1>
  );
};

export default Home;
