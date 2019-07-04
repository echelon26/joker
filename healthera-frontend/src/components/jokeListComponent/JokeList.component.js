import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title' },
      { title: 'Creation_Date', field: 'Creation_Date' },
      { title: 'Updation_Date', field: 'Updation_Date' },
    ],
    data: props.props.jokes.map(x=>{
      return { title: x.title, Creation_Date: x.creation_date,Updation_Date:x.updation_date }
    })
  });

  return (
    <MaterialTable
      title="Healthera"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
