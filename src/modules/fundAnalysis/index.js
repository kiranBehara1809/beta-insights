import React, { useState } from "react";
import CustomHeaderWithSearchBar from "../../common/components/customHeaderWithSearchBar";
import EnhancedTable from "../../common/components/customTable";
import { intToRoman } from "../../common/functions/function";
import {
  FUND_ANALYSIS_ICON,
  FUND_INSIGHTS_ICON,
  FUND_REVIEW_ICON,
} from "../../constants/icons";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { faker } from "@faker-js/faker";
import FundReview from "./fundReview";
import FundRiskAnalysis from "./fundRiskAnalysis/fundRiskAnalysis";

const COLUMNS = [
  {
    id: "sr",
    label: "Sr No",
    minWidth: "70px",
  },
  {
    id: "schemeName",
    label: "Scheme Name",
    minWidth: "170px",
  },
  {
    id: "noOfSchemes",
    label: "No of Schemas",
    minWidth: "170px",
    tooltip: "No of schemes as on March 2024",
  },
  {
    id: "noOfFolios",
    label: "No of Folios",
    minWidth: "170px",
    tooltip: "No of Folios as on March 2024",
  },
  {
    id: "fundsMobilized",
    label: "Funds Mobilized",
    minWidth: "170px",
    tooltip: "Funds Mobilized during the period Jan - Mar 2024 (INR in crore)",
  },
  {
    id: "repurchase_redemption",
    label: "Repurchase/ Redemption",
    minWidth: "220px",
    tooltip:
      "Repurchase/ Redemption during the period Jan - Mar 2024 (INR in crore)",
  },
  {
    id: "inflow_outflow",
    label: "Net Inflow/ Outflow",
    minWidth: "170px",
    tooltip:
      "Net Inflow (+ve)/ Outflow (-ve) during the period Jan - Mar 2024 (INR in crore)",
  },
  {
    id: "netAssets",
    label: "Net Assets",
    minWidth: "170px",
    tooltip: "Net Assets under Management as on March, 2024 (INR in crore)",
  },
  {
    id: "averageNetAssets",
    label: "Average Net Assets",
    minWidth: "170px",
    tooltip:
      "Average Net Assets under Management as on March, 2024 (INR in crore)",
  },
  {
    id: "segregatedPortfolios",
    label: "No of Segregated Portfolios",
    minWidth: "220px",
    tooltip: "No of Segregated Portfolios created as on March, 2024",
  },
  {
    id: "segregatedNetAssets",
    label: "Segregated Net Assets",
    minWidth: "190px",
    tooltip:
      "Net Assets under Management in segregated portfolios as on March, 2024 (INR in crore)",
  },
];

const FundAnalysis = () => {
  const pageTitle = `Quarterly Data for the quarter January - March 2024`;
  const [tabValue, setTabValue] = useState(0);
  const [data, setData] = useState(
    Array(100)
      .fill()
      .map((x, i) => {
        return {
          sr: intToRoman(i + 1),
          schemeName: faker.person.firstName(),
          noOfSchemes: faker.number.int(100),
          noOfFolios: faker.number.int(1000),
          fundsMobilized: faker.finance.amount({
            min: 5,
            max: 10,
            dec: 2,
            symbol: "₹ ",
          }),
          repurchase_redemption: faker.finance.amount({
            min: 5,
            max: 10,
            dec: 2,
            symbol: "₹ ",
          }),
          inflow_outflow: faker.finance.amount({
            min: 5,
            max: 10,
            dec: 2,
            symbol: "₹ ",
          }),
          netAssets: faker.finance.amount({
            min: 5,
            max: 10,
            dec: 2,
            symbol: "₹ ",
          }),
          averageNetAssets: faker.finance.amount({
            min: 5,
            max: 10,
            dec: 2,
            symbol: "₹ ",
          }),
          segregatedPortfolios: faker.number.int(100),
          segregatedNetAssets: faker.finance.amount({
            min: 5,
            max: 10,
            dec: 2,
            symbol: "₹ ",
          }),
        };
      })
  );

  return (
    <>
      <Tabs
        sx={{ mt: "-40px" }}
        value={tabValue}
        onChange={(e, tab) => setTabValue(tab)}
        aria-label="icon position tabs example"
      >
        <Tab
          icon={FUND_ANALYSIS_ICON}
          iconPosition="start"
          label="Fund Analysis"
        />
        <Tab
          icon={FUND_REVIEW_ICON}
          iconPosition="start"
          label="Fund Review (Historical performance)"
        />
        <Tab
          icon={FUND_INSIGHTS_ICON}
          iconPosition="start"
          label="Fund Insights (Patterns & Observations)"
        />
        <Tab
          icon={FUND_INSIGHTS_ICON}
          iconPosition="start"
          label="Fund Risk Analysis"
        />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tabValue === 0 && (
          <>
            <CustomHeaderWithSearchBar
              hideSearchBar
              headerText={pageTitle}
              headerIcon={null}
            />
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  maxWidth: "100% !important",
                }}
              >
                <EnhancedTable
                  columns={COLUMNS}
                  data={data}
                  maxHeight={"auto"}
                  rowsPerPage={15}
                  tableNote={"Note: All amounts are in Rupees (INR)"}
                />
              </Grid>
            </Grid>
          </>
        )}
        {tabValue === 1 && <FundReview />}
        {tabValue === 3 && <FundRiskAnalysis />}
      </Box>
    </>
  );
};

export default FundAnalysis;
