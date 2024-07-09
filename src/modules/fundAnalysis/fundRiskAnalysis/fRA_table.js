import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  tableCellClasses,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    bacgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const FRA_TABLE = ({
  levelOneColumns,
  levelTwoColumns,
  levelThreeColumns,
  levelFourColumns,
  tableData,
  maxHeight,
  rowsPerPage,
  tableNote,
}) => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [defaultTableLimit, setDefaultTableLimit] = useState(rowsPerPage || 10);
  const visibleRows = useMemo(
    () =>
      tableData.slice(
        page * defaultTableLimit,
        page * defaultTableLimit + defaultTableLimit
      ),
    [page, defaultTableLimit]
  );
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: maxHeight ?? 270, overflowX: "auto" }}>
          <Table stickyHeader size="small">
            <TableHead>
              {levelOneColumns?.length > 0 &&
                levelOneColumns?.map((one, i) => {
                  return (
                    <StyledTableCell
                      align="center"
                      colSpan={one.colSpan}
                      key={one.id}
                      sx={{
                        ...one.sx,
                        fontWeight: "bold",
                        color: `${theme.palette.primary.main} !important`,
                        background: alpha(
                          theme.palette.primary.main,
                          theme.palette.action.activatedOpacity
                        ),
                      }}
                    >
                      {one.label}
                    </StyledTableCell>
                  );
                })}
              <TableRow>
                {levelTwoColumns?.length > 0 &&
                  levelTwoColumns?.map((two, i) => {
                    return (
                      <Tooltip
                        arrow
                        title={
                          two.hasOwnProperty("tooltip") ? (
                            <Typography variant="body2">
                              {two.tooltip}
                            </Typography>
                          ) : (
                            ""
                          )
                        }
                      >
                        <StyledTableCell
                          align="center"
                          colSpan={two.colSpan}
                          key={two.id}
                          sx={{
                            ...two.sx,
                            fontWeight: "bold",
                            color: `${theme.palette.primary.main} !important`,
                            background: alpha(
                              theme.palette.primary.main,
                              theme.palette.action.activatedOpacity
                            ),
                          }}
                        >
                          {two.label}
                        </StyledTableCell>
                      </Tooltip>
                    );
                  })}
              </TableRow>
              <TableRow>
                {levelThreeColumns?.length > 0 &&
                  levelThreeColumns?.map((three, i) => {
                    return (
                      <StyledTableCell
                        align="center"
                        colSpan={three.colSpan}
                        key={three.id}
                        sx={{
                          ...three.sx,
                          fontWeight: "bold",
                          color: `${theme.palette.primary.main} !important`,
                          background: alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                          ),
                        }}
                      >
                        {three.label}
                      </StyledTableCell>
                    );
                  })}
              </TableRow>
              <TableRow>
                {levelFourColumns?.map((column) => (
                  <Tooltip
                    arrow
                    title={
                      column.hasOwnProperty("tooltip") &&
                      column.tooltip !== "" ? (
                        <Typography variant="body2">
                          {column.tooltip}
                        </Typography>
                      ) : (
                        ""
                      )
                    }
                    key={column.id}
                  >
                    <StyledTableCell
                      sx={{
                        ...column.sx,
                        minWidth: column.minWidth,
                        fontWeight: "bold",
                        color: `${theme.palette.primary.main} !important`,
                        background: alpha(
                          theme.palette.primary.main,
                          theme.palette.action.activatedOpacity
                        ),
                      }}
                    >
                      {column.label}
                      {column.hasOwnProperty("tooltip") &&
                        column.tooltip !== "" &&
                        "..."}
                    </StyledTableCell>
                  </Tooltip>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.length === 0 && (
                <TableRow>
                  <TableCell>No Data Found</TableCell>
                </TableRow>
              )}
              {visibleRows?.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {levelFourColumns.map((column, colIndex) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell
                          key={`${index}_${colIndex}`}
                          style={{
                            maxWidth: `${column.minWidth}px`,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          sx={{
                            background:
                              `${row[`${column.id}_bg`]} !important` ?? "",
                          }}
                        >
                          {value}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: "0 5px",
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.error.main }}>
            {tableNote || ""}
          </Typography>
          <TablePagination
            component="div"
            count={tableData?.length}
            page={page}
            showFirstButton
            showLastButton
            onPageChange={(event, page) => setPage(page)}
            rowsPerPage={defaultTableLimit}
            rowsPerPageOptions={[10]}
          />
        </Box>

        {/* <Pagination
          className="pagination-bar"
          currentPage={page}
          totalCount={props?.data?.length}
          pageSize={10}
          onPageChange={(page) => setPage(page)}
        /> */}
      </Paper>
    </>
  );
};
FRA_TABLE.propTypes = {
  levelOneColumns: PropTypes.array.isRequired,
  levelTwoColumns: PropTypes.array,
  levelThreeColumns: PropTypes.array,
  levelFourColumns: PropTypes.array,
  maxHeight: PropTypes.number,
  rowsPerPage: PropTypes.number,
  tableData: PropTypes.array,
  tableNote: PropTypes.string,
};

export default FRA_TABLE;
