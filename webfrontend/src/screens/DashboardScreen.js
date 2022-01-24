import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { countAction } from "../actions/testActions";
import { chartsAction } from "../actions/chartActions";

// import "../assets/css/index.css";
// import OnchoChart from "../components/charts/OnchoChart";
// import SchistoChart from "../components/charts/SchistoChart";
// import LfChart from "../components/charts/LfChart";
// import HelminthsChart from "../components/charts/HelminthsChart";
import "../components/badge/badge.css";

import List from "../components/List";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const DashboardScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const countList = useSelector((state) => state.countList);
  const { error, loading, count } = countList;

  const chartValues = useSelector((state) => state.chartValues);
  const { charts } = chartValues;

  // const [labelV, setLabelV] = useState([]);
  // const [valueV, setValueV] = useState([]);

  useEffect(() => {
    if (userInfo) {
      dispatch(countAction());
      dispatch(chartsAction());
      // setLabelV(charts.labels);
      // setValueV(charts.values);
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container fluid style={{ paddingLeft: "0px !important" }}>
          <div sm={1}>
            {/* {labelV == null && valueV == null ? (
              <Loader />
            ) : ( */}
            <Tabs
              defaultActiveKey="oncho"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="oncho" title="Onchocerciasis">
                {/* <OnchoChart labels={labelV} values={valueV} /> */}
                <div>
                  <Bar
                    data={{
                      labels: charts.labels,
                      datasets: [
                        {
                          label: "Soil transmitted Helminths",

                          data: charts.values,
                          // backgroundColor:['red']
                          backgroundColor: "#333366",
                        },
                      ],
                    }}
                    type="bar"
                    width={600}
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </Tab>
              <Tab eventKey="schisto" title="Schistosomiasis">
                {/* <SchistoChart labels={labelV} values={valueV} /> */}
                <div>
                  <Bar
                    data={{
                      labels: charts.labels,
                      datasets: [
                        {
                          label: "Soil transmitted Helminths",

                          data: charts.values,
                          // backgroundColor:['red']
                          backgroundColor: "#333366",
                        },
                      ],
                    }}
                    type="bar"
                    width={600}
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </Tab>
              <Tab eventKey="lf" title="Lymphatic Filariasis">
                <div>
                  {/* <LfChart labels={labelV} values={valueV} /> */}
                  <Bar
                    data={{
                      labels: charts.labels,
                      datasets: [
                        {
                          label: "Soil transmitted Helminths",

                          data: charts.values,
                          // backgroundColor:['red']
                          backgroundColor: "#333366",
                        },
                      ],
                    }}
                    type="bar"
                    width={600}
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </Tab>
              <Tab eventKey="helminths" title="S.T. Hemlinths">
                {/* <HelminthsChart labels={labelV} values={valueV} /> */}
                <div>
                  <Bar
                    data={{
                      labels: charts.labels,
                      datasets: [
                        {
                          label: "Soil transmitted Helminths",

                          data: charts.values,
                          // backgroundColor:['red']
                          backgroundColor: "#333366",
                        },
                      ],
                    }}
                    type="bar"
                    width={600}
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </Tab>
            </Tabs>
            {/* )} */}
          </div>

          <div>
            <Row sm={1} lg={4}>
              <Col>
                <List
                  title=" onchocerciasis"
                  tests={count.oTests}
                  ptest={count.opTests}
                  ntest={count.onTests}
                />
              </Col>
              <Col>
                <List
                  title="schistosomiasis"
                  tests={count.sTests}
                  ptest={count.spTests}
                  ntest={count.snTests}
                />
              </Col>
              <Col>
                <List
                  title=" l. filariasis"
                  tests={count.lTests}
                  ptest={count.lpTests}
                  ntest={count.lnTests}
                />
              </Col>
              <Col>
                <List
                  title="S. T. Helminths"
                  tests={count.hTests}
                  ptest={count.hpTests}
                  ntest={count.hnTests}
                />
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </div>
  );
};

export default DashboardScreen;
