import React, { useEffect, useState} from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 180, sortable: true },
  { field: "boost", headerName: "Boost", width: 140, sortable: true },
  {
    field: "date",
    headerName: "Created at",
    type: "date",
    width: 150,
    sortable: true
  },
];



export default function Sequences() {
  //const [select, setSelection] = React.useState([]);
  const [data, setData] = useState([]);
  useEffect (()=> {
    const fetchData = async()=> {
      const data = await axios.get("http://localhost:5000/api/sequences"
      );
      console.log(data);
    };
    fetchData();

  }, []);

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5}
       checkboxSelection
    //    onSelectionChange={(newSelection) => {
    //     setSelection(newSelection.rows);
    // }}
        />
        <h1>selection</h1>
    </div>
  );
}
