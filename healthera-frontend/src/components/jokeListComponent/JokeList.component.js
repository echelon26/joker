import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
  //debugger;
  // const [state, setState] = React.useState({
  let columns = [
    { title: 'Title', field: 'title' },
    { title: 'Creation_Date', field: 'creation_Date' },
    { title: 'Updation_Date', field: 'updation_Date' }
  ]
  //   // data: props.props.jokes.map(x=>{
  //   //   return { title: x.title, Creation_Date: x.creation_date,Updation_Date:x.updation_date }
  //   // })
  // });

  return (
    <MaterialTable
      title="Healthera"
      columns={columns}
      data={props.jokes.jokes}
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
        onRowDelete: (joke) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.removeJoke(joke);
            }, 600);
          })
      }}
    />
  );
}
