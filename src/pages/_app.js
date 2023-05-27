import Layout from '@/components/Layout/Layout';
import { DarkModeProvider } from '@/context';
import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DarkModeProvider>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </>
  );
}
