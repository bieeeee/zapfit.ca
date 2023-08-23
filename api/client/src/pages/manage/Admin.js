import axios from 'axios';
import { axiosInstance } from '../../config';
import useFetch from '../../hooks/useFetch';
import './admin.scss';
import { DataGrid } from '@mui/x-data-grid';


function Admin() {
  const { data, setData, loading, error } = useFetch('http://localhost:8800/api/trials')

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.get('http://localhost:8800/api/trials')
      const trial = data.find(r => r._id === id)
      const trialID = trial._id
      await axios.delete(`http://localhost:8800/api/trials/${trialID}`);
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  const handleButtonClick = (rowId) => {
    setData(prevData =>
      prevData.map(row =>
        row._id === rowId
          ? { ...row, buttonText: row.buttonText === 'Confirm' ? 'Confirmed' : 'Confirm' }
          : row
      )
    );
  };


  const columns = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'phone', headerName: 'Phone number', width: 150 },
    { field: 'datetime', headerName: 'Date', width: 220, sortable: true },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params.rowIndex)
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleButtonClick(params.row._id)}>{params.row.buttonText || "Confirm"}</div>
            <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</div>
          </div>
        )
      }
    }
  ];


  return (
    <div className="datatable">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 1, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        className="datagrid"
        getRowId={(row) => row._id}
      />
    </div>
  )
}

export default Admin
