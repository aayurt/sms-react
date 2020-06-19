import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Paper } from "@material-ui/core";
import AdTable from "../Table/TableMod";
import Constant from "../../router/constant";

export default function TeacherList() {
  const [row, setRow] = useState([]);
  const [rowHead, setRowHead] = useState([]);
  const [rowsPage, setRowsPage] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState(["firstName", "desc"]);
  const passRow = useCallback(() => row, [row]);
  const passPageNo = useCallback(() => pageNo, [pageNo]);
  const passSetPageNo = useCallback((newPageno) => setPageNo(newPageno), []);
  const passLimit = useCallback(() => limit, [limit]);
  const passSetLimit = useCallback((newLimit) => setLimit(newLimit), []);
  const passOrder = useCallback(() => order, [order]);
  const passSetOrder = useCallback((newOrder) => setOrder(newOrder), []);
  const passRowHead = useCallback(() => rowHead, [rowHead]);
  const passTotalPage = useCallback(() => rowsPage, [rowsPage]);
  const getRow = useMemo(
    () => ({
      passRow,
      passRowHead,
      passPageNo,
      passLimit,
      passOrder,
      passSetPageNo,
      passSetLimit,
      passSetOrder,
      passTotalPage,
    }),
    [row, pageNo, limit, order, rowHead, rowsPage]
  );
  const baseUrl = Constant.baseUrl;
  console.log("Teacher List");

  useEffect(() => {
    async function fetchTeacher(pageNo, limit, order) {
      const fetchData = await fetch(`${baseUrl}` + "/teacher", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          offset: pageNo,
          limit: limit,
          order: order,
        }),
      });
      const fetchData_json = await fetchData.json();
      if (fetchData_json.response === "success") {
        setRow(fetchData_json.data);
        setRowsPage(fetchData_json.totalPageNo);
        setRowHead([
          {
            id: "firstName",
            numeric: false,
            disablePadding: true,
            label: "First Name",
            width: "10px",
          },
          {
            id: "lastName",
            numeric: false,
            disablePadding: true,
            label: "Last Name",
          },
          {
            id: "address",
            numeric: false,
            disablePadding: true,
            label: "Address",
          },
          {
            id: "phone_no",
            numeric: false,
            disablePadding: true,
            label: "Phone Number",
          },
        ]);
      }
    }
    fetchTeacher(pageNo, limit, order);
  }, [pageNo, limit, order]);
  return (
    <>
      <center>Teacher List</center>
      <br />
      <Paper elevation={2} style={{ background: "#E9EBEE" }}>
        <AdTable pass={getRow} passlabel="TEACHER" />
      </Paper>
    </>
  );
}
