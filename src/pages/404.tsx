import React from "react";
import { Layout } from "@/components/Layout";
import { EmptyPage } from "@/components/EmptyPage";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

function NotFound() {
  return (
    <Layout title="404 - Page not found">
      <EmptyPage>
        <Container size="small">
          <Text size="large">🤖</Text>
          <Heading>Page not found</Heading>
          <Text>
            It seems the page you are looking for can not be found. Please check
            the URL and try again.
          </Text>
        </Container>
      </EmptyPage>
    </Layout>
  );
}

export default NotFound;
