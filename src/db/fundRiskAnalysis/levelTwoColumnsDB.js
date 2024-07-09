import { Tooltip } from "@mui/material";

const LEVEL_TWO_COLUMS = [
  {
    id: "",
    label: "",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "",
    label: "",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "",
    label: "",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "stressTest",
    label: "Pro-rata liquidation",
    tooltip:
      "Pro-rata liquidation after removing bottom 20% of portfolio based on scrip liquidity (considering 10% PV with 3x volumes)",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 2,
  },
  {
    id: "liabilitySide",
    label: "Liability side",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "assetSide",
    label: "Asset side (AUM held in)	",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 4,
  },
  {
    id: "portFolio_annualised_std_deviation",
    label: "Portfolio Annualised Standard Deviation (%)",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "benchmark_annualised_std_deviation",
    label: "Benchmark Annualised Standard Deviation (%)",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "portfolio_beta",
    label: "Portfolio Beta",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "portfolio_trailing_12m_pe",
    label: "Portfolio Trailing 12m PE",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
  {
    id: "benchmark_pe",
    label: "Benchmark PE",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 3,
  },
  {
    id: "portfolio_turnover_ratio",
    label: "Portfolio Turnover Ratio(%)",
    minWidth: "",
    sx: { border: "0.25px solid red" },
    colSpan: 1,
  },
];

export { LEVEL_TWO_COLUMS };
