import React, { useState, useEffect } from "react";
import FRA_TABLE from "./fRA_table";
import {
  LEVEL_ONE_COLUMS,
  LEVEL_THREE_COLUMNS,
  LEVEL_TWO_COLUMS,
  LEVEL_FOUR_COLUMS,
} from "../../../db/fundRiskAnalysis";
import { faker } from "@faker-js/faker";
import { AMC_LIST } from "../../../db/fundAnalysis/fundReviewDb";
import { useTheme } from "@mui/material";

const FundRiskAnalysis = () => {
  const theme = useTheme()
  const years = [
    2010, 2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
    2023, 2024,
  ];
  const [data, setData] = useState(
    Array(105)
      .fill()
      .map((x) => {
        const amounts = [
          "N.A.",
          faker.finance.amount({
            min: 5,
            max: 100,
            dec: 2,
          }),
          ,
          faker.finance.amount({
            min: 5,
            max: 100,
            dec: 2,
          }),
          ,
          faker.finance.amount({
            min: 5,
            max: 100,
            dec: 2,
          }),
          ,
          faker.finance.amount({
            min: 5,
            max: 100,
            dec: 2,
          }),
          ,
          faker.finance.amount({
            min: 5,
            max: 100,
            dec: 2,
          }),
        ];
        return {
          empty_one: `${faker.date.month({ abbreviated: true })}-${
            years[Math.floor(Math.random() * years.length)]
          }`,
          empty_two:
            AMC_LIST[Math.floor(Math.random() * AMC_LIST.length)]?.label,
          empty_three: faker.finance.amount({
            min: 5,
            max: 50000,
            dec: 2,
          }),
          a: faker.finance.amount({ min: 1, max: 100 }),
          b: faker.finance.amount({ min: 1, max: 100 }),
          c: amounts[Math.floor(Math.random() * amounts.length)],
          d: amounts[Math.floor(Math.random() * amounts.length)],
          e: amounts[Math.floor(Math.random() * amounts.length)],
          f: amounts[Math.floor(Math.random() * amounts.length)],
          g: amounts[Math.floor(Math.random() * amounts.length)],
          h: amounts[Math.floor(Math.random() * amounts.length)],
          i: amounts[Math.floor(Math.random() * amounts.length)],
          j: amounts[Math.floor(Math.random() * amounts.length)],
          k: amounts[Math.floor(Math.random() * amounts.length)],
          l: amounts[Math.floor(Math.random() * amounts.length)],
          m: amounts[Math.floor(Math.random() * amounts.length)],
          n: amounts[Math.floor(Math.random() * amounts.length)],
          o: amounts[Math.floor(Math.random() * amounts.length)],
        };
      })
  );
  return (
    <>
      <FRA_TABLE
        levelOneColumns={LEVEL_ONE_COLUMS}
        levelTwoColumns={LEVEL_TWO_COLUMS}
        levelThreeColumns={LEVEL_THREE_COLUMNS}
        levelFourColumns={LEVEL_FOUR_COLUMS}
        tableData={data}
        rowsPerPage={15}
        maxHeight={"500px"}
      />
    </>
  );
};

export default FundRiskAnalysis;
