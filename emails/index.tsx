import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface YelpRecentLoginEmailProps {
  userFirstName?: string;
  loginDate?: Date;
  loginDevice?: string;
  loginLocation?: string;
  loginIp?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const YelpRecentLoginEmail = ({
  userFirstName,
  loginDate,
  loginDevice,
  loginLocation,
  loginIp,
}: YelpRecentLoginEmailProps) => {
  const formattedDate = loginDate
    ? new Intl.DateTimeFormat("en", {
        dateStyle: "long",
        timeStyle: "short",
      }).format(loginDate)
    : "";

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>Yelp recent login</Preview>
        <Body className="bg-white font-sans">
          <Container>
            <Section className="py-8 px-5">
              <Img src={`${baseUrl}/static/yelp-logo.png`} />
            </Section>

            <Section className="border border-gray-300 rounded overflow-hidden">
              <Row>
                <Img
                  className="max-w-full"
                  width={620}
                  src={`${baseUrl}/static/yelp-header.png`}
                />
              </Row>

              <Row className="px-5 pt-5 pb-0">
                <Column>
                  <Heading className="text-2xl font-bold text-center">
                    Hi {userFirstName},
                  </Heading>
                  <Heading as="h2" className="text-xl font-bold text-center">
                    We noticed a recent login to your Yelp account.
                  </Heading>

                  <Text className="text-lg">
                    <b>Time: </b>
                    {formattedDate}
                  </Text>
                  <Text className="text-lg mt-1">
                    <b>Device: </b>
                    {loginDevice}
                  </Text>
                  <Text className="text-lg mt-1">
                    <b>Location: </b>
                    {loginLocation}
                  </Text>
                  <Text className="text-sm text-gray-500 mt-1">
                    *Approximate geographic location based on IP address:{" "}
                    {loginIp}
                  </Text>

                  <Text className="text-lg mt-4">
                    If this was you, there&lsquo;s nothing else you need to do.
                  </Text>
                  <Text className="text-lg mt-1">
                    If this wasn&lsquo;t you or if you have additional
                    questions, please see our support page.
                  </Text>
                </Column>
              </Row>

              <Row className="px-5 pt-0 pb-5">
                <Column className="flex justify-center w-full">
                  <Button className="bg-red-600 text-white font-bold rounded px-6 py-3 border border-gray-200 cursor-pointer">
                    Learn More
                  </Button>
                </Column>
              </Row>
            </Section>

            <Section className="pt-11">
              <Img
                className="max-w-full"
                width={620}
                src={`${baseUrl}/static/yelp-footer.png`}
              />
            </Section>

            <Text className="text-center text-xs text-gray-700">
              © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
              U.S.A. | www.yelp.com
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

YelpRecentLoginEmail.PreviewProps = {
  userFirstName: "Alan",
  loginDate: new Date("September 7, 2022, 10:58 am"),
  loginDevice: "Chrome on Mac OS X",
  loginLocation: "Upland, California, United States",
  loginIp: "47.149.53.167",
} as YelpRecentLoginEmailProps;

export default YelpRecentLoginEmail;
