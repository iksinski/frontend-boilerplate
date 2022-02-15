import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ImagePage } from './pages/image/image.page';
import { AuthorizedPage } from './pages/authorized/authorized.page';
import { RequireAuth } from './utils/authorization/require-auth';
import { HomePage } from './pages/home/home.page';
import { Layout } from './components/layout';
import { AuthProvider } from './utils/authorization/auth-provider';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/image" element={<ImagePage />} />
              <Route element={<RequireAuth />}>
                <Route path="/authorized" element={<AuthorizedPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
};
