import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

import errorImage from "../images/error.png";

const { Text, Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  console.log(exchangesList); // will give error 401 due to unauthorized access
  // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
      <img
        src={errorImage}
        style={{
          maxWidth: "50%",
          maxHeight: "50%",
          marginLeft: "23%",
          marginBottom: "20px",
        }}
      />
      <Title
        level={{ md: 2, lg: 1 }}
        style={{ color: "red", textAlign: "center" }}
      >
        Error 401
      </Title>
      <Title
        level={3}
        style={{ color: "gray", textAlign: "center", marginBottom: "50px" }}
      >
        We are working on this page right now.....
      </Title>
      {/* <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange?.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange?.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange?.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange?.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange?.volume)}</Col>
                    <Col span={6}>{millify(exchange?.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange?.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange?.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default Exchanges;
