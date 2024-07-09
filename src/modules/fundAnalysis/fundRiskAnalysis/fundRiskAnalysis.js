import React, { useState, useEffect, useRef } from "react";
import FRA_TABLE from "./fRA_table";
import {
  LEVEL_ONE_COLUMS,
  LEVEL_THREE_COLUMNS,
  LEVEL_TWO_COLUMS,
  LEVEL_FOUR_COLUMS,
} from "../../../db/fundRiskAnalysis";
import { faker } from "@faker-js/faker";
import { AMC_LIST } from "../../../db/fundAnalysis/fundReviewDb";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import CustomHeaderWithSearchBar from "../../../common/components/customHeaderWithSearchBar";
import { FUND_ANALYSIS_RISK_ICON } from "../../../constants/icons";
import { Controller, useForm } from "react-hook-form";

const FundRiskAnalysis = () => {
  const theme = useTheme();
  const {
    control,
    reset,
    handleSubmit,
    setValue,
    watch,
    setFocus,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "all",
  });
  const fieldValues = watch();
  const formRef = useRef(null);
  const [rerender, setRerender] = useState(false);
  const [data, setData] = useState([]);

  const filterSubmit = (formData) => {
    if (formData.month === "" || formData.category === "") {
      return;
    }
    setData((prev) => {
      return Array(100)
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
            as_of_portfolio_date: formData.month,
            schema_name:
              AMC_LIST[Math.floor(Math.random() * AMC_LIST.length)]?.label,
            aum_amount_in_cr: faker.finance.amount({
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
        });
    });
    setRerender((prev) => !prev);
  };

  return (
    <>
      <CustomHeaderWithSearchBar
        hideSearchBar
        headerText={
          "Disclosure of Stress Test & Liquidity Analysis  in respect of Mid Cap & Small Cap Funds"
        }
        headerIcon={FUND_ANALYSIS_RISK_ICON}
      />
      <Card sx={{ p: 0.5, mb: 1 }}>
        <form noValidate onSubmit={handleSubmit(filterSubmit)} ref={formRef}>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Grid item xs={5}>
              <FormControl
                fullWidth
                variant="standard"
                size="small"
                error={!!errors.month}
              >
                <InputLabel id="month-select-label">Month</InputLabel>
                <Controller
                  name="month"
                  control={control}
                  defaultValue={""}
                  rules={{}}
                  render={({ field: { onChange, ref, value } }) => (
                    <>
                      <Select
                        onChange={(e) => {
                          onChange(e);
                        }}
                        value={value}
                        ref={ref}
                        labelId="month-select-label"
                        required
                      >
                        {[
                          "Nov-2024",
                          "Dec-2023",
                          "Jan-2024",
                          "Feb-2024",
                          "Mar-2024",
                          "Apr-2024",
                          "May-2024",
                        ].map((x, i) => {
                          return (
                            <MenuItem key={i} value={x}>
                              {x}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>{errors.month?.message}</FormHelperText>
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormControl
                fullWidth
                variant="standard"
                size="small"
                error={!!errors.category}
              >
                <InputLabel id="category-select-label">Category</InputLabel>
                <Controller
                  name="category"
                  control={control}
                  defaultValue={""}
                  rules={{}}
                  render={({ field: { onChange, ref, value } }) => (
                    <>
                      <Select
                        value={value}
                        ref={ref}
                        onChange={(event) => {
                          onChange(event);
                        }}
                        labelId="category-select-label"
                        required
                      >
                        {["Mid Cap Fund", "Small Cap Fund"].map((x, i) => {
                          return (
                            <MenuItem key={i} value={x}>
                              {x}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>
                        {errors.category?.message}
                      </FormHelperText>
                    </>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" fullWidth type="submit">
                Filter
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      {data?.length > 0 && (
        <FRA_TABLE
          levelOneColumns={LEVEL_ONE_COLUMS}
          levelTwoColumns={LEVEL_TWO_COLUMS}
          levelThreeColumns={LEVEL_THREE_COLUMNS}
          levelFourColumns={LEVEL_FOUR_COLUMS}
          tableData={data || []}
          rowsPerPage={15}
          key={rerender}
          maxHeight={600}
        />
      )}
    </>
  );
};

export default FundRiskAnalysis;
